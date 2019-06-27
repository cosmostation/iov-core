import { Address, Algorithm, ChainId, Nonce, PubkeyBytes, TokenTicker, UnsignedTransaction } from "@iov/bcp";
import { Bech32, Encoding } from "@iov/encoding";

import {
  decodeAmount,
  decodeElectionRule,
  decodeElectorate,
  decodePrivkey,
  decodeProposal,
  decodePubkey,
  decodeToken,
  decodeUserData,
  decodeUsernameNft,
  parseMsg,
  parseTx,
} from "./decode";
import * as codecImpl from "./generated/codecimpl";
import {
  chainId,
  coinBin,
  coinJson,
  privBin,
  privJson,
  pubBin,
  pubJson,
  sendTxBin,
  sendTxJson,
  signedTxBin,
} from "./testdata.spec";
import {
  isAddAddressToUsernameTx,
  isCreateEscrowTx,
  isCreateMultisignatureTx,
  isCreateProposalTx,
  isRegisterUsernameTx,
  isReleaseEscrowTx,
  isRemoveAddressFromUsernameTx,
  isReturnEscrowTx,
  isTallyTx,
  isUpdateEscrowPartiesTx,
  isUpdateMultisignatureTx,
  isVoteTx,
  Keyed,
  Participant,
  ProposalExecutorResult,
  ProposalResult,
  ProposalStatus,
  VoteOption,
} from "./types";

const { fromHex, toUtf8 } = Encoding;

describe("Decode", () => {
  it("decodes username NFT", () => {
    const nft: codecImpl.username.IUsernameToken = {
      base: {
        id: toUtf8("alice"),
        owner: fromHex("0e95c039ef14ee329d0e09d84f909cf9eb5ef472"),
      },
      details: {
        addresses: [
          {
            blockchainId: toUtf8("wonderland"),
            address: "12345W",
          },
        ],
      },
    };
    const decoded = decodeUsernameNft(nft, "bns-testchain" as ChainId);
    expect(decoded.id).toEqual("alice");
    expect(decoded.owner).toEqual(Bech32.encode("tiov", fromHex("0e95c039ef14ee329d0e09d84f909cf9eb5ef472")));
    expect(decoded.addresses.length).toEqual(1);
    expect(decoded.addresses[0]).toEqual({
      chainId: "wonderland" as ChainId,
      address: "12345W" as Address,
    });
  });

  it("decode pubkey", () => {
    const decoded = codecImpl.crypto.PublicKey.decode(pubBin);
    const pubkey = decodePubkey(decoded);
    expect(pubkey).toEqual(pubJson);
  });

  it("decode privkey", () => {
    const decoded = codecImpl.crypto.PrivateKey.decode(privBin);
    const privkey = decodePrivkey(decoded);
    expect(privkey).toEqual(privJson);
  });

  describe("decodeUserData", () => {
    it("works", () => {
      const userData: codecImpl.sigs.IUserData = {
        pubkey: {
          ed25519: fromHex("aabbccdd"),
        },
        sequence: 7,
      };
      const decoded = decodeUserData(userData);
      expect(decoded).toEqual({
        nonce: 7 as Nonce,
      });
    });
  });

  it("has working decodeToken", () => {
    const token: codecImpl.namecoin.IToken & Keyed = {
      _id: toUtf8("TRASH"),
      name: "Trash",
      sigFigs: 22, // Will be ignored. It is always 9.
    };
    const ticker = decodeToken(token);
    expect(ticker).toEqual({
      tokenTicker: "TRASH" as TokenTicker,
      tokenName: "Trash",
      fractionalDigits: 9,
    });
  });

  describe("decodeAmount", () => {
    it("can decode amount 3.123456789 ASH", () => {
      const backendAmount: codecImpl.coin.ICoin = {
        whole: 3,
        fractional: 123456789,
        ticker: "ASH",
      };
      const decoded = decodeAmount(backendAmount);
      expect(decoded).toEqual({
        quantity: "3123456789",
        fractionalDigits: 9,
        tokenTicker: "ASH" as TokenTicker,
      });
    });

    it("can decode amount 0.000000001 ASH", () => {
      const backendAmount: codecImpl.coin.ICoin = {
        whole: 0,
        fractional: 1,
        ticker: "ASH",
      };
      const decoded = decodeAmount(backendAmount);
      expect(decoded).toEqual({
        quantity: "1",
        fractionalDigits: 9,
        tokenTicker: "ASH" as TokenTicker,
      });
    });

    it("can decode max amount 999999999999999.999999999 ASH", () => {
      // https://github.com/iov-one/weave/blob/v0.9.3/x/codec.proto#L15
      const backendAmount: codecImpl.coin.ICoin = {
        whole: 10 ** 15 - 1,
        fractional: 10 ** 9 - 1,
        ticker: "ASH",
      };
      const decoded = decodeAmount(backendAmount);
      expect(decoded).toEqual({
        quantity: "999999999999999999999999",
        fractionalDigits: 9,
        tokenTicker: "ASH" as TokenTicker,
      });
    });

    it("is compatible to test data", () => {
      const decoded = codecImpl.coin.Coin.decode(coinBin);
      const amount = decodeAmount(decoded);
      expect(amount).toEqual(coinJson);
    });

    it("throws for decoding negative amount", () => {
      // ICoin allows negative values, which are now supported client-side
      {
        // -3.0 ASH
        const backendAmount: codecImpl.coin.ICoin = {
          whole: -3,
          fractional: 0,
          ticker: "ASH",
        };
        expect(() => decodeAmount(backendAmount)).toThrowError(/`whole` must not be negative/i);
      }
      {
        // -0.123456789 ASH
        const backendAmount: codecImpl.coin.ICoin = {
          whole: 0,
          fractional: -123456789,
          ticker: "ASH",
        };
        expect(() => decodeAmount(backendAmount)).toThrowError(/`fractional` must not be negative/i);
      }
    });
  });

  describe("decodeElectorate", () => {
    it("works", () => {
      const electorate: codecImpl.gov.IElectorate & Keyed = {
        _id: fromHex("220800000000000000052801"),
        metadata: { schema: 1 },
        version: 3,
        admin: fromHex("5555556688770011001100110011001100110011"),
        title: "A committee",
        electors: [
          {
            address: fromHex("1111111111111111111111111111111111111111"),
            weight: 1,
          },
          {
            address: fromHex("2222222222222222222222222222222222222222"),
            weight: 2,
          },
          {
            address: fromHex("3333333333333333333333333333333333333333"),
            weight: 3,
          },
        ],
        totalElectorateWeight: 6,
      };

      expect(decodeElectorate("tiov", electorate)).toEqual({
        id: 5,
        version: 3,
        admin: "tiov124242e5gwuqpzqq3qqgsqygqzyqpzqq350k5np" as Address,
        title: "A committee",
        electors: {
          tiov1zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3scsw6l: { weight: 1 },
          tiov1yg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3zl94gjg: { weight: 2 },
          tiov1xvenxvenxvenxvenxvenxvenxvenxvendmz486: { weight: 3 },
        },
        totalWeight: 6,
      });
    });
  });

  describe("decodeElectionRule", () => {
    it("works", () => {
      const rule: codecImpl.gov.IElectionRule & Keyed = {
        _id: fromHex("220800000000000000022801"),
        metadata: { schema: 1 },
        version: 3,
        admin: fromHex("5555556688770011001100110011001100110011"),
        electorateId: fromHex("000007"),
        title: "This is how it works",
        votingPeriod: 11223344556677,
        threshold: {
          numerator: 1,
          denominator: 2,
        },
        quorum: {
          numerator: 3,
          denominator: 4,
        },
      };
      expect(decodeElectionRule("tiov", rule)).toEqual({
        id: fromHex("0000000000000002"),
        version: 3,
        admin: "tiov124242e5gwuqpzqq3qqgsqygqzyqpzqq350k5np" as Address,
        electorateId: 7,
        title: "This is how it works",
        votingPeriod: 11223344556677,
        threshold: {
          numerator: 1,
          denominator: 2,
        },
        quorum: {
          numerator: 3,
          denominator: 4,
        },
      });
    });
  });

  describe("decodeProposal", () => {
    it("works", () => {
      const proposal: codecImpl.gov.IProposal & Keyed = {
        _id: fromHex("001100220033aabb"),
        metadata: { schema: 1 },
        title: "This will happen next",
        rawOption: codecImpl.app.ProposalOptions.encode({
          textResolutionMsg: {
            metadata: { schema: 1 },
            resolution: "la la la",
          },
        }).finish(),
        description: "foo bar",
        electionRuleRef: {
          id: fromHex("aabbaabbccddbbff"),
          version: 28,
        },
        electorateRef: {
          id: fromHex("0011001100110011aabb"),
          version: 3,
        },
        votingStartTime: 42424242,
        votingEndTime: 42424243,
        submissionTime: 3003,
        author: fromHex("0011223344556677889900112233445566778899"),
        voteState: {
          totalYes: 1,
          totalNo: 2,
          totalAbstain: 3,
          totalElectorateWeight: 10,
        },
        status: codecImpl.gov.Proposal.Status.PROPOSAL_STATUS_SUBMITTED,
        result: codecImpl.gov.Proposal.Result.PROPOSAL_RESULT_UNDEFINED,
        executorResult: codecImpl.gov.Proposal.ExecutorResult.PROPOSAL_EXECUTOR_RESULT_NOT_RUN,
      };

      expect(decodeProposal("tiov", proposal)).toEqual({
        id: "001100220033AABB",
        title: "This will happen next",
        option: "la la la",
        description: "foo bar",
        electionRule: {
          id: fromHex("aabbaabbccddbbff"),
          version: 28,
        },
        electorate: {
          id: fromHex("0011001100110011aabb"),
          version: 3,
        },
        votingStartTime: 42424242,
        votingEndTime: 42424243,
        submissionTime: 3003,
        author: "tiov1qqgjyv6y24n80zyeqqgjyv6y24n80zyed9d6mt" as Address,
        state: {
          totalYes: 1,
          totalNo: 2,
          totalAbstain: 3,
          totalElectorateWeight: 10,
        },
        status: ProposalStatus.Submitted,
        result: ProposalResult.Undefined,
        executorResult: ProposalExecutorResult.NotRun,
      });
    });
  });

  describe("transactions", () => {
    it("decode invalid transaction fails", () => {
      /* tslint:disable-next-line:no-bitwise */
      const badBin = signedTxBin.map((x: number, i: number) => (i % 5 ? x ^ 0x01 : x));
      expect(() => codecImpl.app.Tx.decode(badBin)).toThrowError();
    });

    // unsigned tx will fail as parsing requires a sig to extract signer
    it("decode unsigned transaction fails", () => {
      const decoded = codecImpl.app.Tx.decode(sendTxBin);
      expect(() => parseTx(decoded, chainId)).toThrowError(/missing first signature/);
    });

    it("decode signed transaction", () => {
      const decoded = codecImpl.app.Tx.decode(signedTxBin);
      const tx = parseTx(decoded, chainId);
      expect(tx.transaction).toEqual(sendTxJson);
    });
  });

  describe("parseMsg", () => {
    const defaultBaseTx: UnsignedTransaction = {
      kind: "", // this should be overriden by parseMsg
      creator: {
        chainId: "bns-chain" as ChainId,
        pubkey: {
          algo: Algorithm.Ed25519,
          data: Encoding.fromHex("aabbccdd") as PubkeyBytes,
        },
      },
    };

    const defaultSender = "tiov1dcg3fat5zrvw00xezzjk3jgedm7pg70y222af3" as Address;
    const defaultRecipient = "tiov1k898u78hgs36uqw68dg7va5nfkgstu5z0fhz3f" as Address;
    const defaultArbiter = "tiov17yp0mh3yxwv6yxx386mxyfzlqnhe6q58edka6r" as Address;
    const defaultEscrowId = fromHex("0000000000000004");

    // Token sends

    // TODO: add missing tests here

    // Atomic swaps

    // TODO: add missing tests here

    // Usernames

    it("works for AddAddressToUsernameTx", () => {
      const transactionMessage: codecImpl.app.ITx = {
        addUsernameAddressNftMsg: {
          usernameId: toUtf8("alice"),
          blockchainId: toUtf8("wonderland"),
          address: "0xAABB001122DD",
        },
      };
      const parsed = parseMsg(defaultBaseTx, transactionMessage);
      if (!isAddAddressToUsernameTx(parsed)) {
        throw new Error("unexpected transaction kind");
      }
      expect(parsed.username).toEqual("alice");
      expect(parsed.payload.chainId).toEqual("wonderland");
      expect(parsed.payload.address).toEqual("0xAABB001122DD");
    });

    it("works for RegisterUsernameTx", () => {
      const transactionMessage: codecImpl.app.ITx = {
        issueUsernameNftMsg: {
          id: Encoding.toAscii("bobby"),
          owner: Encoding.fromHex("0011223344556677889900112233445566778899"),
          approvals: [],
          details: {
            addresses: [
              {
                blockchainId: Encoding.toAscii("chain1"),
                address: "23456782367823X",
              },
              {
                blockchainId: Encoding.toAscii("chain2"),
                address: "0x001100aabbccddffeeddaa8899776655",
              },
            ],
          },
        },
      };
      const parsed = parseMsg(defaultBaseTx, transactionMessage);
      if (!isRegisterUsernameTx(parsed)) {
        throw new Error("unexpected transaction kind");
      }
      expect(parsed.username).toEqual("bobby");
      expect(parsed.addresses.length).toEqual(2);
      expect(parsed.addresses[0]).toEqual({
        chainId: "chain1" as ChainId,
        address: "23456782367823X" as Address,
      });
      expect(parsed.addresses[1]).toEqual({
        chainId: "chain2" as ChainId,
        address: "0x001100aabbccddffeeddaa8899776655" as Address,
      });
    });

    it("works for RemoveAddressFromUsernameTx", () => {
      const transactionMessage: codecImpl.app.ITx = {
        removeUsernameAddressMsg: {
          usernameId: toUtf8("alice"),
          address: "0xAABB001122DD",
          blockchainId: toUtf8("wonderland"),
        },
      };
      const parsed = parseMsg(defaultBaseTx, transactionMessage);
      if (!isRemoveAddressFromUsernameTx(parsed)) {
        throw new Error("unexpected transaction kind");
      }
      expect(parsed.username).toEqual("alice");
      expect(parsed.payload.chainId).toEqual("wonderland");
      expect(parsed.payload.address).toEqual("0xAABB001122DD");
    });

    // Multisignature contracts

    it("works for CreateMultisignatureTx", () => {
      // tslint:disable-next-line:readonly-array
      const iParticipants: codecImpl.multisig.IParticipant[] = [
        {
          signature: fromHex("1234567890123456789012345678901234567890"),
          weight: 4,
        },
        {
          signature: fromHex("abcdef0123abcdef0123abcdef0123abcdef0123"),
          weight: 1,
        },
        {
          signature: fromHex("9999999999999999999999999999999999999999"),
          weight: 1,
        },
      ];
      const participants: readonly Participant[] = [
        {
          address: "tiov1zg69v7yszg69v7yszg69v7yszg69v7ysy7xxgy" as Address,
          weight: 4,
        },
        {
          address: "tiov140x77qfr40x77qfr40x77qfr40x77qfrj4zpp5" as Address,
          weight: 1,
        },
        {
          address: "tiov1nxvenxvenxvenxvenxvenxvenxvenxverxe7mm" as Address,
          weight: 1,
        },
      ];
      const transactionMessage: codecImpl.app.ITx = {
        createContractMsg: {
          participants: iParticipants,
          activationThreshold: 2,
          adminThreshold: 3,
        },
      };
      const parsed = parseMsg(defaultBaseTx, transactionMessage);
      if (!isCreateMultisignatureTx(parsed)) {
        throw new Error("unexpected transaction kind");
      }
      expect(parsed.participants).toEqual(participants);
      expect(parsed.activationThreshold).toEqual(2);
      expect(parsed.adminThreshold).toEqual(3);
    });

    it("works for UpdateMultisignatureTx", () => {
      // tslint:disable-next-line:readonly-array
      const iParticipants: codecImpl.multisig.IParticipant[] = [
        {
          signature: fromHex("1234567890123456789012345678901234567890"),
          weight: 4,
        },
        {
          signature: fromHex("abcdef0123abcdef0123abcdef0123abcdef0123"),
          weight: 1,
        },
        {
          signature: fromHex("9999999999999999999999999999999999999999"),
          weight: 1,
        },
      ];
      const participants: readonly Participant[] = [
        {
          address: "tiov1zg69v7yszg69v7yszg69v7yszg69v7ysy7xxgy" as Address,
          weight: 4,
        },
        {
          address: "tiov140x77qfr40x77qfr40x77qfr40x77qfrj4zpp5" as Address,
          weight: 1,
        },
        {
          address: "tiov1nxvenxvenxvenxvenxvenxvenxvenxverxe7mm" as Address,
          weight: 1,
        },
      ];
      const transactionMessage: codecImpl.app.ITx = {
        updateContractMsg: {
          contractId: fromHex("0123456789"),
          participants: iParticipants,
          activationThreshold: 2,
          adminThreshold: 3,
        },
      };
      const parsed = parseMsg(defaultBaseTx, transactionMessage);
      if (!isUpdateMultisignatureTx(parsed)) {
        throw new Error("unexpected transaction kind");
      }
      expect(parsed.contractId).toEqual(fromHex("0123456789"));
      expect(parsed.participants).toEqual(participants);
      expect(parsed.activationThreshold).toEqual(2);
      expect(parsed.adminThreshold).toEqual(3);
    });

    // Escrows

    it("works for CreateEscrowTx", () => {
      const timeout = 1560940182424;
      const memo = "testing 123";
      const transactionMessage: codecImpl.app.ITx = {
        createEscrowMsg: {
          src: Encoding.fromHex("6e1114f57410d8e7bcd910a568c9196efc1479e4"),
          arbiter: Encoding.fromHex("f102fdde243399a218d13eb662245f04ef9d0287"),
          recipient: Encoding.fromHex("b1ca7e78f74423ae01da3b51e676934d9105f282"),
          amount: [
            {
              whole: 3,
              fractional: 123456789,
              ticker: "ASH",
            },
          ],
          timeout: timeout,
          memo: memo,
        },
      };
      const parsed = parseMsg(defaultBaseTx, transactionMessage);
      if (!isCreateEscrowTx(parsed)) {
        throw new Error("unexpected transaction kind");
      }
      expect(parsed.sender).toEqual(defaultSender);
      expect(parsed.arbiter).toEqual(defaultArbiter);
      expect(parsed.recipient).toEqual(defaultRecipient);
      expect(parsed.amounts).toEqual([
        {
          quantity: "3123456789",
          fractionalDigits: 9,
          tokenTicker: "ASH" as TokenTicker,
        },
      ]);
      expect(parsed.timeout.timestamp).toEqual(timeout);
      expect(parsed.memo).toEqual(memo);
    });

    it("works for ReleaseEscrowTx", () => {
      const transactionMessage: codecImpl.app.ITx = {
        releaseEscrowMsg: {
          escrowId: defaultEscrowId,
          amount: [
            {
              whole: 3,
              fractional: 123456789,
              ticker: "ASH",
            },
          ],
        },
      };
      const parsed = parseMsg(defaultBaseTx, transactionMessage);
      if (!isReleaseEscrowTx(parsed)) {
        throw new Error("unexpected transaction kind");
      }
      expect(parsed.escrowId).toEqual(defaultEscrowId);
      expect(parsed.amounts).toEqual([
        {
          quantity: "3123456789",
          fractionalDigits: 9,
          tokenTicker: "ASH" as TokenTicker,
        },
      ]);
    });

    it("works for ReturnEscrowTx", () => {
      const transactionMessage: codecImpl.app.ITx = {
        returnEscrowMsg: {
          escrowId: defaultEscrowId,
        },
      };
      const parsed = parseMsg(defaultBaseTx, transactionMessage);
      if (!isReturnEscrowTx(parsed)) {
        throw new Error("unexpected transaction kind");
      }
      expect(parsed.escrowId).toEqual(defaultEscrowId);
    });

    it("works for UpdateEscrowPartiesTx", () => {
      const transactionMessage: codecImpl.app.ITx = {
        updateEscrowMsg: {
          escrowId: defaultEscrowId,
          sender: Encoding.fromHex("6e1114f57410d8e7bcd910a568c9196efc1479e4"),
          arbiter: Encoding.fromHex("f102fdde243399a218d13eb662245f04ef9d0287"),
          recipient: Encoding.fromHex("b1ca7e78f74423ae01da3b51e676934d9105f282"),
        },
      };
      const parsed = parseMsg(defaultBaseTx, transactionMessage);
      if (!isUpdateEscrowPartiesTx(parsed)) {
        throw new Error("unexpected transaction kind");
      }
      expect(parsed.escrowId).toEqual(defaultEscrowId);
      expect(parsed.sender).toEqual(defaultSender);
      expect(parsed.arbiter).toEqual(defaultArbiter);
      expect(parsed.recipient).toEqual(defaultRecipient);
    });

    // Governance

    it("works for CreateProposalTx", () => {
      const transactionMessage: codecImpl.app.ITx = {
        createProposalMsg: {
          title: "This will happen next",
          rawOption: codecImpl.app.ProposalOptions.encode({
            textResolutionMsg: {
              metadata: { schema: 1 },
              resolution: "la la la",
            },
          }).finish(),
          description: "foo bar",
          electionRuleId: Encoding.fromHex("aabbaabbccddbbff"),
          startTime: 42424242,
          author: Encoding.fromHex("0011223344556677889900112233445566778899"),
        },
      };
      const parsed = parseMsg(defaultBaseTx, transactionMessage);
      if (!isCreateProposalTx(parsed)) {
        throw new Error("unexpected transaction kind");
      }
      expect(parsed.title).toEqual("This will happen next");
      expect(parsed.option).toEqual("la la la");
      expect(parsed.description).toEqual("foo bar");
      expect(parsed.electionRuleId).toEqual(Encoding.fromHex("aabbaabbccddbbff"));
      expect(parsed.startTime).toEqual(42424242);
      expect(parsed.author).toEqual("tiov1qqgjyv6y24n80zyeqqgjyv6y24n80zyed9d6mt");
    });

    it("works for VoteTx", () => {
      const transactionMessage: codecImpl.app.ITx = {
        voteMsg: {
          metadata: { schema: 1 },
          proposalId: fromHex("aabbaabbddeeffffaa"),
          selected: codecImpl.gov.VoteOption.VOTE_OPTION_YES,
        },
      };
      const parsed = parseMsg(defaultBaseTx, transactionMessage);
      if (!isVoteTx(parsed)) {
        throw new Error("unexpected transaction kind");
      }
      expect(parsed.selection).toEqual(VoteOption.Yes);
      expect(parsed.proposalId).toEqual("AABBAABBDDEEFFFFAA");
    });

    it("works for TallyTx", () => {
      const transactionMessage: codecImpl.app.ITx = {
        tallyMsg: {
          metadata: { schema: 1 },
          proposalId: fromHex("aabbaabbddeeffffaa"),
        },
      };
      const parsed = parseMsg(defaultBaseTx, transactionMessage);
      if (!isTallyTx(parsed)) {
        throw new Error("unexpected transaction kind");
      }
      expect(parsed.proposalId).toEqual("AABBAABBDDEEFFFFAA");
    });
  });
});
