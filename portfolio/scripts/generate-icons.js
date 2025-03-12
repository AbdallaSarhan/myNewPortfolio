const sharp = require("sharp");
const fs = require("fs").promises;
const path = require("path");

const sizes = [16, 32, 48, 64, 192, 512];

async function generateIcons() {
  const inputSvg = path.join(__dirname, "../public/logo.svg");
  const publicDir = path.join(__dirname, "../public");

  try {
    // Read the SVG file
    const svgBuffer = await fs.readFile(inputSvg);

    // Generate PNG files for different sizes
    for (const size of sizes) {
      await sharp(svgBuffer)
        .resize(size, size)
        .png()
        .toFile(path.join(publicDir, `logo${size}.png`));

      console.log(`Generated ${size}x${size} PNG`);
    }

    // Generate ICO file (using 16x16, 32x32, and 48x48)
    const icoSizes = [16, 32, 48];
    const icoBuffers = await Promise.all(
      icoSizes.map((size) =>
        sharp(svgBuffer).resize(size, size).png().toBuffer()
      )
    );

    // Combine buffers into ICO file
    const icoPath = path.join(publicDir, "favicon.ico");
    await fs.writeFile(icoPath, Buffer.concat(icoBuffers));
    console.log("Generated favicon.ico");
  } catch (error) {
    console.error("Error generating icons:", error);
  }
}

generateIcons();
