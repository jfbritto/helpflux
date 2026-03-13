interface LogoProps {
  variant?: "default" | "white";
  showWordmark?: boolean;
  className?: string;
  size?: number;
}

function LogoSymbol({
  strokeColor = "#16A34A",
  flowColor = "#22C55E",
  accentColor = "#F59E0B",
  flowOpacity = 0.6,
  size = 36,
}: {
  strokeColor?: string;
  flowColor?: string;
  accentColor?: string;
  flowOpacity?: number;
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
      {/* Left pillar - two segments */}
      <line x1="10" y1="6" x2="10" y2="24" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" />
      <line x1="10" y1="32" x2="12" y2="58" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" />

      {/* Right pillar - two segments */}
      <line x1="54" y1="6" x2="54" y2="24" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" />
      <line x1="54" y1="32" x2="52" y2="58" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" />

      {/* Crossbar - circuit style angular path */}
      <path
        d="M10,28 L18,24 L46,24 L54,28"
        stroke={accentColor}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Secondary flow path - curved */}
      <path
        d="M10,36 Q32,44 54,36"
        stroke={flowColor}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity={flowOpacity}
      />

      {/* Data flow dots along pillars */}
      <circle cx="10" cy="14" r="1.2" fill={strokeColor} opacity={0.35} />
      <circle cx="54" cy="16" r="1.2" fill={strokeColor} opacity={0.35} />
      <circle cx="12" cy="50" r="1.2" fill={strokeColor} opacity={0.35} />
      <circle cx="52" cy="48" r="1.2" fill={strokeColor} opacity={0.35} />

      {/* Connection nodes at junctions */}
      <circle cx="10" cy="28" r="2.8" fill={accentColor} />
      <circle cx="54" cy="28" r="2.8" fill={accentColor} />

      {/* Center node - the "help" spark */}
      <circle cx="32" cy="24" r="3.5" fill={accentColor} />
      <circle cx="32" cy="24" r="1.6" fill="white" opacity={0.8} />

      {/* Flow endpoint nodes */}
      <circle cx="10" cy="36" r="2" fill={flowColor} opacity={0.7} />
      <circle cx="54" cy="36" r="2" fill={flowColor} opacity={0.7} />

      {/* Top terminal nodes */}
      <circle cx="10" cy="6" r="2" fill={strokeColor} />
      <circle cx="54" cy="6" r="2" fill={strokeColor} />
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
        strokeColor={isWhite ? "#FFFFFF" : "#16A34A"}
        flowColor={isWhite ? "#FFFFFF" : "#22C55E"}
        accentColor={isWhite ? "#FCD34D" : "#F59E0B"}
        flowOpacity={isWhite ? 0.4 : 0.6}
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
          <span className={isWhite ? "text-white/85" : "text-primary"}>
            flux
          </span>
        </span>
      )}
    </div>
  );
}
