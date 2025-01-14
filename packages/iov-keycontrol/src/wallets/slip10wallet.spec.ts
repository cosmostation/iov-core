import { Algorithm, ChainId, PrehashType, PubkeyBytes, SignableBytes } from "@iov/bcp";
import { Sha256, Sha512, Slip10Curve, Slip10RawIndex } from "@iov/crypto";
import { Encoding } from "@iov/encoding";

import { WalletSerializationString } from "../wallet";
import { Slip10Wallet } from "./slip10wallet";

const { fromHex } = Encoding;

describe("Slip10Wallet", () => {
  const defaultChain = "chain123" as ChainId;
  const emptyWallet = `
    {
      "formatVersion": 2,
      "id": "aX7hg93h9goHf",
      "secret": "rhythm they leave position crowd cart pilot student razor indoor gesture thrive",
      "curve": "ed25519 seed",
      "identities": []
    }
    ` as WalletSerializationString;

  const emptySecp256k1Wallet = `
    {
      "formatVersion": 2,
      "id": "2h3487euib4h",
      "secret": "rhythm they leave position crowd cart pilot student razor indoor gesture thrive",
      "curve": "Bitcoin seed",
      "identities": []
    }
    ` as WalletSerializationString;

  it("can be deserialized", () => {
    const wallet = new Slip10Wallet(emptyWallet);
    expect(wallet).toBeTruthy();
    expect(wallet.getIdentities().length).toEqual(0);
    expect(wallet.id).toBeTruthy();
  });

  it("can be created from entropy", () => {
    const wallet = Slip10Wallet.fromEntropyWithCurve(
      Slip10Curve.Ed25519,
      Encoding.fromHex("51385c41df88cbe7c579e99de04259b1aa264d8e2416f1885228a4d069629fad"),
    );
    expect(wallet).toBeTruthy();
    expect(wallet.getIdentities().length).toEqual(0);
    expect(wallet.id).toBeTruthy();
  });

  it("can be created from mnemonic", () => {
    const wallet = Slip10Wallet.fromMnemonicWithCurve(
      Slip10Curve.Ed25519,
      "execute wheel pupil bachelor crystal short domain faculty shrimp focus swap hazard",
    );
    expect(wallet).toBeTruthy();
    expect(wallet.getIdentities().length).toEqual(0);
    expect(wallet.id).toBeTruthy();
  });

  it("can have a label", () => {
    const wallet = Slip10Wallet.fromMnemonicWithCurve(
      Slip10Curve.Ed25519,
      "execute wheel pupil bachelor crystal short domain faculty shrimp focus swap hazard",
    );
    expect(wallet.label.value).toBeUndefined();

    wallet.setLabel("foo");
    expect(wallet.label.value).toEqual("foo");

    wallet.setLabel(undefined);
    expect(wallet.label.value).toBeUndefined();
  });

  describe("previewIdentity", () => {
    it("works for Secp256k1", async () => {
      // Test data generated by the BIP44 tool of https://iancoleman.io/bip39/#english
      // and uncompressed pubkeys from https://www.bitaddress.org/ (Don't get confused
      // by keygen. Just click "Wallet Details" and enter privkey)

      const wallet = Slip10Wallet.fromMnemonicWithCurve(
        Slip10Curve.Secp256k1,
        "mushroom faint dumb venture million true skull grab pitch mesh share tortoise",
      );

      const identity = await wallet.previewIdentity(defaultChain, [
        Slip10RawIndex.hardened(44),
        Slip10RawIndex.hardened(0),
        Slip10RawIndex.hardened(7),
        Slip10RawIndex.normal(1),
        Slip10RawIndex.normal(0),
      ]);
      expect(identity).toEqual({
        chainId: defaultChain,
        pubkey: {
          algo: Algorithm.Secp256k1,
          data: fromHex(
            "0488557bc34cf8229fc40cffe464344e946bf5c46257e820ea1632f3acbeaa723b40a47bc4015a9b5a89c3ba22dd271ea672526d735cc619a709a65d2201bc079f",
          ) as PubkeyBytes,
        },
      });

      // preview identity not persisted
      expect(wallet.getIdentities()).toEqual([]);
    });

    it("works for Ed25519", async () => {
      // Test 1 from https://github.com/stellar/stellar-protocol/blob/master/ecosystem/sep-0005.md#test-cases
      //
      // Stellar public keys can be converted to raw ed25519 pubkeys as follows
      // $ yarn add stellar-sdk
      // $ node
      // > const { Keypair } = require("stellar-sdk")
      // > Keypair.fromPublicKey("GDRXE2BQUC3AZNPVFSCEZ76NJ3WWL25FYFK6RGZGIEKWE4SOOHSUJUJ6").rawPublicKey().toString("hex")
      const wallet = Slip10Wallet.fromMnemonicWithCurve(
        Slip10Curve.Ed25519,
        "illness spike retreat truth genius clock brain pass fit cave bargain toe",
      );

      const identity = await wallet.previewIdentity(defaultChain, [
        Slip10RawIndex.hardened(44),
        Slip10RawIndex.hardened(148),
        Slip10RawIndex.hardened(0),
      ]);
      expect(identity).toEqual({
        chainId: defaultChain,
        pubkey: {
          algo: Algorithm.Ed25519,
          data: fromHex("e3726830a0b60cb5f52c844cffcd4eed65eba5c155e89b26411562724e71e544") as PubkeyBytes,
        },
      });

      // preview identity not persisted
      expect(wallet.getIdentities()).toEqual([]);
    });
  });

  it("can create identities", async () => {
    const emptyWallets = [
      // all possible ways to construct a Slip10Wallet
      new Slip10Wallet(emptyWallet),
      Slip10Wallet.fromEntropyWithCurve(
        Slip10Curve.Ed25519,
        Encoding.fromHex("51385c41df88cbe7c579e99de04259b1aa264d8e2416f1885228a4d069629fad"),
      ),
      Slip10Wallet.fromMnemonicWithCurve(
        Slip10Curve.Ed25519,
        "execute wheel pupil bachelor crystal short domain faculty shrimp focus swap hazard",
      ),
    ];

    for (const wallet of emptyWallets) {
      const newIdentity1 = await wallet.createIdentity(defaultChain, [Slip10RawIndex.hardened(0)]);
      const newIdentity2 = await wallet.createIdentity(defaultChain, [Slip10RawIndex.hardened(1)]);
      const newIdentity3 = await wallet.createIdentity(defaultChain, [
        Slip10RawIndex.hardened(1),
        Slip10RawIndex.hardened(0),
      ]);

      // all pubkeys must be different
      const pubkeySet = new Set(
        [newIdentity1, newIdentity2, newIdentity3].map(i => Encoding.toHex(i.pubkey.data)),
      );
      expect(pubkeySet.size).toEqual(3);

      expect(newIdentity1.pubkey.data).not.toEqual(newIdentity2.pubkey.data);
      expect(newIdentity2.pubkey.data).not.toEqual(newIdentity3.pubkey.data);
      expect(newIdentity3.pubkey.data).not.toEqual(newIdentity1.pubkey.data);

      const identities = wallet.getIdentities();
      expect(identities.length).toEqual(3);
      expect(identities[0].pubkey.algo).toEqual(Algorithm.Ed25519);
      expect(identities[0].pubkey.data).toEqual(newIdentity1.pubkey.data);
      expect(identities[1].pubkey.algo).toEqual(Algorithm.Ed25519);
      expect(identities[1].pubkey.data).toEqual(newIdentity2.pubkey.data);
      expect(identities[2].pubkey.algo).toEqual(Algorithm.Ed25519);
      expect(identities[2].pubkey.data).toEqual(newIdentity3.pubkey.data);
    }
  });

  it("can create different identities with the same keypair", async () => {
    const wallet = new Slip10Wallet(emptyWallet);
    await wallet.createIdentity("chain1" as ChainId, [Slip10RawIndex.hardened(0)]);
    await wallet.createIdentity("chain2" as ChainId, [Slip10RawIndex.hardened(0)]);

    const identities = wallet.getIdentities();
    expect(identities.length).toEqual(2);
    expect(identities[0].chainId).toEqual("chain1");
    expect(identities[1].chainId).toEqual("chain2");
    expect(identities[0].pubkey).toEqual(identities[1].pubkey);
  });

  it("throws when adding the same identity twice", async () => {
    const defaultPath = [Slip10RawIndex.hardened(0)];

    const emptyWallets = [
      // ed25519
      Slip10Wallet.fromMnemonicWithCurve(
        Slip10Curve.Ed25519,
        "execute wheel pupil bachelor crystal short domain faculty shrimp focus swap hazard",
      ),
      // secp256k1
      Slip10Wallet.fromMnemonicWithCurve(
        Slip10Curve.Secp256k1,
        "execute wheel pupil bachelor crystal short domain faculty shrimp focus swap hazard",
      ),
    ];

    for (const wallet of emptyWallets) {
      await wallet.createIdentity(defaultChain, defaultPath);
      await wallet
        .createIdentity(defaultChain, defaultPath)
        .then(() => fail("must not resolve"))
        .catch(error => expect(error).toMatch(/ID collision/i));
    }
  });

  it("can create Secp256k1 identities", async () => {
    const emptyWallets = [
      // all possible ways to construct a Slip10Wallet for Secp256k1
      new Slip10Wallet(emptySecp256k1Wallet),
      Slip10Wallet.fromEntropyWithCurve(
        Slip10Curve.Secp256k1,
        Encoding.fromHex("51385c41df88cbe7c579e99de04259b1aa264d8e2416f1885228a4d069629fad"),
      ),
      Slip10Wallet.fromMnemonicWithCurve(
        Slip10Curve.Secp256k1,
        "execute wheel pupil bachelor crystal short domain faculty shrimp focus swap hazard",
      ),
    ];

    for (const wallet of emptyWallets) {
      const newIdentity1 = await wallet.createIdentity(defaultChain, [Slip10RawIndex.hardened(0)]);
      const newIdentity2 = await wallet.createIdentity(defaultChain, [Slip10RawIndex.hardened(1)]);
      const newIdentity3 = await wallet.createIdentity(defaultChain, [
        Slip10RawIndex.hardened(1),
        Slip10RawIndex.hardened(0),
      ]);

      // all pubkeys must be different
      const pubkeySet = new Set(
        [newIdentity1, newIdentity2, newIdentity3].map(i => Encoding.toHex(i.pubkey.data)),
      );
      expect(pubkeySet.size).toEqual(3);

      const identities = wallet.getIdentities();
      expect(identities.length).toEqual(3);
      expect(identities[0].pubkey.algo).toEqual(Algorithm.Secp256k1);
      expect(identities[0].pubkey.data).toEqual(newIdentity1.pubkey.data);
      expect(identities[1].pubkey.algo).toEqual(Algorithm.Secp256k1);
      expect(identities[1].pubkey.data).toEqual(newIdentity2.pubkey.data);
      expect(identities[2].pubkey.algo).toEqual(Algorithm.Secp256k1);
      expect(identities[2].pubkey.data).toEqual(newIdentity3.pubkey.data);
    }
  });

  it("generates secp256k1 keys compatible to other tools", async () => {
    // Test data generated by the BIP44 tool of https://iancoleman.io/bip39/#english
    // and uncompressed pubkeys from https://www.bitaddress.org/ (Don't get confused
    // by keygen. Just click "Wallet Details" and enter privkey)

    const wallet = Slip10Wallet.fromMnemonicWithCurve(
      Slip10Curve.Secp256k1,
      "mushroom faint dumb venture million true skull grab pitch mesh share tortoise",
    );

    // m/44'/0'/7'/1/0
    const address0 = await wallet.createIdentity(defaultChain, [
      Slip10RawIndex.hardened(44),
      Slip10RawIndex.hardened(0),
      Slip10RawIndex.hardened(7),
      Slip10RawIndex.normal(1),
      Slip10RawIndex.normal(0),
    ]);
    expect(address0.pubkey.data).toEqual(
      fromHex(
        "0488557bc34cf8229fc40cffe464344e946bf5c46257e820ea1632f3acbeaa723b40a47bc4015a9b5a89c3ba22dd271ea672526d735cc619a709a65d2201bc079f",
      ),
    );

    // m/44'/0'/7'/1/1
    const address1 = await wallet.createIdentity(defaultChain, [
      Slip10RawIndex.hardened(44),
      Slip10RawIndex.hardened(0),
      Slip10RawIndex.hardened(7),
      Slip10RawIndex.normal(1),
      Slip10RawIndex.normal(1),
    ]);
    expect(address1.pubkey.data).toEqual(
      fromHex(
        "04cf16066cbcb077cac488ad03995db1a6ad97c3f1088b59a9d5ae4ca449d7e4ad644629628666eca8bb7bcc919884171da4671cf0bb0343c31103198b861fb427",
      ),
    );

    // m/44'/0'/7'/1/2
    const address2 = await wallet.createIdentity(defaultChain, [
      Slip10RawIndex.hardened(44),
      Slip10RawIndex.hardened(0),
      Slip10RawIndex.hardened(7),
      Slip10RawIndex.normal(1),
      Slip10RawIndex.normal(2),
    ]);
    expect(address2.pubkey.data).toEqual(
      fromHex(
        "04f4a71480c4f6928ad10002ab17815ea4db2a56e545e5ef74d71d7b490171db93a26ffa46a3acfd0eb768d42ff622f3c0227121328b22b09e51186b0f4d3e1fba",
      ),
    );
  });

  it("generates ed25519 keys compatible to Stellar", async () => {
    // Test 1 from https://github.com/stellar/stellar-protocol/blob/master/ecosystem/sep-0005.md#test-cases
    //
    // Stellar public keys can be converted to raw ed25519 pubkeys as follows
    // $ yarn add stellar-sdk
    // $ node
    // > const { Keypair } = require("stellar-sdk")
    // > Keypair.fromPublicKey("GDRXE2BQUC3AZNPVFSCEZ76NJ3WWL25FYFK6RGZGIEKWE4SOOHSUJUJ6").rawPublicKey().toString("hex")
    const wallet = Slip10Wallet.fromMnemonicWithCurve(
      Slip10Curve.Ed25519,
      "illness spike retreat truth genius clock brain pass fit cave bargain toe",
    );

    // m/44'/148'/0'
    const address0 = await wallet.createIdentity(defaultChain, [
      Slip10RawIndex.hardened(44),
      Slip10RawIndex.hardened(148),
      Slip10RawIndex.hardened(0),
    ]);
    expect(address0.pubkey.data).toEqual(
      fromHex("e3726830a0b60cb5f52c844cffcd4eed65eba5c155e89b26411562724e71e544"),
    );

    // m/44'/148'/1'
    const address1 = await wallet.createIdentity(defaultChain, [
      Slip10RawIndex.hardened(44),
      Slip10RawIndex.hardened(148),
      Slip10RawIndex.hardened(1),
    ]);
    expect(address1.pubkey.data).toEqual(
      fromHex("416edcd6746d5293579a7039ac67bcf1a8698efecf81183bbb0ac877da86ada3"),
    );

    // m/44'/148'/2'
    const address2 = await wallet.createIdentity(defaultChain, [
      Slip10RawIndex.hardened(44),
      Slip10RawIndex.hardened(148),
      Slip10RawIndex.hardened(2),
    ]);
    expect(address2.pubkey.data).toEqual(
      fromHex("31d7c4074e8e8c07025e6f33a07e93ea45b9d83e96179f6b1f23465e96d8dd89"),
    );
  });

  it("can set, change and unset an identity label", async () => {
    const wallet = new Slip10Wallet(emptyWallet);
    const newIdentity = await wallet.createIdentity(defaultChain, [Slip10RawIndex.hardened(0)]);

    expect(wallet.getIdentityLabel(newIdentity)).toBeUndefined();

    wallet.setIdentityLabel(newIdentity, "foo");
    expect(wallet.getIdentityLabel(newIdentity)).toEqual("foo");

    wallet.setIdentityLabel(newIdentity, "bar");
    expect(wallet.getIdentityLabel(newIdentity)).toEqual("bar");

    wallet.setIdentityLabel(newIdentity, undefined);
    expect(wallet.getIdentityLabel(newIdentity)).toBeUndefined();
  });

  it("can sign", async () => {
    const wallet = new Slip10Wallet(emptyWallet);
    const newIdentity = await wallet.createIdentity(defaultChain, [Slip10RawIndex.hardened(0)]);

    expect(wallet.canSign.value).toEqual(true);

    const tx = new Uint8Array([0x11, 0x22, 0x33]) as SignableBytes;
    const signature = await wallet.createTransactionSignature(newIdentity, tx, PrehashType.None);
    expect(signature).toBeTruthy();
    expect(signature.length).toEqual(64);
  });

  it("can sign with different prehash types", async () => {
    const wallet = new Slip10Wallet(emptyWallet);
    const mainIdentity = await wallet.createIdentity(defaultChain, [Slip10RawIndex.hardened(0)]);

    const transactionBytes = new Uint8Array([0x11, 0x22, 0x33]) as SignableBytes;

    const signaturePrehashNone = await wallet.createTransactionSignature(
      mainIdentity,
      transactionBytes,
      PrehashType.None,
    );
    const signaturePrehashSha256 = await wallet.createTransactionSignature(
      mainIdentity,
      transactionBytes,
      PrehashType.Sha256,
    );
    const signaturePrehashSha512 = await wallet.createTransactionSignature(
      mainIdentity,
      transactionBytes,
      PrehashType.Sha512,
    );
    expect(signaturePrehashNone.length).toEqual(64);
    expect(signaturePrehashSha256.length).toEqual(64);
    expect(signaturePrehashSha512.length).toEqual(64);

    expect(signaturePrehashNone).not.toEqual(signaturePrehashSha256);
    expect(signaturePrehashSha256).not.toEqual(signaturePrehashSha512);
    expect(signaturePrehashSha512).not.toEqual(signaturePrehashNone);
  });

  it("produces correct data for prehash signatures", async () => {
    const wallet = new Slip10Wallet(emptyWallet);
    const mainIdentity = await wallet.createIdentity(defaultChain, [Slip10RawIndex.hardened(0)]);

    const bytes = new Uint8Array([0x11, 0x22, 0x33]) as SignableBytes;
    const bytesSha256 = new Sha256(bytes).digest();
    const bytesSha512 = new Sha512(bytes).digest();

    const expectedSha256 = await wallet.createTransactionSignature(
      mainIdentity,
      bytesSha256 as SignableBytes,
      PrehashType.None,
    );
    const expectedSha512 = await wallet.createTransactionSignature(
      mainIdentity,
      bytesSha512 as SignableBytes,
      PrehashType.None,
    );

    expect(await wallet.createTransactionSignature(mainIdentity, bytes, PrehashType.Sha256)).toEqual(
      expectedSha256,
    );
    expect(await wallet.createTransactionSignature(mainIdentity, bytes, PrehashType.Sha512)).toEqual(
      expectedSha512,
    );
  });

  it("can export the secret in a printable format", () => {
    {
      const wallet = Slip10Wallet.fromMnemonicWithCurve(
        Slip10Curve.Ed25519,
        "hockey brief travel soldier saddle nose negative admit where fetch anxiety guess",
        Slip10Wallet,
      );
      expect(wallet.printableSecret()).toEqual(
        "hockey brief travel soldier saddle nose negative admit where fetch anxiety guess",
      );
    }
    {
      const wallet = Slip10Wallet.fromEntropyWithCurve(
        Slip10Curve.Ed25519,
        fromHex("7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f"),
        Slip10Wallet,
      );
      expect(wallet.printableSecret()).toEqual(
        "legal winner thank year wave sausage worth useful legal winner thank yellow",
      );
    }
  });

  it("can serialize multiple identities", async () => {
    const wallet = new Slip10Wallet(emptyWallet);
    wallet.setLabel("wallet with 3 identities");
    const originalId = wallet.id;
    expect(originalId).toBeTruthy();
    const identity1 = await wallet.createIdentity(defaultChain, [Slip10RawIndex.hardened(0)]);
    const identity2 = await wallet.createIdentity(defaultChain, [Slip10RawIndex.hardened(1)]);
    const identity3 = await wallet.createIdentity(defaultChain, [
      Slip10RawIndex.hardened(2),
      Slip10RawIndex.hardened(0),
    ]);
    wallet.setIdentityLabel(identity1, undefined);
    wallet.setIdentityLabel(identity2, "");
    wallet.setIdentityLabel(identity3, "foo");
    expect(wallet.id).toEqual(originalId);

    const serialized = wallet.serialize();
    expect(serialized).toBeTruthy();
    expect(serialized.length).toBeGreaterThan(100);

    const decodedJson = JSON.parse(serialized);
    expect(decodedJson).toBeTruthy();
    expect(decodedJson.label).toEqual("wallet with 3 identities");
    expect(decodedJson.secret).toMatch(/^[a-z]+( [a-z]+)*$/);
    expect(decodedJson.identities.length).toEqual(3);
    expect(decodedJson.identities[0].localIdentity).toBeTruthy();
    expect(decodedJson.identities[0].localIdentity.pubkey.algo).toEqual("ed25519");
    expect(decodedJson.identities[0].localIdentity.pubkey.data).toMatch(/^[0-9a-f]{64}$/);
    expect(decodedJson.identities[0].localIdentity.label).toBeUndefined();
    expect(decodedJson.identities[0].privkeyPath).toEqual([0x80000000 + 0]);
    expect(decodedJson.identities[1].localIdentity).toBeTruthy();
    expect(decodedJson.identities[1].localIdentity.pubkey.algo).toEqual("ed25519");
    expect(decodedJson.identities[1].localIdentity.pubkey.data).toMatch(/^[0-9a-f]{64}$/);
    expect(decodedJson.identities[1].localIdentity.label).toEqual("");
    expect(decodedJson.identities[1].privkeyPath).toEqual([0x80000000 + 1]);
    expect(decodedJson.identities[2].localIdentity).toBeTruthy();
    expect(decodedJson.identities[2].localIdentity.pubkey.algo).toEqual("ed25519");
    expect(decodedJson.identities[2].localIdentity.pubkey.data).toMatch(/^[0-9a-f]{64}$/);
    expect(decodedJson.identities[2].localIdentity.label).toEqual("foo");
    expect(decodedJson.identities[2].privkeyPath).toEqual([0x80000000 + 2, 0x80000000 + 0]);

    // keys are different
    expect(decodedJson.identities[0].localIdentity.pubkey.data).not.toEqual(
      decodedJson.identities[1].localIdentity.pubkey.data,
    );
    expect(decodedJson.identities[1].localIdentity.pubkey.data).not.toEqual(
      decodedJson.identities[2].localIdentity.pubkey.data,
    );
    expect(decodedJson.identities[2].localIdentity.pubkey.data).not.toEqual(
      decodedJson.identities[0].localIdentity.pubkey.data,
    );
    expect(decodedJson.identities[0].privkeyPath).not.toEqual(decodedJson.identities[1].privkeyPath);
    expect(decodedJson.identities[1].privkeyPath).not.toEqual(decodedJson.identities[2].privkeyPath);
    expect(decodedJson.identities[2].privkeyPath).not.toEqual(decodedJson.identities[0].privkeyPath);
  });

  it("can deserialize", () => {
    {
      // empty
      const wallet = new Slip10Wallet(`
        {
          "formatVersion": 2,
          "id": "eMpTy",
          "secret": "rhythm they leave position crowd cart pilot student razor indoor gesture thrive",
          "curve": "ed25519 seed",
          "identities": []
        }
        ` as WalletSerializationString);
      expect(wallet).toBeTruthy();
      expect(wallet.getIdentities().length).toEqual(0);
      expect(wallet.id).toEqual("eMpTy");
    }

    {
      // one element
      const serialized = `
        {
          "formatVersion": 2,
          "id": "1elemenT",
          "secret": "rhythm they leave position crowd cart pilot student razor indoor gesture thrive",
          "curve": "ed25519 seed",
          "identities": [
            {
              "localIdentity": {
                "chainId": "xnet",
                "pubkey": {
                  "algo": "ed25519",
                  "data": "aabbccdd"
                },
                "label": "foo"
              },
              "privkeyPath": [2147483649]
            }
          ]
        }
        ` as WalletSerializationString;
      const wallet = new Slip10Wallet(serialized);
      expect(wallet).toBeTruthy();
      expect(wallet.id).toEqual("1elemenT");
      expect(wallet.getIdentities().length).toEqual(1);
      const firstIdentity = wallet.getIdentities()[0];
      expect(firstIdentity.chainId).toEqual("xnet");
      expect(firstIdentity.pubkey.algo).toEqual("ed25519");
      expect(firstIdentity.pubkey.data).toEqual(Encoding.fromHex("aabbccdd"));
      expect(wallet.getIdentityLabel(firstIdentity)).toEqual("foo");
    }

    {
      // two elements
      const serialized = `
        {
          "formatVersion": 2,
          "id": "2elemeNT",
          "secret": "rhythm they leave position crowd cart pilot student razor indoor gesture thrive",
          "curve": "ed25519 seed",
          "identities": [
            {
              "localIdentity": {
                "chainId": "xnet",
                "pubkey": {
                  "algo": "ed25519",
                  "data": "aabbccdd"
                },
                "label": "foo"
              },
              "privkeyPath": [2147483649]
            },
            {
              "localIdentity": {
                "chainId": "ynet",
                "pubkey": {
                  "algo": "ed25519",
                  "data": "ddccbbaa"
                },
                "label": "bar"
              },
              "privkeyPath": [2147483650]
            }
          ]
        }` as WalletSerializationString;
      const wallet = new Slip10Wallet(serialized);
      expect(wallet).toBeTruthy();
      expect(wallet.id).toEqual("2elemeNT");
      expect(wallet.getIdentities().length).toEqual(2);
      const firstIdentity = wallet.getIdentities()[0];
      const secondIdentity = wallet.getIdentities()[1];
      expect(firstIdentity.chainId).toEqual("xnet");
      expect(firstIdentity.pubkey.algo).toEqual("ed25519");
      expect(firstIdentity.pubkey.data).toEqual(Encoding.fromHex("aabbccdd"));
      expect(wallet.getIdentityLabel(firstIdentity)).toEqual("foo");
      expect(secondIdentity.chainId).toEqual("ynet");
      expect(secondIdentity.pubkey.algo).toEqual("ed25519");
      expect(secondIdentity.pubkey.data).toEqual(Encoding.fromHex("ddccbbaa"));
      expect(wallet.getIdentityLabel(secondIdentity)).toEqual("bar");
    }
  });

  it("throws for unsupported format version", () => {
    const data = `
      {
        "formatVersion": 123,
        "id": "eMpTy",
        "secret": "rhythm they leave position crowd cart pilot student razor indoor gesture thrive",
        "curve": "ed25519 seed",
        "identities": []
      }
      ` as WalletSerializationString;
    expect(() => new Slip10Wallet(data)).toThrowError(/unsupported format version/i);
  });

  it("can serialize and restore a full wallet", async () => {
    const original = new Slip10Wallet(emptyWallet);
    const identity1 = await original.createIdentity(defaultChain, [Slip10RawIndex.hardened(0)]);
    const identity2 = await original.createIdentity(defaultChain, [Slip10RawIndex.hardened(1)]);
    const identity3 = await original.createIdentity(defaultChain, [Slip10RawIndex.hardened(2)]);
    original.setIdentityLabel(identity1, undefined);
    original.setIdentityLabel(identity2, "");
    original.setIdentityLabel(identity3, "foo");

    const restored = new Slip10Wallet(original.serialize());
    expect(restored.id).toEqual(original.id);
    expect(restored.label.value).toEqual(original.label.value);

    // pubkeys and labels match
    expect(original.getIdentities()).toEqual(restored.getIdentities());

    // privkeys match
    const tx = new Uint8Array([]) as SignableBytes;
    expect(await original.createTransactionSignature(identity1, tx, PrehashType.None)).toEqual(
      await restored.createTransactionSignature(identity1, tx, PrehashType.None),
    );
    expect(await original.createTransactionSignature(identity2, tx, PrehashType.None)).toEqual(
      await restored.createTransactionSignature(identity2, tx, PrehashType.None),
    );
    expect(await original.createTransactionSignature(identity3, tx, PrehashType.None)).toEqual(
      await restored.createTransactionSignature(identity3, tx, PrehashType.None),
    );
  });

  it("can be cloned", () => {
    const original = new Slip10Wallet(emptyWallet);
    const clone = original.clone();
    expect(clone).not.toBe(original);
    expect(clone.serialize()).toEqual(original.serialize());

    // should have same characteristics
    expect(clone.id).toEqual(original.id);
    expect(clone.label.value).toEqual(original.label.value);
    expect(clone.getIdentities().length).toEqual(original.getIdentities().length);
  });

  it("generates different IDs for the same mnemonic", () => {
    const wallet1 = Slip10Wallet.fromMnemonicWithCurve(
      Slip10Curve.Ed25519,
      "accident situate kitten crunch frog lobster horror hen wife gold extra athlete",
    );
    const wallet2 = Slip10Wallet.fromMnemonicWithCurve(
      Slip10Curve.Ed25519,
      "accident situate kitten crunch frog lobster horror hen wife gold extra athlete",
    );
    expect(wallet1.id).not.toEqual(wallet2.id);
  });
});
