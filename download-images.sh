#!/bin/bash
# Download all images needed for the CCNRC site from the existing live site.
# Run this from inside the ccnrc/ folder — it will create an images/ subfolder
# with everything wired up in shared.css.
#
# Usage:
#   cd ccnrc/
#   bash download-images.sh
#
# Requires: curl (pre-installed on Mac, Linux, and modern Windows)

set -e

mkdir -p images
cd images

BASE="https://claremontcoloniccenter.com/wp-content/uploads"

FILES=(
  "buldg-1.jpg"
  "GC.png"
  "empad.jpg"
  "special.jpg"
  "earcandle.jpg"
  "dfbath.jpg"
  "dfbath2.jpg"
  "pexels-rdne-stock-project-6539885.jpg"
  "pexels-rfstudio-3622643.jpg"
)

echo "Downloading ${#FILES[@]} images from $BASE..."
echo ""

for f in "${FILES[@]}"; do
  if [ -f "$f" ]; then
    echo "  ✓ $f (already exists, skipping)"
  else
    curl -sSL -o "$f" "$BASE/$f"
    size=$(stat -f%z "$f" 2>/dev/null || stat -c%s "$f" 2>/dev/null)
    echo "  ✓ $f ($size bytes)"
  fi
done

echo ""
echo "Done. All images saved to ccnrc/images/"
echo "Redeploy your site (drag folder to Netlify Drop or push to Vercel)."
