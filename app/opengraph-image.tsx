import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.shortTagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logoBuffer = await readFile(
    join(process.cwd(), "public", "logo.png"),
  );
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#FAF7F2",
          color: "#1F1B16",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            fontSize: 32,
            fontWeight: 600,
            letterSpacing: "-0.02em",
          }}
        >
          <img
            src={logoSrc}
            width={80}
            height={80}
            style={{ borderRadius: 16 }}
            alt=""
          />
          {site.name}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: 980,
            }}
          >
            {site.tagline}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 22,
              color: "#6B6258",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 999,
                background: "#B8533A",
              }}
            />
            Hourly billing · Written estimates · 30-day labor warranty
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
