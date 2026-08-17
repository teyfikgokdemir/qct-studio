import sharp from 'sharp';
import fs from 'node:fs/promises';

const directory = 'public/images/cases';
const files = (await fs.readdir(directory)).filter((file) => file.endsWith('-live.png'));
for (const file of files) {
  const input = `${directory}/${file}`;
  const output = input.replace(/\.png$/, '.webp');
  await sharp(input).resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 82, effort: 5 }).toFile(output);
  await fs.unlink(input);
}
