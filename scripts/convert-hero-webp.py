# -*- coding: utf-8 -*-
"""One-off: create WebP siblings for every .png referenced by a page component.
The originals are kept; CaseStudyHero serves the .webp via <picture> with the
.png as fallback, so a missing .webp is harmless. Max edge capped at 1600px.
Run: python scripts/convert-hero-webp.py
"""
import os
import re
import glob
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUBLIC = os.path.join(ROOT, "public")
MAX_EDGE = 1600

refs = set()
for page in glob.glob(os.path.join(ROOT, "src", "pages", "*.tsx")):
    text = open(page, encoding="utf-8").read()
    for m in re.findall(r"""["'](/[^"']+?\.png)["']""", text):
        refs.add(m)

converted = skipped = missing = errors = 0
for ref in sorted(refs):
    src = os.path.join(PUBLIC, ref.lstrip("/").replace("/", os.sep))
    dst = src[:-4] + ".webp"
    if not os.path.isfile(src):
        missing += 1
        continue
    if os.path.isfile(dst):
        skipped += 1
        continue
    try:
        im = Image.open(src)
        if im.mode == "P":
            im = im.convert("RGBA")
        w, h = im.size
        if max(w, h) > MAX_EDGE:
            scale = MAX_EDGE / float(max(w, h))
            im = im.resize((round(w * scale), round(h * scale)), Image.LANCZOS)
        im.save(dst, "WEBP", quality=82, method=6)
        converted += 1
    except Exception as e:  # noqa: BLE001
        print("ERR", ref, e)
        errors += 1

print(f"refs={len(refs)} converted={converted} skipped={skipped} missing={missing} errors={errors}")
