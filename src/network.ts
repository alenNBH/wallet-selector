import { NetworkId } from "./interfaces/Options";

export interface NetworkConfiguration {
  networkId: string;
  nodeUrl: string;
  helperUrl: string;
  explorerUrl: string;
  restApiUrl: string;
}

export const getNetwork = (networkId: NetworkId): NetworkConfiguration => {
  switch (networkId) {
    case "mainnet":
      return {
        networkId,
        nodeUrl: "https://rpc.mainnet.near.org",
        helperUrl: "https://helper.mainnet.near.org",
        explorerUrl: "https://explorer.near.org",
        restApiUrl: "https://rest.nearapi.org",
      };
    case "testnet":
      return {
        networkId,
        nodeUrl: "https://rpc.testnet.near.org",
        helperUrl: "https://helper.testnet.near.org",
        explorerUrl: "https://explorer.testnet.near.org",
        restApiUrl: "https://rest.nearapi.org",
      };
    case "betanet":
      return {
        networkId,
        nodeUrl: "https://rpc.betanet.near.org",
        helperUrl: "https://helper.betanet.near.org",
        explorerUrl: "https://explorer.betanet.near.org",
        restApiUrl: "https://rest.nearapi.org",
      };
    default:
      throw Error(`Failed to find network configuration for '${networkId}'`);
  }
};

export const resolveNetwork = (
  networkId: NetworkId,
  network?: NetworkConfiguration
): NetworkConfiguration => {
  if (networkId === "customnet") {
    if (!network) {
      throw new Error("You must define network configuration for 'customnet'");
    }

    return network;
  }

  return getNetwork(networkId);
};
