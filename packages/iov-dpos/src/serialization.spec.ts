import { ReadonlyDate } from "readonly-date";

import {
  Address,
  Algorithm,
  ChainId,
  Nonce,
  PubkeyBytes,
  SendTransaction,
  SignatureBytes,
  SignedTransaction,
  TokenTicker,
  WithCreator,
} from "@iov/bcp";
import { Encoding } from "@iov/encoding";

import { Serialization, TransactionSerializationOptions } from "./serialization";

const { fromHex } = Encoding;
const { serializeTransaction, toTimestamp, transactionId } = Serialization;

const epochAsUnixTimestamp = 1464109200;
const defaultCreationDate = new ReadonlyDate((865708731 + epochAsUnixTimestamp) * 1000);
const zeroNonce = 0 as Nonce;
// use nethash as chain ID
const liskTestnet = "lisk-da3ed6a454" as ChainId;
const riseTestnet = "rise-296dc9a4d1" as ChainId;
const liskTransactionSerializationOptions: TransactionSerializationOptions = {
  maxMemoLength: 64,
};
const riseTransactionSerializationOptions: TransactionSerializationOptions = {
  maxMemoLength: 0,
};
const defaultPublicKey = {
  algo: Algorithm.Ed25519,
  data: fromHex("00112233445566778899aabbccddeeff00112233445566778899aabbccddeeff") as PubkeyBytes,
};
const defaultSender = "10645226540143571783";
const defaultLiskSender = (defaultSender + "L") as Address;
const defaultRiseSender = (defaultSender + "R") as Address;
const defaultXnetSender = (defaultSender + "X") as Address;

describe("Serialization", () => {
  describe("toTimestamp", () => {
    it("returns 0 at epoch", () => {
      expect(toTimestamp(new ReadonlyDate(ReadonlyDate.UTC(2016, 4, 24, 17, 0, 0, 0)))).toEqual(0);
    });

    it("can encode time before epoch", () => {
      // one second
      expect(toTimestamp(new ReadonlyDate(ReadonlyDate.UTC(2016, 4, 24, 16, 59, 59, 0)))).toEqual(-1);
      // one minute
      expect(toTimestamp(new ReadonlyDate(ReadonlyDate.UTC(2016, 4, 24, 16, 59, 0, 0)))).toEqual(-60);
      // one hour
      expect(toTimestamp(new ReadonlyDate(ReadonlyDate.UTC(2016, 4, 24, 16, 0, 0, 0)))).toEqual(-3600);
      // one day
      expect(toTimestamp(new ReadonlyDate(ReadonlyDate.UTC(2016, 4, 23, 17, 0, 0, 0)))).toEqual(-86400);
    });

    it("can encode time after epoch", () => {
      // one second
      expect(toTimestamp(new ReadonlyDate(ReadonlyDate.UTC(2016, 4, 24, 17, 0, 1, 0)))).toEqual(1);
      // one minute
      expect(toTimestamp(new ReadonlyDate(ReadonlyDate.UTC(2016, 4, 24, 17, 1, 0, 0)))).toEqual(60);
      // one hour
      expect(toTimestamp(new ReadonlyDate(ReadonlyDate.UTC(2016, 4, 24, 18, 0, 0, 0)))).toEqual(3600);
      // one day
      expect(toTimestamp(new ReadonlyDate(ReadonlyDate.UTC(2016, 4, 25, 17, 0, 0, 0)))).toEqual(86400);
    });

    it("can encode current time", () => {
      expect(toTimestamp(new ReadonlyDate(ReadonlyDate.now()))).toBeGreaterThan(73864000);
    });

    it("is not affected by the year 2038 problem", () => {
      // Example date: 2040-03-21T17:13:22Z
      //
      // Convert to unix timestamp (exceeds int32 range but Python can do it)
      // $ python3 -c 'import calendar, datetime; print(calendar.timegm(datetime.datetime(2040, 3, 21, 17, 13, 22, 0).utctimetuple()))'
      // 2215962802
      const dateIn2040 = new ReadonlyDate(ReadonlyDate.UTC(2040, 2, 21, 17, 13, 22));
      expect(toTimestamp(dateIn2040)).toEqual(2215962802 - epochAsUnixTimestamp);
    });

    it("throws for time 70 years before epoch", () => {
      expect(() =>
        toTimestamp(new ReadonlyDate(ReadonlyDate.UTC(2016 - 70, 4, 24, 17, 0, 0, 0))),
      ).toThrowError(/not in int32 range/i);
    });

    it("throws for time 70 years after epoch", () => {
      expect(() =>
        toTimestamp(new ReadonlyDate(ReadonlyDate.UTC(2016 + 70, 4, 24, 17, 0, 0, 0))),
      ).toThrowError(/not in int32 range/i);
    });
  });

  describe("serializeTransaction", () => {
    it("can serialize RISE transaction of type 0 without memo", () => {
      const tx: SendTransaction & WithCreator = {
        kind: "bcp/send",
        creator: {
          chainId: riseTestnet,
          pubkey: defaultPublicKey,
        },
        amount: {
          quantity: "123456789",
          fractionalDigits: 8,
          tokenTicker: "RISE" as TokenTicker,
        },
        sender: defaultRiseSender,
        recipient: "10010344879730196491R" as Address,
      };

      const serialized = serializeTransaction(tx, defaultCreationDate, riseTransactionSerializationOptions);
      expect(serialized).toEqual(
        fromHex(
          "00bbaa993300112233445566778899aabbccddeeff00112233445566778899aabbccddeeff8aebe3a18b78000b15cd5b0700000000",
        ),
      );
    });

    it("can serialize Lisk transaction of type 0 without memo", () => {
      const tx: SendTransaction & WithCreator = {
        kind: "bcp/send",
        creator: {
          chainId: liskTestnet,
          pubkey: defaultPublicKey,
        },
        amount: {
          quantity: "123456789",
          fractionalDigits: 8,
          tokenTicker: "LSK" as TokenTicker,
        },
        sender: defaultLiskSender,
        recipient: "10010344879730196491L" as Address,
      };

      const serialized = serializeTransaction(tx, defaultCreationDate, liskTransactionSerializationOptions);
      expect(serialized).toEqual(
        fromHex(
          "00bbaa993300112233445566778899aabbccddeeff00112233445566778899aabbccddeeff8aebe3a18b78000b15cd5b0700000000",
        ),
      );
    });

    it("throws error if fractionalDigits are not correct", () => {
      const tx: SendTransaction & WithCreator = {
        kind: "bcp/send",
        creator: {
          chainId: riseTestnet,
          pubkey: defaultPublicKey,
        },
        amount: {
          quantity: "123456789",
          fractionalDigits: 9,
          tokenTicker: "RISE" as TokenTicker,
        },
        sender: defaultRiseSender,
        recipient: "10010344879730196491R" as Address,
      };
      expect(() =>
        serializeTransaction(tx, defaultCreationDate, riseTransactionSerializationOptions),
      ).toThrowError(/Requires 8/);
    });

    it("throws error if creator does not match sender", () => {
      const tx: SendTransaction & WithCreator = {
        kind: "bcp/send",
        creator: {
          chainId: riseTestnet,
          pubkey: defaultPublicKey,
        },
        amount: {
          quantity: "123456789",
          fractionalDigits: 8,
          tokenTicker: "RISE" as TokenTicker,
        },
        sender: "not sender" as Address,
        recipient: "10010344879730196491R" as Address,
      };
      expect(() =>
        serializeTransaction(tx, defaultCreationDate, riseTransactionSerializationOptions),
      ).toThrowError(/creator does not match sender/i);
    });

    it("can serialize Lisk transaction of type 0 with memo", () => {
      const tx: SendTransaction & WithCreator = {
        kind: "bcp/send",
        creator: {
          chainId: liskTestnet,
          pubkey: defaultPublicKey,
        },
        amount: {
          quantity: "123456789",
          fractionalDigits: 8,
          tokenTicker: "LSK" as TokenTicker,
        },
        sender: defaultLiskSender,
        recipient: "10010344879730196491L" as Address,
        memo: "The nice memo I attach to that money for the whole world to read",
      };

      const serialized = serializeTransaction(tx, defaultCreationDate, liskTransactionSerializationOptions);
      expect(serialized).toEqual(
        fromHex(
          "00bbaa993300112233445566778899aabbccddeeff00112233445566778899aabbccddeeff8aebe3a18b78000b15cd5b0700000000546865206e696365206d656d6f20492061747461636820746f2074686174206d6f6e657920666f72207468652077686f6c6520776f726c6420746f2072656164",
        ),
      );
    });

    it("fails to serialize Lisk transaction of type 0 with memo > 64 chars", () => {
      const tx: SendTransaction & WithCreator = {
        kind: "bcp/send",
        creator: {
          chainId: liskTestnet,
          pubkey: defaultPublicKey,
        },
        amount: {
          quantity: "123456789",
          fractionalDigits: 8,
          tokenTicker: "LSK" as TokenTicker,
        },
        sender: defaultLiskSender,
        memo: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
        recipient: "10010344879730196491L" as Address,
      };

      expect(() =>
        serializeTransaction(tx, defaultCreationDate, liskTransactionSerializationOptions),
      ).toThrowError(/memo length exceeds limit/i);
    });

    it("fails to serialize Lisk transaction of type 0 with memo > 64 bytes", () => {
      const tx: SendTransaction & WithCreator = {
        kind: "bcp/send",
        creator: {
          chainId: liskTestnet,
          pubkey: defaultPublicKey,
        },
        amount: {
          quantity: "123456789",
          fractionalDigits: 8,
          tokenTicker: "LSK" as TokenTicker,
        },
        sender: defaultLiskSender,
        // ⇉ (Rightwards Paired Arrows, U+21c9) takes 2 bytes in UTF-8
        memo: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di⇉",
        recipient: "10010344879730196491L" as Address,
      };

      expect(() =>
        serializeTransaction(tx, defaultCreationDate, liskTransactionSerializationOptions),
      ).toThrowError(/memo length exceeds limit/i);
    });

    it("works for transaction with fee", () => {
      const tx: SendTransaction & WithCreator = {
        kind: "bcp/send",
        creator: {
          chainId: "xnet" as ChainId,
          pubkey: defaultPublicKey,
        },
        amount: {
          quantity: "123456789",
          fractionalDigits: 8,
          tokenTicker: "XNET" as TokenTicker,
        },
        fee: {
          tokens: {
            // 0.1 XNET
            quantity: "10000000",
            fractionalDigits: 8,
            tokenTicker: "XNET" as TokenTicker,
          },
        },
        sender: defaultXnetSender,
        recipient: "10010344879730196491X" as Address,
      };

      expect(serializeTransaction(tx, defaultCreationDate, { maxMemoLength: 12 })).toBeTruthy();
    });

    it("fails to serialize transaction with empty fee", () => {
      const tx: SendTransaction & WithCreator = {
        kind: "bcp/send",
        creator: {
          chainId: "xnet" as ChainId,
          pubkey: defaultPublicKey,
        },
        amount: {
          quantity: "123456789",
          fractionalDigits: 8,
          tokenTicker: "XNET" as TokenTicker,
        },
        fee: {
          // all fields unset
        },
        sender: defaultXnetSender,
        recipient: "10010344879730196491X" as Address,
      };

      expect(() => serializeTransaction(tx, defaultCreationDate, { maxMemoLength: 12 })).toThrowError(
        /missing tokens in transaction fee/i,
      );
    });

    it("fails to serialize transaction with gasLimit", () => {
      const tx: SendTransaction & WithCreator = {
        kind: "bcp/send",
        creator: {
          chainId: "xnet" as ChainId,
          pubkey: defaultPublicKey,
        },
        amount: {
          quantity: "123456789",
          fractionalDigits: 8,
          tokenTicker: "XNET" as TokenTicker,
        },
        sender: defaultXnetSender,
        recipient: "10010344879730196491X" as Address,
        fee: {
          gasLimit: "1",
        },
      };

      expect(() => serializeTransaction(tx, defaultCreationDate, { maxMemoLength: 12 })).toThrowError(
        /found unexpected gasLimit in transaction fee/i,
      );
    });

    it("fails to serialize transaction with gasPrice", () => {
      const tx: SendTransaction & WithCreator = {
        kind: "bcp/send",
        creator: {
          chainId: "xnet" as ChainId,
          pubkey: defaultPublicKey,
        },
        amount: {
          quantity: "123456789",
          fractionalDigits: 8,
          tokenTicker: "XNET" as TokenTicker,
        },
        sender: defaultXnetSender,
        recipient: "10010344879730196491X" as Address,
        fee: {
          gasPrice: {
            quantity: "1",
            fractionalDigits: 18,
            tokenTicker: "ETH" as TokenTicker,
          },
        },
      };

      expect(() => serializeTransaction(tx, defaultCreationDate, { maxMemoLength: 12 })).toThrowError(
        /found unexpected gasPrice in transaction fee/i,
      );
    });
  });

  describe("transactionId", () => {
    it("can calculate ID of Lisk transaction of type 0 without memo", () => {
      const tx: SendTransaction & WithCreator = {
        kind: "bcp/send",
        creator: {
          chainId: liskTestnet,
          pubkey: defaultPublicKey,
        },
        amount: {
          quantity: "123456789",
          fractionalDigits: 8,
          tokenTicker: "LSK" as TokenTicker,
        },
        sender: defaultLiskSender,
        recipient: "10010344879730196491L" as Address,
      };

      const signed: SignedTransaction = {
        transaction: tx,
        primarySignature: {
          nonce: zeroNonce,
          pubkey: defaultPublicKey,
          signature: fromHex("26272829") as SignatureBytes,
        },
        otherSignatures: [],
      };

      const id = transactionId(
        signed.transaction,
        defaultCreationDate,
        signed.primarySignature,
        liskTransactionSerializationOptions,
      );
      expect(id).toEqual("15806479375328957764");
    });
  });
});
