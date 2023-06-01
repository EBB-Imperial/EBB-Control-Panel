export function Create_Control_Button() {
    // Create the container div and add it to the body
    const temp = document.getElementById('buttonContainer');
    if (temp != null){
      return null;
    }
    const buttonContainer = document.createElement('div');
    buttonContainer.id = 'buttonContainer';
    document.body.appendChild(buttonContainer);

    // Create the four buttons
    const btnForward = document.createElement('button');
    btnForward.id = 'btnForward'; // Assign ID to the button
    btnForward.textContent = 'Forward';

    const btnBackward = document.createElement('button');
    btnForward.id = 'btnBackward'; // Assign ID to the button
    btnBackward.textContent = 'Backward';

    const btnLeft = document.createElement('button');
    btnForward.id = 'btnLeft'; // Assign ID to the button
    btnLeft.textContent = 'Left';

    const btnRight = document.createElement('button');
    btnForward.id = 'btnRight'; // Assign ID to the button
    btnRight.textContent = 'Right';

    // Add the buttons to the container
    buttonContainer.appendChild(btnForward);
    buttonContainer.appendChild(btnBackward);
    buttonContainer.appendChild(btnLeft);
    buttonContainer.appendChild(btnRight);

    // Add CSS styles to the container and buttons
    buttonContainer.style.position = 'absolute';
    buttonContainer.style.left = '20%';
    buttonContainer.style.top = '95%';
    buttonContainer.style.transform = 'translate(-50%, -50%)';
    buttonContainer.style.textAlign = 'center';

    const buttons = buttonContainer.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.style.width = '100px';
        button.style.height = '60px';
        button.style.marginBottom = '10px';
    }
    return buttonContainer
}

function sendMessage(message) {
    
  fetch('http://localhost:3001/Movement_Control', {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain',
    },
    body: JSON.stringify(message),
  })
  .then((res) => res.json())
  .then((data) => {
    const resultElement = document.getElementById('result');
    resultElement.textContent = data.message;})
  .catch((err) => {alert(err)});
}

export function Control_Button() {
    const buttonContainer = Create_Control_Button();
    if (buttonContainer == null){
      return ;
    }

    const buttons = buttonContainer.children;

    const btnForward = buttons[0];     // First button
    const btnBackward = buttons[1];    // Second button
    const btnLeft = buttons[2];        // Third button
    const btnRight = buttons[3];       // Fourth button
    
    let data = null;
 
    // Add event listeners to the buttons
    btnForward.addEventListener('click', () => {
      console.log('Forward button clicked');
      data = sendMessage('forward'); // Replace 'forward' with the appropriate message for this button
    });
  
    btnBackward.addEventListener('click', () => {
      console.log('Backward button clicked');
      data = sendMessage('backward'); // Replace 'backward' with the appropriate message for this button
    });
  
    btnLeft.addEventListener('click', () => {
      console.log('Left button clicked');
      data = sendMessage('left'); // Replace 'left' with the appropriate message for this button
    });
  
    btnRight.addEventListener('click', () => {
      console.log('Right button clicked');
      data = sendMessage('right'); // Replace 'right' with the appropriate message for this button
    });
  
    // Function to send the message to the server
  
    return [buttonContainer, data];
  }
  

export default Control_Button;