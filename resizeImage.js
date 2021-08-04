const sharp = require("sharp");

async function resizeImage() {
  try {
    await sharp("sammy.png")
      .resize({
        width: 100,
        height: 100,
        fit: "outside",
      })
      .toFormat("jpeg", { mozjpeg: true })
      .toFile("sammy-resized-compressed.jpeg");
  } catch (error) {
    console.log(error);
  }
}

resizeImage();
