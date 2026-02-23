/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

const region = process.env.POSTHOG_REGION ?? "eu";

/** @type {import("next").NextConfig} */
const config = {
  output: "standalone",
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: `https://${region}-assets.i.posthog.com/static/:path*`,
      },
      {
        source: "/ingest/decide",
        destination: `https://${region}.i.posthog.com/decide`,
      },
      {
        source: "/ingest/:path*",
        destination: `https://${region}.i.posthog.com/:path*`,
      },
    ];
  },
};

export default config;
