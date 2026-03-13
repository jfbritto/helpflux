#!/usr/bin/env python3
"""
HelpFlux Logo Generator
Concept: Abstract "H" formed by circuit-like flowing paths with connection nodes.
Represents technology (circuits, data paths) + help (connection points) + flux (flow).
"""

import svgwrite
import math
import os

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), '..', 'public', 'brand')
ICON_DIR = os.path.join(os.path.dirname(__file__), '..', 'src', 'app')

# Brand colors
GREEN = '#16A34A'
GREEN_LIGHT = '#22C55E'
GREEN_DARK = '#0D7A3A'
AMBER = '#F59E0B'
AMBER_LIGHT = '#FCD34D'
DARK = '#1A2E1A'
WHITE = '#FFFFFF'


def draw_symbol(dwg, group, x_off, y_off, scale, stroke_color, node_color, accent_color, flow_color, node_accent=None):
    """Draw the HelpFlux circuit-H symbol."""
    if node_accent is None:
        node_accent = accent_color

    s = scale
    ox, oy = x_off, y_off

    # Stroke widths
    main_w = 2.8 * s
    cross_w = 2.4 * s
    flow_w = 1.8 * s
    node_r = 2.5 * s
    small_r = 1.8 * s

    # === LEFT PILLAR ===
    # Vertical path with slight tech-curve (not perfectly straight)
    left_x = 8 * s + ox
    left_top = 4 * s + oy
    left_bot = 56 * s + oy
    left_mid_y = 30 * s + oy

    # Left pillar: two segments with a slight offset at middle
    group.add(dwg.line(
        start=(left_x, left_top),
        end=(left_x, left_mid_y - 4 * s),
        stroke=stroke_color, stroke_width=main_w,
        stroke_linecap='round'
    ))
    group.add(dwg.line(
        start=(left_x, left_mid_y + 4 * s),
        end=(left_x + 2 * s, left_bot),
        stroke=stroke_color, stroke_width=main_w,
        stroke_linecap='round'
    ))

    # === RIGHT PILLAR ===
    right_x = 52 * s + ox
    right_top = 4 * s + oy
    right_bot = 56 * s + oy
    right_mid_y = 30 * s + oy

    group.add(dwg.line(
        start=(right_x, right_top),
        end=(right_x, right_mid_y - 4 * s),
        stroke=stroke_color, stroke_width=main_w,
        stroke_linecap='round'
    ))
    group.add(dwg.line(
        start=(right_x, right_mid_y + 4 * s),
        end=(right_x - 2 * s, right_bot),
        stroke=stroke_color, stroke_width=main_w,
        stroke_linecap='round'
    ))

    # === CROSSBAR (main connection - accent) ===
    # Circuit-style path with right angles and rounded corners
    cross_y = 26 * s + oy
    cp_offset = 6 * s

    cross_path = dwg.path(
        d=f'M {left_x},{cross_y} '
          f'L {left_x + 8 * s},{cross_y - 4 * s} '
          f'L {right_x - 8 * s},{cross_y - 4 * s} '
          f'L {right_x},{cross_y}',
        stroke=accent_color, stroke_width=cross_w,
        stroke_linecap='round', stroke_linejoin='round',
        fill='none'
    )
    group.add(cross_path)

    # === SECONDARY FLOW PATH (lower) ===
    flow_y = 36 * s + oy
    flow_path = dwg.path(
        d=f'M {left_x},{flow_y} '
          f'Q {30 * s + ox},{flow_y + 6 * s} {right_x},{flow_y}',
        stroke=flow_color, stroke_width=flow_w,
        stroke_linecap='round', fill='none',
        opacity=0.6
    )
    group.add(flow_path)

    # === DATA FLOW DOTS (small dots along paths suggesting movement) ===
    dot_positions = [
        (left_x, 12 * s + oy, small_r * 0.6),
        (right_x, 14 * s + oy, small_r * 0.6),
        (left_x + 2 * s, 48 * s + oy, small_r * 0.6),
        (right_x - 2 * s, 46 * s + oy, small_r * 0.6),
    ]
    for dx, dy, dr in dot_positions:
        group.add(dwg.circle(
            center=(dx, dy), r=dr,
            fill=stroke_color, opacity=0.35
        ))

    # === CONNECTION NODES (main intersections) ===
    # Left junction
    group.add(dwg.circle(
        center=(left_x, cross_y), r=node_r,
        fill=node_accent
    ))
    # Right junction
    group.add(dwg.circle(
        center=(right_x, cross_y), r=node_r,
        fill=node_accent
    ))
    # Center node (the "help" spark)
    center_x = 30 * s + ox
    center_y = cross_y - 4 * s
    group.add(dwg.circle(
        center=(center_x, center_y), r=node_r * 1.3,
        fill=node_accent
    ))
    # Inner glow on center node
    group.add(dwg.circle(
        center=(center_x, center_y), r=node_r * 0.6,
        fill=WHITE if node_accent != WHITE else accent_color,
        opacity=0.8
    ))

    # Lower flow nodes
    group.add(dwg.circle(
        center=(left_x, flow_y), r=small_r,
        fill=flow_color, opacity=0.7
    ))
    group.add(dwg.circle(
        center=(right_x, flow_y), r=small_r,
        fill=flow_color, opacity=0.7
    ))

    # Top terminals (entry points)
    group.add(dwg.circle(
        center=(left_x, left_top), r=small_r,
        fill=stroke_color
    ))
    group.add(dwg.circle(
        center=(right_x, right_top), r=small_r,
        fill=stroke_color
    ))


def generate_symbol(filename, width, height, bg_color=None, bg_radius=0,
                    stroke_color=GREEN, node_color=GREEN, accent_color=AMBER,
                    flow_color=GREEN_LIGHT, node_accent=None, scale=1.0,
                    x_offset=0, y_offset=0):
    """Generate a symbol-only SVG."""
    dwg = svgwrite.Drawing(filename, size=(width, height), viewBox=f'0 0 {width} {height}')

    if bg_color:
        dwg.add(dwg.rect(insert=(0, 0), size=(width, height), rx=bg_radius, ry=bg_radius, fill=bg_color))

    g = dwg.g()
    draw_symbol(dwg, g, x_offset, y_offset, scale, stroke_color, node_color, accent_color, flow_color, node_accent)
    dwg.add(g)
    dwg.save()
    print(f'  Generated: {filename}')


def generate_logo_with_wordmark(filename, variant='default'):
    """Generate full logo with symbol + wordmark."""
    width = 300
    height = 64
    dwg = svgwrite.Drawing(filename, size=(width, height), viewBox=f'0 0 {width} {height}')

    g = dwg.g()

    if variant == 'white':
        draw_symbol(dwg, g, 2, 1, 0.92, WHITE, WHITE, AMBER_LIGHT, '#FFFFFF', AMBER_LIGHT)
        text_fill = WHITE
        flux_fill = '#D4D4D4'
    else:
        draw_symbol(dwg, g, 2, 1, 0.92, GREEN, GREEN, AMBER, GREEN_LIGHT, AMBER)
        text_fill = DARK
        flux_fill = GREEN

    dwg.add(g)

    # Wordmark
    text_group = dwg.g(
        style=f"font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 32px;"
    )
    text_group.add(dwg.text('help', insert=(72, 42), fill=text_fill))
    text_group.add(dwg.text('flux', insert=(72 + 62, 42), fill=flux_fill))
    dwg.add(text_group)

    dwg.save()
    print(f'  Generated: {filename}')


def generate_favicon(filename, size):
    """Generate favicon SVG with symbol on green background."""
    dwg = svgwrite.Drawing(filename, size=(size, size), viewBox=f'0 0 {size} {size}')

    # Background
    radius = size * 0.25
    dwg.add(dwg.rect(insert=(0, 0), size=(size, size), rx=radius, ry=radius, fill=GREEN))

    # Symbol centered and scaled
    padding = size * 0.15
    symbol_size = size - padding * 2
    icon_scale = symbol_size / 60

    g = dwg.g()
    draw_symbol(dwg, g, padding, padding, icon_scale,
                WHITE, WHITE, AMBER_LIGHT, '#FFFFFF', AMBER_LIGHT)
    dwg.add(g)
    dwg.save()
    print(f'  Generated: {filename}')


if __name__ == '__main__':
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    print('Generating HelpFlux brand assets...\n')

    # Main logo variants
    generate_logo_with_wordmark(os.path.join(OUTPUT_DIR, 'logo.svg'), 'default')
    generate_logo_with_wordmark(os.path.join(OUTPUT_DIR, 'logo-white.svg'), 'white')

    # Symbol only variants
    generate_symbol(
        os.path.join(OUTPUT_DIR, 'symbol.svg'),
        width=64, height=64,
        scale=0.97, x_offset=2, y_offset=1
    )
    generate_symbol(
        os.path.join(OUTPUT_DIR, 'symbol-dark.svg'),
        width=64, height=64,
        stroke_color=WHITE, node_color=WHITE,
        accent_color=AMBER_LIGHT, flow_color='#FFFFFF',
        node_accent=AMBER_LIGHT,
        scale=0.97, x_offset=2, y_offset=1
    )

    # Favicons
    generate_favicon(os.path.join(ICON_DIR, 'icon.svg'), 32)
    generate_favicon(os.path.join(ICON_DIR, 'apple-icon.svg'), 180)

    # Large symbol for print/social
    generate_symbol(
        os.path.join(OUTPUT_DIR, 'symbol-512.svg'),
        width=512, height=512,
        bg_color=GREEN, bg_radius=96,
        stroke_color=WHITE, node_color=WHITE,
        accent_color=AMBER_LIGHT, flow_color='#FFFFFF',
        node_accent=AMBER_LIGHT,
        scale=7.5, x_offset=30, y_offset=25
    )

    print('\nDone! All assets generated.')
