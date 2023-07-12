const outputFolder = './images/webp';

const produceWebP = async () => {
  const imagemin = await import('imagemin');
  const webp = await import('imagemin-webp');

  await imagemin.default(['images/*.png'], {
    destination: outputFolder,
    plugins: [
      webp.default({
        lossless: true,
      }),
    ],
  });
  console.log('PNGs processed');

  await imagemin.default(['images/*.{jpg,jpeg}'], {
    destination: outputFolder,
    plugins: [
      webp.default({
        quality: 65,
      }),
    ],
  });
  console.log('JPGs and JPEGs processed');
};

produceWebP();
