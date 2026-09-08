import StudioSite from "@/components/StudioSite";
import JsonLd from "@/components/JsonLd";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <>
      <JsonLd />
      <SmoothScroll><StudioSite /></SmoothScroll>
    </>
  );
}
