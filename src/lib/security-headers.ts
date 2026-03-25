/**
 * HTTP security headers for Next.js `headers()` config.
 * - CSP: tuned for Next.js App Router, Google Fonts, Cloudinary, local assets.
 * - HSTS: production only (avoid caching HTTPS-only on localhost).
 *
 * Optional env:
 * - CSP_REPORT_ONLY=true — send Content-Security-Policy-Report-Only instead of enforcing CSP
 * - SECURITY_HEADERS_STRICT_HSTS_PRELOAD=true — append ; preload to HSTS (requires https://hstspreload.org registration)
 */
export type SecurityHeader = { key: string; value: string };

const CLOUDINARY = "https://res.cloudinary.com";
const GOOGLE_FONTS = "https://fonts.googleapis.com";
const GOOGLE_STATIC = "https://fonts.gstatic.com";
const UNSPLASH = "https://images.unsplash.com";

function buildContentSecurityPolicy(): string {
  const isProd = process.env.NODE_ENV === "production";
  const directives = [
    "default-src 'self'",
    // Next.js + React need inline for hydration; tighten with nonces when you adopt next/script strategy
    `script-src 'self' 'unsafe-inline'${!isProd ? " 'unsafe-eval'" : ""}`,
    `style-src 'self' 'unsafe-inline' ${GOOGLE_FONTS}`,
    `img-src 'self' data: blob: ${CLOUDINARY} ${UNSPLASH}`,
    `font-src 'self' data: ${GOOGLE_STATIC}`,
    `connect-src 'self' ${CLOUDINARY} ${GOOGLE_FONTS} ${GOOGLE_STATIC} https://vitals.vercel-insights.com`,
    "frame-ancestors 'self'",
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'",
  ];
  if (isProd) {
    directives.push("upgrade-insecure-requests");
  }
  return directives.join("; ");
}

export function getSecurityHeaders(): SecurityHeader[] {
  const csp = buildContentSecurityPolicy();
  const reportOnly = process.env.CSP_REPORT_ONLY === "true";

  const headers: SecurityHeader[] = [
    { key: "X-DNS-Prefetch-Control", value: "on" },
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    { key: "X-Frame-Options", value: "SAMEORIGIN" },
    {
      key: "Permissions-Policy",
      value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
    },
    {
      key: reportOnly ? "Content-Security-Policy-Report-Only" : "Content-Security-Policy",
      value: csp,
    },
  ];

  if (process.env.NODE_ENV === "production") {
    const hstsMax = "31536000";
    const preload =
      process.env.SECURITY_HEADERS_STRICT_HSTS_PRELOAD === "true" ? "; preload" : "";
    headers.push({
      key: "Strict-Transport-Security",
      value: `max-age=${hstsMax}; includeSubDomains${preload}`,
    });
  }

  return headers;
}
