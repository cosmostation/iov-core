export interface TendermintInstance {
  readonly url: string;
  readonly version: string;
  readonly appCreator: string;
}

/**
 * Tendermint instances to be tested.
 *
 * Testing different versions: as a convention, the minor version number is encoded
 * in the port 111<version>, e.g. Tendermint 0.21.0 runs on port 11121. To start
 * a specific version use:
 *   TENDERMINT_VERSION=0.29.2 TENDERMINT_PORT=11129 ./scripts/tendermint/start.sh
 *
 * When more than 1 instances of tendermint are running, stop them manually:
 *   docker container ls | grep tendermint/tendermint
 *   docker container kill <container id from 1st column>
 */
export const tendermintInstances: readonly TendermintInstance[] = [
  {
    url: "localhost:11129",
    version: "0.29.x",
    appCreator: "Cosmoshi Netowoko",
  },
  {
    url: "localhost:11130",
    version: "0.30.x",
    appCreator: "Cosmoshi Netowoko",
  },
  {
    url: "localhost:11131",
    version: "0.31.x",
    appCreator: "Cosmoshi Netowoko",
  },
];

export const defaultInstance: TendermintInstance = tendermintInstances[0];
