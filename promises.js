const addImg = (src) => {
  console.log('addImg', src);
}

function loadNumber(number) {
  return new Promise((resolve, reject) => {
    if (isNaN(number)) {
      let message = number + ' is not number';
      reject(new Error(message))
    }
    console.log('success loadNumber: ', number)
  })
}

function loadImage(url) {
  return new Promise((resolve, reject) => {
    let img = new Image();

    img.onload = function() {
      callback(null, img)
    }

    img.onerror = function() {
      let message = 'Could not load image at ' + url;
      reject(new Error(message))
    }

    img.src = url;
  })
}

Promise.all([
  loadNumber(1),
  loadNumber(2),
  loadNumber('aabc')
]).then(res => {
  console.log('res: ', res);
}).catch(err => {
  console.log('error', err);
})