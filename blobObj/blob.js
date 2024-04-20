// let allImages = document.getElementsByTagName("img");

// for (let i = 0; i < allImages.length; i++) {
//   let img = allImages[i];

//   let imgSrc = allImages[i].src;

//   console.log(imgSrc);

//   //   let fBlob = new Blob(imgSrc);

//   fetch(imgSrc)
//     .then((response) => response.blob())
//     .then((blob) => {
//       let url = URL.createObjectURL(blob);

//       console.log(url);

//       let img = document.createElement("img");

//         img.src = url;

//         document.body.appendChild(img)
//     });
// }

let allImages = document.getElementsByTagName("img");

let imagesSrcs = [];

for (let i = 0; i < allImages.length; i++) {
  let images = allImages[i];

  let imageSrc = images.src;

  imagesSrcs.push(imageSrc);
}

let addImages = imagesSrcs.map(downloadImage);

function downloadImage(imgSrc) {
  return fetch(imgSrc)
    .then((response) => response.blob())
    .then((blob) => {
      let url = URL.createObjectURL(blob);

      let img = document.createElement("img");

      img.src = url;

      document.body.appendChild(img);
    });
}
