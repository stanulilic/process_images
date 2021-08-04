const sharp = require("sharp");

async function compositeImages() {
  try {
    await sharp("sammy.png")
      .composite([
        {
          input: "logo.png",
          top: 300,
          left: 420,
        },
      ])
      .toFile("sammy-watermarked.png");
  } catch (error) {
    console.log(error);
  }
}

compositeImages();
