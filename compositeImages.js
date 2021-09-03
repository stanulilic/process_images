const sharp = require("sharp");

async function compositeImages() {
  try {
    await sharp("underwater.png")
      .composite([
        {
          input: "sammy-transparent.png",
          top: 300,
          left: 420,
        },
      ])
      .toFile("sammy-underwater.png");
  } catch (error) {
    console.log(error);
  }
}

compositeImages();
