import { ImageResponse } from "next/og";
import { OgImageMarkup } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt =
  "Duoph Technologies — Technology that moves businesses forward";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(<OgImageMarkup />, { ...size });
}
