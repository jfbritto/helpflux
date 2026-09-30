// Desenho gerado por scripts/generate-logo.py (viewBox 0 0 76 102)
const SYMBOL_PATHS = [
  // Engrenagem
  "M25.83,53.52 L20.32,57.62 A29.5,29.5 0 0 1 14.38,51.68 L18.48,46.17 A23,23 0 0 1 15.6,39.2 L8.8,38.2 A29.5,29.5 0 0 1 8.8,29.8 L15.6,28.8 A23,23 0 0 1 18.48,21.83 L14.38,16.32 A29.5,29.5 0 0 1 20.32,10.38 L25.83,14.48 A23,23 0 0 1 32.8,11.6 L33.8,4.8 A29.5,29.5 0 0 1 42.2,4.8 L43.2,11.6 A23,23 0 0 1 50.17,14.48 L55.68,10.38 A29.5,29.5 0 0 1 61.62,16.32 L57.52,21.83 A23,23 0 0 1 60.4,28.8 L67.2,29.8 A29.5,29.5 0 0 1 67.2,38.2 L60.4,39.2 A23,23 0 0 1 57.52,46.17 L61.62,51.68 A29.5,29.5 0 0 1 55.68,57.62 L50.17,53.52 A23,23 0 0 1 25.83,53.52",
  // Pescoço da lâmpada
  "M20.32,57.62 C23.82,61.62 28.5,66 28.5,75 M55.68,57.62 C52.18,61.62 47.5,66 47.5,75",
  // Vidro
  "M20.5,34 a17.5,17.5 0 1 0 35,0 a17.5,17.5 0 1 0 -35,0",
  // Filamento
  "M34.3,75 V41.5 C34.3,38 31.3,36.5 31.3,32.5 M41.7,75 V41.5 C41.7,38 44.7,36.5 44.7,32.5",
  // Rosca
  "M25.5,76.5 H50.5 M26,83.5 H50 M26.5,90.5 H49.5",
  // Ponta
  "M30,91.5 C30,96 33.5,98.5 38,98.5 C42.5,98.5 46,96 46,91.5",
];

export function LogoSymbol({
  color = "currentColor",
  size = 36,
  showDots = false,
  animated = false,
  className = "",
}: {
  color?: string;
  /** Altura em px; a largura acompanha a proporção do símbolo */
  size?: number;
  /** Pontos de fluxo nas laterais da lâmpada */
  showDots?: boolean;
  /** Traço se desenha ao carregar */
  animated?: boolean;
  className?: string;
}) {
  const viewBox = showDots ? "0 0 76 102" : "5 0 66 102";
  const width = (size * (showDots ? 76 : 66)) / 102;

  return (
    <svg
      width={width}
      height={size}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${animated ? "draw-in" : ""} ${className}`}
      aria-hidden="true"
    >
      {SYMBOL_PATHS.map((d) => (
        <path
          key={d}
          d={d}
          stroke={color}
          strokeWidth={3.6}
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={animated ? 1 : undefined}
        />
      ))}
      {showDots && (
        <>
          <circle cx={7.5} cy={64} r={2.8} fill={color} />
          <circle cx={68.5} cy={64} r={2.8} fill={color} />
        </>
      )}
    </svg>
  );
}

/** Trio "• ● •" que acompanha o nome na logo */
export function FlowDots({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-[0.35em] ${className}`}
      aria-hidden="true"
    >
      <span className="w-[0.3em] h-[0.3em] rounded-full bg-current" />
      <span className="w-[0.55em] h-[0.55em] rounded-full bg-current" />
      <span className="w-[0.3em] h-[0.3em] rounded-full bg-current" />
    </span>
  );
}

interface LogoProps {
  variant?: "default" | "white";
  showWordmark?: boolean;
  className?: string;
  size?: number;
}

export default function Logo({
  variant = "default",
  showWordmark = true,
  className = "",
  size = 36,
}: LogoProps) {
  const isWhite = variant === "white";

  return (
    <div
      className={`flex items-center gap-2.5 ${
        isWhite ? "text-white" : "text-foreground"
      } ${className}`}
    >
      <LogoSymbol size={size} />
      {showWordmark && (
        <span className="font-display text-[1.35rem] font-semibold tracking-tight leading-none">
          HelpFlux
        </span>
      )}
    </div>
  );
}
