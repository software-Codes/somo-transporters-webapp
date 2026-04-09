import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Somo Transporters Ltd - East Africa Petroleum Transport";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d1a00 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        {/* Orange accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            background: "#f97316",
          }}
        />

        {/* Company name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-2px",
            marginBottom: "16px",
            textAlign: "center",
          }}
        >
          Somo Transporters
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 32,
            color: "#f97316",
            fontWeight: 600,
            marginBottom: "32px",
            textAlign: "center",
          }}
        >
          LET IT FLOW ALL THE WAY | SAFETY FIRST
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 22,
            color: "#d1d5db",
            textAlign: "center",
            maxWidth: "900px",
            lineHeight: 1.5,
          }}
        >
          East Africa&apos;s Leading Petroleum & Logistics Transporter Since 2006
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: "60px",
            marginTop: "48px",
          }}
        >
          {[
            { value: "50+", label: "Trucks" },
            { value: "20+", label: "Years" },
            { value: "6", label: "Countries" },
            { value: "96%", label: "Efficiency" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ fontSize: 40, fontWeight: 800, color: "#f97316" }}>
                {stat.value}
              </div>
              <div style={{ fontSize: 18, color: "#9ca3af" }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            fontSize: 20,
            color: "#6b7280",
          }}
        >
          www.somotransporter.co.ke
        </div>
      </div>
    ),
    { ...size }
  );
}
