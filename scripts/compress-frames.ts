import { readdir } from "fs/promises";
import { join } from "path";

const framesDir = join(import.meta.dir, "../public/frames");
const files = (await readdir(framesDir)).filter((f) => f.endsWith(".png")).sort();

console.log(`Compressing ${files.length} PNG frames with lossless PNG (compressionLevel: 9)...\n`);

let totalOriginal = 0;
let totalSaved = 0;
let compressedCount = 0;

for (let i = 0; i < files.length; i++) {
  const file = files[i];
  const path = join(framesDir, file);

  const originalFile = Bun.file(path);
  const originalSize = originalFile.size;
  totalOriginal += originalSize;

  const compressed = await new Bun.Image(path).png({ compressionLevel: 9 }).bytes();

  if (compressed.byteLength < originalSize) {
    await Bun.write(path, compressed);
    const saved = originalSize - compressed.byteLength;
    totalSaved += saved;
    compressedCount++;
    console.log(
      `[${String(i + 1).padStart(3, "0")}/${files.length}] ${file} — ${(originalSize / 1024).toFixed(0)}KB → ${(compressed.byteLength / 1024).toFixed(0)}KB (saved ${(saved / 1024).toFixed(0)}KB)`
    );
  } else {
    console.log(
      `[${String(i + 1).padStart(3, "0")}/${files.length}] ${file} — already optimal (${(originalSize / 1024).toFixed(0)}KB)`
    );
  }
}

console.log(`\nDone.`);
console.log(`Files compressed: ${compressedCount}/${files.length}`);
console.log(`Total original:   ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
console.log(`Total saved:      ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
console.log(`Final size:       ${((totalOriginal - totalSaved) / 1024 / 1024).toFixed(2)} MB`);
