// This module exposes translators for multiple tendermint versions
// Pick a version that matches the server to properly encode the data types

import { JsonRpcRequest, JsonRpcSuccessResponse } from "@iov/jsonrpc";

import * as requests from "./requests";
import * as responses from "./responses";
import { SubscriptionEvent } from "./rpcclients";
import { TxBytes, TxHash } from "./types";
import { v0_29 } from "./v0-29";
import { v0_31 } from "./v0-31";

export interface Adaptor {
  readonly params: Params;
  readonly responses: Responses;
  readonly hashTx: (tx: TxBytes) => TxHash;
}

// Encoder is a generic that matches all methods of Params
export type Encoder<T extends requests.Request> = (req: T) => JsonRpcRequest;

// Decoder is a generic that matches all methods of Responses
export type Decoder<T extends responses.Response> = (res: JsonRpcSuccessResponse) => T;

export interface Params {
  readonly encodeAbciInfo: (req: requests.AbciInfoRequest) => JsonRpcRequest;
  readonly encodeAbciQuery: (req: requests.AbciQueryRequest) => JsonRpcRequest;
  readonly encodeBlock: (req: requests.BlockRequest) => JsonRpcRequest;
  readonly encodeBlockchain: (req: requests.BlockchainRequest) => JsonRpcRequest;
  readonly encodeBlockResults: (req: requests.BlockResultsRequest) => JsonRpcRequest;
  readonly encodeBroadcastTx: (req: requests.BroadcastTxRequest) => JsonRpcRequest;
  readonly encodeCommit: (req: requests.CommitRequest) => JsonRpcRequest;
  readonly encodeGenesis: (req: requests.GenesisRequest) => JsonRpcRequest;
  readonly encodeHealth: (req: requests.HealthRequest) => JsonRpcRequest;
  readonly encodeStatus: (req: requests.StatusRequest) => JsonRpcRequest;
  readonly encodeSubscribe: (req: requests.SubscribeRequest) => JsonRpcRequest;
  readonly encodeTx: (req: requests.TxRequest) => JsonRpcRequest;
  readonly encodeTxSearch: (req: requests.TxSearchRequest) => JsonRpcRequest;
  readonly encodeValidators: (req: requests.ValidatorsRequest) => JsonRpcRequest;
}

export interface Responses {
  readonly decodeAbciInfo: (response: JsonRpcSuccessResponse) => responses.AbciInfoResponse;
  readonly decodeAbciQuery: (response: JsonRpcSuccessResponse) => responses.AbciQueryResponse;
  readonly decodeBlock: (response: JsonRpcSuccessResponse) => responses.BlockResponse;
  readonly decodeBlockResults: (response: JsonRpcSuccessResponse) => responses.BlockResultsResponse;
  readonly decodeBlockchain: (response: JsonRpcSuccessResponse) => responses.BlockchainResponse;
  readonly decodeBroadcastTxSync: (response: JsonRpcSuccessResponse) => responses.BroadcastTxSyncResponse;
  readonly decodeBroadcastTxAsync: (response: JsonRpcSuccessResponse) => responses.BroadcastTxAsyncResponse;
  readonly decodeBroadcastTxCommit: (response: JsonRpcSuccessResponse) => responses.BroadcastTxCommitResponse;
  readonly decodeCommit: (response: JsonRpcSuccessResponse) => responses.CommitResponse;
  readonly decodeGenesis: (response: JsonRpcSuccessResponse) => responses.GenesisResponse;
  readonly decodeHealth: (response: JsonRpcSuccessResponse) => responses.HealthResponse;
  readonly decodeStatus: (response: JsonRpcSuccessResponse) => responses.StatusResponse;
  readonly decodeTx: (response: JsonRpcSuccessResponse) => responses.TxResponse;
  readonly decodeTxSearch: (response: JsonRpcSuccessResponse) => responses.TxSearchResponse;
  readonly decodeValidators: (response: JsonRpcSuccessResponse) => responses.ValidatorsResponse;

  // events
  readonly decodeNewBlockEvent: (response: SubscriptionEvent) => responses.NewBlockEvent;
  readonly decodeNewBlockHeaderEvent: (response: SubscriptionEvent) => responses.NewBlockHeaderEvent;
  readonly decodeTxEvent: (response: SubscriptionEvent) => responses.TxEvent;
}

/**
 * Returns an Adaptor implementation for a given tendermint version.
 * Throws when version is not supported.
 *
 * @param version full Tendermint version string, e.g. "0.20.1"
 */
export function adatorForVersion(version: string): Adaptor {
  if (version.startsWith("0.29.") || version.startsWith("0.30.")) {
    return v0_29;
  } else if (version.startsWith("0.31.")) {
    return v0_31;
  } else {
    throw new Error(`Unsupported tendermint version: ${version}`);
  }
}
