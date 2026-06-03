import sharp from 'sharp'
import { readdir, stat } from 'fs/promises'
import { join } from 'path'

const dir = '/Users/cn/Documents/veg/veggiehub/public/frames'
const files = (await readdir(dir)).filter((f) => f.endsWith('.png')).sort()

let origTotal = 0
let webpTotal = 0

for (let i = 0; i < files.length; i++) {
  const png = join(dir, files[i])
  const webp = png.replace(/\.png$/, '.webp')
  const before = (await stat(png)).size
  await sharp(png).webp({ quality: 80, effort: 6 }).toFile(webp)
  const after = (await stat(webp)).size
  origTotal += before
  webpTotal += after
  if ((i + 1) % 40 === 0 || i === files.length - 1) {
    console.log(`[${i + 1}/${files.length}] done`)
  }
}

const mb = (n) => (n / 1024 / 1024).toFixed(1)
console.log(`\nPNG total:  ${mb(origTotal)} MB`)
console.log(`WebP total: ${mb(webpTotal)} MB`)
console.log(`Saved:      ${mb(origTotal - webpTotal)} MB (${((1 - webpTotal / origTotal) * 100).toFixed(0)}% smaller)`)
