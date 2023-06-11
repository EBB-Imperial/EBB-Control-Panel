function createCustomButton(text, width, height, top, left, id) {
    var button = document.createElement("button");
    button.textContent = text;
    button.style.width = width + "px";
    button.style.height = height + "px";
    button.style.position = "absolute";
    button.style.top = top + "px";
    button.style.left = left + "px";
    button.id = id;
    
    return button;
  }

function sendMessage(message) {    
    fetch('http://localhost:3001/Replay_Control', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify(message),
    })
    .then((res) => res.json())
    .then((data) => {
      // document.getElementById('dataDisplay').innerText = JSON.stringify(data);
      console.log(data)})
    .catch((err) => {alert(err)});
  }

export function create_replay_button() {
    const temp = document.getElementById('startButton');
    if (temp != null){
        return;
    }
    const startButton = createCustomButton("Replay", 150, 50, 1400, 100, 'startButton');
    startButton.addEventListener('click', () => {
      sendMessage('replay_change');
    })
    document.body.appendChild(startButton);
    
}

export default create_replay_button;