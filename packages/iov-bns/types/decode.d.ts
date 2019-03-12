import { Amount, BcpTicker, ChainId, Nonce, SignedTransaction, UnsignedTransaction } from "@iov/bcp";
import * as codecImpl from "./generated/codecimpl";
import { BnsUsernameNft, Keyed } from "./types";
export declare function decodeUsernameNft(nft: codecImpl.username.IUsernameToken, registryChainId: ChainId): BnsUsernameNft;
export declare function decodeNonce(acct: codecImpl.sigs.IUserData & Keyed): Nonce;
export declare function decodeToken(data: codecImpl.currency.ITokenInfo & Keyed): BcpTicker;
export declare function decodeAmount(coin: codecImpl.coin.ICoin): Amount;
export declare function parseTx(tx: codecImpl.app.ITx, chainId: ChainId): SignedTransaction;
export declare function parseMsg(base: UnsignedTransaction, tx: codecImpl.app.ITx): UnsignedTransaction;
