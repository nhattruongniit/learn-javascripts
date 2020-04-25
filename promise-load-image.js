function loadImage(url) {
  return new Promise((resolve, reject) => {
    let img = new Image();

    img.onload = function () {
      callback(null, img);
    };

    img.onerror = function () {
      let message = "Could not load image at " + url;
      reject(new Error(message));
    };

    img.src = url;
  });
}
