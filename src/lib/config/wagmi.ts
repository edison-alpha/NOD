import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { arbitrumSepolia } from "viem/chains";
import { createConfig, http } from "wagmi";

import { getPublicRuntimeEnv } from "@/lib/config/public-env";

const publicEnv = getPublicRuntimeEnv();

export const wagmiConfig = publicEnv.walletConnectProjectId
  ? getDefaultConfig({
      appName: "ArbiPilot",
      projectId: publicEnv.walletConnectProjectId,
      chains: [arbitrumSepolia],
      transports: {
        [arbitrumSepolia.id]: http(),
      },
      ssr: true,
    })
  : createConfig({
      chains: [arbitrumSepolia],
      transports: {
        [arbitrumSepolia.id]: http(),
      },
      ssr: true,
    });
