import { ReadonlyDate } from "readonly-date";
import { As } from "type-tagger";

import { Hash, Preimage } from "./atomicswaptypes";

export enum Algorithm {
  Ed25519 = "ed25519",
  Secp256k1 = "secp256k1",
}

export type PubkeyBytes = Uint8Array & As<"pubkey-bytes">;

export interface PubkeyBundle {
  readonly algo: Algorithm;
  readonly data: PubkeyBytes;
}

export function isPubkeyBundle(data: any): data is PubkeyBundle {
  return (
    typeof data === "object" &&
    data !== null &&
    ((data as PubkeyBundle).algo === Algorithm.Ed25519 ||
      (data as PubkeyBundle).algo === Algorithm.Secp256k1) &&
    (data as PubkeyBundle).data instanceof Uint8Array
  );
}

/**
 * Compares two objects that conform to the PubkeyBundle interface for equality.
 *
 * This can also be used to compare pairs of derived types in which case all
 * non-PubkeyBundle fields are ignored.
 *
 * @param left the left hand side of the comparison
 * @param right the right hand side of the comparison
 */
export function pubkeyBundleEquals(left: PubkeyBundle, right: PubkeyBundle): boolean {
  return (
    left.algo === right.algo &&
    left.data.length === right.data.length &&
    left.data.every((value, index) => value === right.data[index])
  );
}

/** Used to differentiate a blockchain. Should be alphanumeric or -_/ and unique */
export type ChainId = string & As<"chain-id">;

/** a public key we can identify with on a blockchain */
export interface Identity {
  readonly chainId: ChainId;
  readonly pubkey: PubkeyBundle;
}

export function isIdentity(data: any): data is Identity {
  return (
    typeof data === "object" &&
    data !== null &&
    typeof (data as Identity).chainId === "string" &&
    isPubkeyBundle((data as Identity).pubkey)
  );
}

/**
 * Compares two objects that conform to the Identity interface for equality.
 * All additional (non-Identity) fields are ignored.
 *
 * @param left the left hand side of the comparison
 * @param right the right hand side of the comparison
 */
export function identityEquals(left: Identity, right: Identity): boolean {
  return left.chainId === right.chainId && pubkeyBundleEquals(left.pubkey, right.pubkey);
}

export type SignatureBytes = Uint8Array & As<"signature">;

/** An integer in the safe integer range */
export type Nonce = number & As<"nonce">;

// TokenTicker should be 3-4 letters, uppercase
export type TokenTicker = string & As<"token-ticker">;

export type SwapIdBytes = Uint8Array & As<"swap-id">;
export interface SwapId {
  readonly prefix?: string;
  readonly data: SwapIdBytes;
}
export function swapIdEquals(left: SwapId, right: SwapId): boolean {
  return (
    left.prefix === right.prefix &&
    left.data.length === right.data.length &&
    left.data.every((value, index) => value === right.data[index])
  );
}

/**
 * A printable transaction ID in a blockchain-specific format.
 *
 * In Lisk, this is a uint64 number like 3444561236416494115 and in BNS this is an upper
 * hex encoded 20 byte hash like 3A0DB99E82E11DBB9F987EFCD04264305C2CA6F2. Ethereum uses
 * 0x-prefixed hashes like 0xce8145665aa6ce4c7d01aabffbb610efd03de4d84785840d43b000e1b7e785c3
 */
export type TransactionId = string & As<"transaction-id">;

export type SignableBytes = Uint8Array & As<"signable">;

// Specifies which hash function to apply before signing.
// The identity function is indicated using None.
export enum PrehashType {
  None,
  Sha512,
  Sha256,
  Keccak256,
}

export interface SigningJob {
  readonly bytes: SignableBytes;
  readonly prehashType: PrehashType;
}

// NB: use Buffer or String, we should be consistent....
// I figure string if this will be json dumped, but maybe less efficient
export interface FullSignature {
  readonly nonce: Nonce;
  readonly pubkey: PubkeyBundle;
  readonly signature: SignatureBytes;
}

/** A codec specific address encoded as a string */
export type Address = string & As<"address">;

export interface Amount {
  /**
   * The quantity expressed as atomic units.
   *
   * Convert to whole and fractional part using
   *   const whole = amount.quantity.slice(0, -amount.fractionalDigits);
   *   const fractional = amount.quantity.slice(-amount.fractionalDigits);
   * or to a floating point approximation (not safe!)
   *   const approx = whole + fractional / 10**amount.fractionalDigits
   */
  readonly quantity: string;
  /**
   * The number of fractional digits the token supports.
   *
   * A quantity is expressed as atomic units. 10^fractionalDigits of those
   * atomic units make up 1 token.
   *
   * E.g. in Ethereum 10^18 wei are 1 ETH and from the quantity 123000000000000000000
   * the last 18 digits are the fractional part and the rest the wole part.
   */
  readonly fractionalDigits: number;
  readonly tokenTicker: TokenTicker;
}

export function isAmount(data: any): data is Amount {
  return (
    typeof data === "object" &&
    data !== null &&
    typeof (data as Amount).quantity === "string" &&
    typeof (data as Amount).fractionalDigits === "number" &&
    typeof (data as Amount).tokenTicker === "string"
  );
}

/** A general interface for blockchain fees */
export interface Fee {
  readonly tokens?: Amount;
  readonly gasPrice?: Amount;
  readonly gasLimit?: string;
}

export function isFee(data: any): data is Fee {
  return (
    typeof data === "object" &&
    data !== null &&
    (isAmount(data.tokens) || (isAmount(data.gasPrice) && typeof data.gasLimit === "string"))
  );
}

/** The basic transaction type all transactions should extend */
export interface LightTransaction {
  /**
   * Kind describes the kind of transaction as a "<domain>/<concrete_type>" tuple.
   *
   * The domain acts as a namespace for the concreate type. Right now we use "bns",
   * "ethereum", "lisk" and "rise" for chain-specific transactions. We also use the
   * special domain "bcp" for any kind that can be supported in multiple chains.
   *
   * This should be used for type detection only and not be encoded somewhere. It
   * might be migrated to a Java-style package names like "io.lisk.mainnet" or
   * other way of namespacing later on, so don't use the `kind` property as a value.
   */
  readonly kind: string;
  readonly fee?: Fee;
}

export function isLightTransaction(data: any): data is LightTransaction {
  const isObject = typeof data === "object" && data !== null;
  if (!isObject) {
    return false;
  }
  const transaction = data as LightTransaction;
  return typeof transaction.kind === "string" && (transaction.fee === undefined || isFee(transaction.fee));
}

export interface WithCreator {
  /**
   * The creator of the transaction.
   *
   * This implicitly fixes the chain ID this transaction can be used on.
   */
  readonly creator: Identity;
}

export type UnsignedTransaction = LightTransaction & WithCreator;

export function isUnsignedTransaction(data: any): data is UnsignedTransaction {
  const transaction = data as UnsignedTransaction;
  return isLightTransaction(transaction) && isIdentity(transaction.creator);
}

/** A signable transaction knows how to serialize itself and how to store signatures */
export interface SignedTransaction<T extends LightTransaction = UnsignedTransaction> {
  /** transaction is the user request */
  readonly transaction: T;

  readonly primarySignature: FullSignature;

  /** signatures can be appended as this is signed */
  readonly otherSignatures: readonly FullSignature[];
}

export interface SendTransaction extends LightTransaction {
  readonly kind: "bcp/send";
  readonly amount: Amount;
  readonly sender: Address;
  readonly recipient: Address;
  readonly memo?: string;
}

export type SwapTimeout = BlockHeightTimeout | TimestampTimeout;

export interface BlockHeightTimeout {
  /** Absolute block height */
  readonly height: number;
}

export function isBlockHeightTimeout(timeout: SwapTimeout): timeout is BlockHeightTimeout {
  return typeof (timeout as BlockHeightTimeout).height === "number";
}

export interface TimestampTimeout {
  /** Unix timestamp in seconds */
  readonly timestamp: number;
}

export function isTimestampTimeout(timeout: SwapTimeout): timeout is TimestampTimeout {
  return typeof (timeout as TimestampTimeout).timestamp === "number";
}

export function createTimestampTimeout(secondsFromNow: number): TimestampTimeout {
  return { timestamp: Math.floor(ReadonlyDate.now() / 1000) + secondsFromNow };
}

/** A swap offer or a counter offer */
export interface SwapOfferTransaction extends LightTransaction {
  readonly kind: "bcp/swap_offer";
  /**
   * The ID of the swap to aid coordination between the two parties.
   *
   * If required, the data should be generated randomly by the client to avoid
   * collisions.
   *
   * The type of this may be extended with additional properties depending on
   * the requirements of the individual chain.
   */
  readonly swapId?: SwapId;
  readonly amounts: readonly Amount[];
  readonly recipient: Address;
  /**
   * The first point in time at which the offer is expired.
   *
   * Can be represented as a block height or UNIX timestamp.
   */
  readonly timeout: SwapTimeout;
  /**
   * Locally calculated hash of the preimage.
   *
   * This is a SHA256 hash until we have a way to specifiy the hashing algorithm.
   */
  readonly hash: Hash;
  readonly memo?: string;
}

export interface SwapClaimTransaction extends LightTransaction {
  readonly kind: "bcp/swap_claim";
  readonly preimage: Preimage;
  readonly swapId: SwapId; // pulled from the offer transaction
}

export interface SwapAbortTransaction extends LightTransaction {
  readonly kind: "bcp/swap_abort";
  readonly swapId: SwapId; // pulled from the offer transaction
}

export type SwapTransaction = SwapOfferTransaction | SwapClaimTransaction | SwapAbortTransaction;

export function isSendTransaction(transaction: LightTransaction): transaction is SendTransaction {
  return (transaction as SendTransaction).kind === "bcp/send";
}

export function isSwapOfferTransaction(transaction: LightTransaction): transaction is SwapOfferTransaction {
  return (transaction as SwapOfferTransaction).kind === "bcp/swap_offer";
}

export function isSwapClaimTransaction(transaction: LightTransaction): transaction is SwapClaimTransaction {
  return (transaction as SwapClaimTransaction).kind === "bcp/swap_claim";
}

export function isSwapAbortTransaction(transaction: LightTransaction): transaction is SwapAbortTransaction {
  return (transaction as SwapAbortTransaction).kind === "bcp/swap_abort";
}

export function isSwapTransaction(transaction: LightTransaction): transaction is SwapTransaction {
  return (
    isSwapOfferTransaction(transaction) ||
    isSwapClaimTransaction(transaction) ||
    isSwapAbortTransaction(transaction)
  );
}
