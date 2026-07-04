# Line-art style preview thumbnails

These images are shown on the **Line-art style** picker cards in the coloring-book
setup screen (`ColoringSetupScreen`). Each card displays its style's sample so the
user can see the look before choosing — instead of a plain color swatch.

## Easiest: save ONE sheet (recommended)

Save the 4-up example sheet (2×2 grid: Classic Cartoon top-left, Cute/Kawaii
top-right, Comic/Manga bottom-left, Geometric/Mandala bottom-right) as a single
file here:

    public/line-styles/sheet.png

Each card automatically shows its quadrant — no cropping needed. The quadrant
order is fixed, so keep the 2×2 layout as shown.

## Or: four individual files (cleaner crop)

Add these four PNG (or JPG) files here instead. Names must match exactly:

| File                      | Style card           |
| ------------------------- | -------------------- |
| `classic-cartoon.png`     | Classic Cartoon      |
| `cute-kawaii.png`         | Cute / Kawaii        |
| `comic-manga.png`         | Comic / Manga        |
| `geometric-mandala.png`   | Geometric / Mandala  |

Tips:
- Crop each sample from the 4-up example sheet so each file shows ONLY its own
  style (no titles/footers). A roughly landscape crop (~4:3) looks best in the card.
- Black-and-white line art on a white background matches the coloring-book look.

If a file is missing, the card automatically falls back to a gradient swatch, so
the app keeps working until you add them.
