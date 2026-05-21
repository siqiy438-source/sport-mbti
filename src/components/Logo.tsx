interface LogoProps {
  size?: "sm" | "md" | "lg";
  /** 是否显示副标 "Sport · Personality" */
  showTagline?: boolean;
  className?: string;
}

const SIZES = {
  sm: {
    icon: "w-7 h-7 rounded-[8px]",
    iconText: "text-sm",
    brand: "text-sm",
    tagline: "text-[8px]",
    gap: "gap-2",
  },
  md: {
    icon: "w-9 h-9 rounded-[10px]",
    iconText: "text-lg",
    brand: "text-base",
    tagline: "text-[9px]",
    gap: "gap-2.5",
  },
  lg: {
    icon: "w-11 h-11 rounded-xl",
    iconText: "text-xl",
    brand: "text-lg",
    tagline: "text-[10px]",
    gap: "gap-3",
  },
};

/**
 * SMBTI 品牌 logo：方圆深绿 + 衬线斜体 S + 衬线字标
 * 取代之前那个圆形扁平 emoji 风的简陋 logo
 */
export default function Logo({
  size = "md",
  showTagline = false,
  className = "",
}: LogoProps) {
  const s = SIZES[size];
  return (
    <div className={`flex items-center ${s.gap} ${className}`}>
      <div
        className={`relative ${s.icon} bg-gradient-to-br from-accent to-[#2d5026] text-white flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_2px_8px_rgba(61,107,58,0.18)]`}
      >
        <span
          className={`font-serif italic font-semibold leading-none ${s.iconText}`}
          style={{ letterSpacing: "-0.04em" }}
        >
          S
        </span>
      </div>
      <div className="flex flex-col leading-none">
        <span
          className={`font-serif font-medium ${s.brand}`}
          style={{ letterSpacing: "0.06em" }}
        >
          SMBTI
        </span>
        {showTagline && (
          <span
            className={`hidden sm:inline text-muted/70 mt-1 uppercase whitespace-nowrap ${s.tagline}`}
            style={{ letterSpacing: "0.18em" }}
          >
            Sport · Personality
          </span>
        )}
      </div>
    </div>
  );
}
