# Design

The site follows the Aiviarium identity. The icons, wordmarks and lockups are in the [brand folder](https://github.com/aiviarium/.github/tree/main/brand). The badges come from the [badge endpoint](https://github.com/aiviarium/badges). Where the identity has no rule, the site takes the sizes of Nocturne, the design system of Crow.

The theme is in `src/app/global.css`, as CSS variables over the Fumadocs UI theme. A project site changes `docs.config.ts` and `public/brand/`, not the theme.

## Surfaces

Neutral greys with no tint.

| Token | Dark | Light | Use |
| --- | --- | --- | --- |
| `--bg` | `#0A0A0B` | `#FFFFFF` | Page |
| `--up` | `#111113` | `#F3F3F5` | Header, cards |
| `--soft` | `#18181B` | `#F8F8FA` | Callouts, table heads, code titles |
| `--hi` | `#202024` | `#E5E5EA` | The selected sidebar item |
| `--line` | `#2A2A30` | `#DADADF` | Controls |
| `--line-soft` | `#222227` | `#E5E5EA` | Cards, code blocks, callouts |
| `--fg` | `#EDEDEF` | `#111114` | Text |
| `--muted` | `#A1A1AA` | `#4F4F58` | Secondary text |
| `--text-3` | `#80808A` | `#6B6B75` | The faintest text a person reads |
| `--text-4` | `#52525B` | `#A8A8B0` | Decoration only |

## The project colour

`--brand` is the dark tone on dark and the light tone on white. The light tone passes 4.5:1 on white.

Use it for text, links, 1 px borders, small markers, the wordmark, the primary button's border and text, and the focus ring. Never use it, or a tint of it, as the fill of a panel, card, button, callout, code block or table cell. The one exception is the value part of a badge.

Fumadocs' primary colour stays neutral, because the library uses it for fills. The accent is added in `global.css` only where the rule allows it. No orange, copper or teal anywhere, including callouts and code colours.

## Badges

Badges in the page match the images of the badge endpoint.

| Part | Value |
| --- | --- |
| Height | 22 px |
| Radius | 5 px |
| Field | `#18181B` with a 1 px `#2A2A30` outline |
| Icon | The `-icon` file at 14 px, on the left |
| Label | Inter 600, `#EDEDEF` |
| Value | Inter 650, `#0A0A0B` on the project's dark tone |

 They are dark in both themes. The `Badge` component draws them, and the header chip uses it.

## Sizes from Nocturne

| What | Size |
| --- | --- |
| Radius | 6 px for controls, 8 px for cards and code blocks, 5 px for badges |
| Controls | 24, 28 and 32 px high. The search field and icon buttons are 28 px, the landing buttons 32 px |
| Sidebar items | 13 px text, 28 px high |
| Code | JetBrains Mono 12.5/21 px, on the page colour inside a soft hairline, with a 30 px title bar |
| Tables | Head in 12 px `--text-3` on `--soft`, rows divided by subtle hairlines |
| Tabs | Labels in `--muted`, the selected one in `--fg` with a 2 px underline |
| Callouts | A grey box with a soft hairline. Only the icon has the status colour |
| Focus | 1 px ring in `--brand` with a 3 px halo, on keyboard focus |

## Type and marks

- Body text is Inter, code is JetBrains Mono. Both are self-hosted from `src/fonts/`, under the OFL. No web font service.
- Project names in the header and the hero are wordmark SVGs, never live text.
- The header lockup is the `-icon` file at 1.5 times an 18 px word with a 0.25 em gap, and the plain `-mono` wordmark in the project colour. The faceted wordmark is for 24 px and above.
- The landing hero is laid out as in the mock-up. It has a mono label "Aiviarium / area", the wordmark and description, the badges, the master icon at 128 px, two outlined buttons and the install block.
- Light mode uses the `-light` files. The favicon is the `-16` file.
