function downloadImage(src) {
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.src = src;
  img.onload = () => {
    // create Canvas
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    // create <a> tag
    const a = document.createElement("a");
    a.download = "download.png";
    a.href = canvas.toDataURL("image/png");
    a.click();
  };
}