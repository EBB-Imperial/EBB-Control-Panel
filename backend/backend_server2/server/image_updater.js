const fs = require('fs');
const path = require('path');

async function image_update(folderPath) {
  try {
    const files = fs.readdirSync(folderPath);

    // Filter the files to get only image files (e.g., jpg, png, etc.)
    const imageFiles = files.filter(file => {
      const extension = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png'].includes(extension);
    });

    // Check if there are any image files
    if (imageFiles.length === 0) {
      console.log('No new images found.');
      return null;
    }

    // Get the most up-to-date image
    const latestImage = getLatestImage(imageFiles.map(file => path.join(folderPath, file)));
    console.log('Latest image:', latestImage);
    return latestImage;
  } catch (err) {
    console.error('Error reading folder:', error);
    return null;
  }
}

function getLatestImage(images) {
    return images.reduce((latestImage, currentImage) => {
      const latestTime = fs.statSync(latestImage).mtimeMs;
      const currentTime = fs.statSync(currentImage).mtimeMs;
      return currentTime > latestTime ? currentImage : latestImage;
    });
}
image_update("/Users/wujunyi/Desktop/Year2_Project/EBB-ESP32-Firmware/images");


module.exports = {
    image_update: image_update
  };

// function getLatestImage(images) {
//     return images.reduce((latestImage, currentImage) => {
//       const latestTime = fs.statSync(latestImage).mtimeMs;
//       const currentTime = fs.statSync(currentImage).mtimeMs;
//       return currentTime > latestTime ? currentImage : latestImage;
//     });
//   }
  
//   // Function to check for new images in the folder
//   function checkForNewImages(callback) {
//     fs.readdir(folderPath, (err, files) => {
//       if (err) {
//         console.error('Error reading folder:', err);
//         return callback(err, null);
//       }
  
//       // Filter the files to get only image files (e.g., jpg, png, etc.)
//       const imageFiles = files.filter(file => {
//         const extension = path.extname(file).toLowerCase();
//         return ['.jpg', '.jpeg', '.png'].includes(extension);
//       });
  
//       // Check if there are any image files
//       if (imageFiles.length === 0) {
//         console.log('No new images found.');
//         return callback(null, null);
//       }
  
//       // Get the most up-to-date image
//       const latestImage = getLatestImage(imageFiles.map(file => path.join(folderPath, file)));
//       console.log('Latest image:', latestImage);
//       return latestImage;
//     });
//   }

// module.exports = {
//     checkForNewImages: checkForNewImages
//   };