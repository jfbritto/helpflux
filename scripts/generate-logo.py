#!/usr/bin/env python3
"""
HelpFlux Logo Generator

Conceito: lâmpada com engrenagem, em traço contínuo (line-art) e pontas
arredondadas. Ideia (lâmpada) + tecnologia que faz funcionar (engrenagem).
Os pontos laterais e o trio "• ● •" sob o nome representam o fluxo.

Gera os SVGs de marca em public/brand e os ícones em src/app.
O mesmo desenho é usado em src/components/Logo.tsx (SYMBOL_PATHS).

Uso: python3 scripts/generate-logo.py
"""

import math
import os

ROOT = os.path.join(os.path.dirname(__file__), "..")
BRAND_DIR = os.path.join(ROOT, "public", "brand")
ICON_DIR = os.path.join(ROOT, "src", "app")

# Cores da marca (extraídas da logo original)
INK = "#0F1E27"
PAPER = "#EEF1F0"
WHITE = "#FFFFFF"

# Geometria do símbolo — viewBox 0 0 76 102
CX, CY = 38.0, 34.0  # centro da engrenagem
R_GLASS = 17.5  # círculo interno (vidro da lâmpada)
R_BODY = 23.0  # corpo da engrenagem
R_TIP = 29.5  # ponta dos dentes
TOOTH_BASE = 5.2  # meia-largura do dente na base
TOOTH_TIP = 4.2  # meia-largura do dente na ponta
STROKE = 3.6
VIEWBOX_W, VIEWBOX_H = 76, 102

# Dentes a cada 45°; o de baixo (90°) dá lugar ao pescoço da lâmpada
TEETH = [135, 180, 225, 270, 315, 0, 45]


def pt(angle_deg, r):
    a = math.radians(angle_deg)
    return CX + r * math.cos(a), CY + r * math.sin(a)


def fmt(v):
    return f"{v:.2f}".rstrip("0").rstrip(".")


def p(x, y):
    return f"{fmt(x)},{fmt(y)}"


BASE_HALF = math.degrees(math.asin(TOOTH_BASE / R_BODY))
TIP_HALF = math.degrees(math.asin(TOOTH_TIP / R_TIP))


def gear_path():
    """Contorno fechado da engrenagem, sem o dente de baixo."""
    start = TEETH[0] - BASE_HALF
    d = [f"M{p(*pt(start, R_BODY))}"]
    for i, t in enumerate(TEETH):
        t = t if i == 0 or t >= TEETH[0] else t + 360
        d.append(f"L{p(*pt(t - TIP_HALF, R_TIP))}")
        d.append(f"A{fmt(R_TIP)},{fmt(R_TIP)} 0 0 1 {p(*pt(t + TIP_HALF, R_TIP))}")
        d.append(f"L{p(*pt(t + BASE_HALF, R_BODY))}")
        nxt = TEETH[i + 1] if i + 1 < len(TEETH) else None
        if nxt is not None:
            nxt = nxt if nxt >= TEETH[0] else nxt + 360
            d.append(f"A{fmt(R_BODY)},{fmt(R_BODY)} 0 0 1 {p(*pt(nxt - BASE_HALF, R_BODY))}")
    # Arco de baixo, fechando no dente inferior esquerdo (passa atrás do filamento)
    d.append(f"A{fmt(R_BODY)},{fmt(R_BODY)} 0 0 1 {p(*pt(start, R_BODY))}")
    return " ".join(d)


def neck_path():
    """Pescoço da lâmpada: sai da ponta dos dentes inferiores e desce até a base."""
    lx, ly = pt(135 - TIP_HALF, R_TIP)
    rx, ry = pt(45 + TIP_HALF, R_TIP)
    return (
        f"M{p(lx, ly)} C{p(lx + 3.5, ly + 4)} {p(28.5, 66)} {p(28.5, 75)} "
        f"M{p(rx, ry)} C{p(rx - 3.5, ry + 4)} {p(VIEWBOX_W - 28.5, 66)} {p(VIEWBOX_W - 28.5, 75)}"
    )


SYMBOL_PATHS = {
    "gear": gear_path(),
    "neck": neck_path(),
    "glass": f"M{p(CX - R_GLASS, CY)} a{fmt(R_GLASS)},{fmt(R_GLASS)} 0 1 0 {fmt(2 * R_GLASS)},0 a{fmt(R_GLASS)},{fmt(R_GLASS)} 0 1 0 {fmt(-2 * R_GLASS)},0",
    "filament": "M34.3,75 V41.5 C34.3,38 31.3,36.5 31.3,32.5 M41.7,75 V41.5 C41.7,38 44.7,36.5 44.7,32.5",
    "base": "M25.5,76.5 H50.5 M26,83.5 H50 M26.5,90.5 H49.5",
    "cap": "M30,91.5 C30,96 33.5,98.5 38,98.5 C42.5,98.5 46,96 46,91.5",
}
SIDE_DOTS = [(7.5, 64, 2.8), (68.5, 64, 2.8)]


def symbol_group(color, with_dots=True, stroke=STROKE):
    paths = "".join(
        f'<path d="{d}"/>' for d in SYMBOL_PATHS.values()
    )
    dots = ""
    if with_dots:
        dots = "".join(
            f'<circle cx="{fmt(x)}" cy="{fmt(y)}" r="{fmt(r)}" fill="{color}"/>'
            for x, y, r in SIDE_DOTS
        )
    return (
        f'<g fill="none" stroke="{color}" stroke-width="{fmt(stroke)}" '
        f'stroke-linecap="round" stroke-linejoin="round">{paths}</g>{dots}'
    )


def svg(w, h, body, view_box=None):
    vb = view_box or f"0 0 {fmt(w)} {fmt(h)}"
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{fmt(w)}" height="{fmt(h)}" '
        f'viewBox="{vb}">{body}</svg>\n'
    )


def square_icon(size, bg, fg, radius):
    """Símbolo centralizado num quadrado arredondado (favicon / app icon)."""
    pad = 10
    box = VIEWBOX_H + pad * 2
    offset_x = (box - VIEWBOX_W) / 2
    body = (
        f'<rect width="{box}" height="{box}" rx="{fmt(box * radius)}" fill="{bg}"/>'
        f'<g transform="translate({fmt(offset_x)},{pad})">'
        f"{symbol_group(fg, with_dots=False, stroke=4)}</g>"
    )
    return svg(size, size, body, f"0 0 {box} {box}")


def lockup(color):
    """Símbolo + nome + trio de pontos, empilhados (como a logo original)."""
    w, h = 240, 196
    sx = (w - VIEWBOX_W) / 2
    body = (
        f'<g transform="translate({fmt(sx)},0)">{symbol_group(color)}</g>'
        f'<text x="{w / 2}" y="150" text-anchor="middle" fill="{color}" '
        f"font-family=\"Poppins, 'Helvetica Neue', Arial, sans-serif\" "
        f'font-size="44" font-weight="600" letter-spacing="-0.5">HelpFlux</text>'
        f'<circle cx="{w / 2 - 16}" cy="182" r="2.6" fill="{color}"/>'
        f'<circle cx="{w / 2}" cy="182" r="5" fill="{color}"/>'
        f'<circle cx="{w / 2 + 16}" cy="182" r="2.6" fill="{color}"/>'
    )
    return svg(w, h, body)


def write(path, content):
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print("✓", os.path.relpath(path, ROOT))


def main():
    os.makedirs(BRAND_DIR, exist_ok=True)

    write(os.path.join(BRAND_DIR, "symbol.svg"), svg(VIEWBOX_W, VIEWBOX_H, symbol_group(INK)))
    write(os.path.join(BRAND_DIR, "symbol-white.svg"), svg(VIEWBOX_W, VIEWBOX_H, symbol_group(WHITE)))
    write(os.path.join(BRAND_DIR, "symbol-512.svg"), square_icon(512, INK, PAPER, 0.22))
    write(os.path.join(BRAND_DIR, "logo.svg"), lockup(INK))
    write(os.path.join(BRAND_DIR, "logo-white.svg"), lockup(WHITE))
    write(os.path.join(ICON_DIR, "icon.svg"), square_icon(32, INK, PAPER, 0.22))
    write(os.path.join(ICON_DIR, "apple-icon.svg"), square_icon(180, INK, PAPER, 0))

    print("\nSYMBOL_PATHS para src/components/Logo.tsx:")
    for k, v in SYMBOL_PATHS.items():
        print(f'  {k}: "{v}",')


if __name__ == "__main__":
    main()
