import { z } from "zod";

const publicRuntimeEnvSchema = z.object({
  NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID: z.string().min(
    1,
    "NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID is required",
  ),
  NEXT_PUBLIC_APP_URL: z.string().url("NEXT_PUBLIC_APP_URL must be a valid URL"),
});

export interface PublicRuntimeEnv {
  walletConnectProjectId: string | null;
  appUrl: string | null;
  isValid: boolean;
  errors: string[];
}

let cached: PublicRuntimeEnv | null = null;

export function getPublicRuntimeEnv(): PublicRuntimeEnv {
  if (cached) {
    return cached;
  }

  const raw = {
    NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID:
      process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  };

  const parsed = publicRuntimeEnvSchema.safeParse(raw);

  if (parsed.success) {
    cached = {
      walletConnectProjectId: parsed.data.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
      appUrl: parsed.data.NEXT_PUBLIC_APP_URL,
      isValid: true,
      errors: [],
    };

    return cached;
  }

  cached = {
    walletConnectProjectId: raw.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ?? null,
    appUrl: raw.NEXT_PUBLIC_APP_URL ?? null,
    isValid: false,
    errors: parsed.error.issues.map(
      (issue) => `${issue.path.join(".")}: ${issue.message}`,
    ),
  };

  return cached;
}
