"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { AlertTriangle } from "lucide-react";

import { getPublicRuntimeEnv } from "@/lib/config/public-env";

const publicEnv = getPublicRuntimeEnv();

export function WalletConnectButton() {
  if (!publicEnv.walletConnectProjectId) {
    return (
      <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-xs font-medium text-amber-300">
        <AlertTriangle size={14} />
        Set NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID untuk enable RainbowKit
      </div>
    );
  }

  return (
    <ConnectButton
      accountStatus={{
        smallScreen: "avatar",
        largeScreen: "full",
      }}
      chainStatus={{
        smallScreen: "icon",
        largeScreen: "full",
      }}
      showBalance={false}
    />
  );
}

