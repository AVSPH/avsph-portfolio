import Image from "next/image";
import { FileText, Image as ImageIcon } from "lucide-react";

import { PortfolioMediaType } from "./portfolio-data";

type PortfolioMediaFrameProps = {
  title: string;
  type: PortfolioMediaType;
  preview?: string;
  className?: string;
};

export default function PortfolioMediaFrame({
  title,
  type,
  preview,
  className,
}: PortfolioMediaFrameProps) {
  const Icon = type === "pdf" ? FileText : ImageIcon;

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border border-[var(--border-light)] bg-[var(--background-alt)] ${className ?? ""}`}
    >
      {preview ? (
        <Image
          src={preview}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-[var(--muted)]">
          <Icon className="h-8 w-8" />
          <span className="text-[11px] font-semibold uppercase tracking-widest">
            Preview Placeholder
          </span>
        </div>
      )}
    </div>
  );
}

