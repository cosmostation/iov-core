import {
  Address,
  Mnemonic,
  PrivateKeyBuffer,
  PrivateKeyString,
  PublicKeyBuffer,
  PublicKeyString,
  SeedBuffer,
  SeedString,
} from '../types/keys'

export const privateKeyString: PrivateKeyString =
  "e9873d79c6d87dc0fb6a5778633389f4453213303da61f20bd67fc233aa33262";
export const privateKeyBuffer: PrivateKeyBuffer = Buffer.from(
  privateKeyString,
  "hex"
);

export const publicKeyString: PublicKeyString =
  "0350863ad64a87ae8a2fe83c1af1a8403cb53f53e486d8511dad8a04887e5b2352";
export const publicKeyBuffer: PublicKeyBuffer = Buffer.from(
  publicKeyString,
  "hex"
);

export const address: Address = "1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2";

export const mnemonic: Mnemonic =
  "lake famous pass outer smoke horse suspect obey subject step spirit bless evoke amazing seat";

export const seedString: SeedString = "000102030405060708090a0b0c0d0e0f";
export const seedBuffer: SeedBuffer = Buffer.from(seedString);
