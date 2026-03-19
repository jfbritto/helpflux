interface LogoProps {
  variant?: "default" | "white";
  showWordmark?: boolean;
  className?: string;
  size?: number;
}

function LogoSymbol({
  strokeColor = "#059669",
  flowColor = "#10B981",
  flowLightColor = "#34D399",
  accentColor = "#F59E0B",
  dotColor = "#10B981",
  dotOpacity = 0.3,
  size = 36,
}: {
  strokeColor?: string;
  flowColor?: string;
  flowLightColor?: string;
  accentColor?: string;
  dotColor?: string;
  dotOpacity?: number;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left pillar - organic flowing curve */}
      <path
        d="M18,6 C18,6 16,16 17,28 C17.5,34 16,44 18,58"
        stroke={strokeColor}
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />

      {/* Right pillar - organic flowing curve */}
      <path
        d="M46,6 C46,6 48,16 47,28 C46.5,34 48,44 46,58"
        stroke={strokeColor}
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />

      {/* Cross flow - the connection */}
      <path
        d="M19,30 C24,26 28,25 32,25 C36,25 40,26 45,30"
        stroke={flowColor}
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Secondary flow - lower, subtle */}
      <path
        d="M20,38 Q32,44 44,38"
        stroke={flowLightColor}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity={0.5}
      />

      {/* Connection nodes */}
      <circle cx={19} cy={30} r={3.5} fill={accentColor} />
      <circle cx={45} cy={30} r={3.5} fill={accentColor} />

      {/* Center spark */}
      <circle cx={32} cy={25} r={4.5} fill={accentColor} />
      <circle cx={32} cy={25} r={2} fill="white" opacity={0.85} />

      {/* Flow dots */}
      <circle cx={18} cy={14} r={1.5} fill={dotColor} opacity={dotOpacity} />
      <circle cx={46} cy={14} r={1.5} fill={dotColor} opacity={dotOpacity} />
      <circle cx={17.5} cy={48} r={1.5} fill={dotColor} opacity={dotOpacity} />
      <circle cx={46.5} cy={48} r={1.5} fill={dotColor} opacity={dotOpacity} />

      {/* Top terminal nodes */}
      <circle cx={18} cy={6} r={2.5} fill={strokeColor} />
      <circle cx={46} cy={6} r={2.5} fill={strokeColor} />
    </svg>
  );
}

export default function Logo({
  variant = "default",
  showWordmark = true,
  className = "",
  size = 32,
}: LogoProps) {
  const isWhite = variant === "white";

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <LogoSymbol
        strokeColor={isWhite ? "#FFFFFF" : "#059669"}
        flowColor={isWhite ? "#FFFFFF" : "#10B981"}
        flowLightColor={isWhite ? "#FFFFFF" : "#34D399"}
        accentColor={isWhite ? "#FCD34D" : "#F59E0B"}
        dotColor={isWhite ? "#FFFFFF" : "#10B981"}
        dotOpacity={isWhite ? 0.2 : 0.3}
        size={size}
      />
      {showWordmark && (
        <span
          className={`text-xl font-bold tracking-tight lowercase ${
            isWhite ? "text-white" : "text-foreground"
          }`}
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          help
          <span className={isWhite ? "text-emerald-200" : "text-primary"}>
            flux
          </span>
        </span>
      )}
    </div>
  );
}
