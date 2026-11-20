import type { ReactNode } from "react";

/** Small square-cornered label used above every section heading. */
export function Tag({ children, tone = "green" }: { children: ReactNode; tone?: "green" | "black" }) {
  return <p className={`dh-tag dh-tag--${tone}`}>{children}</p>;
}

/** Orange arrow from the design, used on the white pill buttons. */
export function ArrowIcon({ variant = "orange" }: { variant?: "orange" | "white" }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="dh-arrow"
      src={variant === "orange" ? "/images/figma/arrow-black.svg" : "/images/figma/arrow-white.svg"}
      alt=""
      width={variant === "orange" ? 22 : 14}
      height={variant === "orange" ? 15 : 12}
      aria-hidden="true"
    />
  );
}

export function PillLink({ href, children, ...rest }: { href: string; children: ReactNode } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className="dh-pill" href={href} {...rest}>
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

export function SectionHead({
  tag,
  title,
  intro,
  id,
}: {
  tag: string;
  title: ReactNode;
  intro?: ReactNode;
  id?: string;
}) {
  return (
    <div className="dh-head">
      <Tag>{tag}</Tag>
      <h2 className="dh-h2" id={id}>{title}</h2>
      {intro && <p className="dh-lead">{intro}</p>}
    </div>
  );
}
