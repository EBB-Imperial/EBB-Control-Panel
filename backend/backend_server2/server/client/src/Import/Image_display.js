function Image_display (){
    fetch('http://localhost:3001/Image_Url')
        .then(response => response.blob()) // Get the image data as a Blob
        .then(blob => {
            const imgElement = document.createElement('img');
            imgElement.src = URL.createObjectURL(blob);
            imgElement.style.position = 'absolute'; // Set position to absolute
            imgElement.style.top = '300px'; // Set the top position in pixels
            imgElement.style.right = '50px'; // Set the left position in pixels
            imgElement.style.width = '400px'; // Set the width in pixels or other CSS units
            imgElement.style.height = '400px'; // Set the height to 'auto' to maintain aspect ratio
            document.body.appendChild(imgElement);
        })
        .catch(error => {
            console.error(error);
        });

}
export default Image_display;