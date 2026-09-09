import { ArrowUpRight, Sparkles } from "lucide-react";

export default function HeroVisual({ careers = false }: { careers?: boolean }) {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="visual-top"><span className="visual-dot" /> DUOPH / {careers ? "PEOPLE & POSSIBILITIES" : "DESIGN & TECHNOLOGY"}<ArrowUpRight size={20} /></div>
      <div className="visual-orbits"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" /><div className="orbit-core"><Sparkles size={42} strokeWidth={1} /></div></div>
      <span className="visual-tag tag-design">{careers ? "Bring your perspective" : "Thoughtfully designed"}</span>
      <span className="visual-tag tag-build">{careers ? "Make something meaningful" : "Built around you"}<ArrowUpRight size={15} /></span>
      <div className="visual-bottom"><span>{careers ? "Individual talents.\nShared possibilities." : "Different disciplines.\nOne connected vision."}</span><span className="visual-asterisk">✳</span></div>
    </div>
  );
}
