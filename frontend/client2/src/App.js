import React, {useState} from "react"; 
import './App.css';
import Maze from './Import/Maze';
import * as Control_Module from './Import/Control_Button';
import Image_display from "./Import/Image_display";
import CreateDataTable from "./Import/Data_table";
import ReactPolling from "react-polling/lib/ReactPolling";
import CreateProgressBar from "./Import/Progress_Bar";
import create_replay_button from "./Import/Replay_button";

function App() {
  
  // document.body.appendChild(CreateDataTable(data.data_)
  const [mazeMatrix, updateMap] = useState([[]]);
  const [data_, updateData] = useState([[]]);
  const [ReplayMap, updateReplayMap] = useState([[]])
  

  
  Image_display();
  Control_Module.Control_Button();
  create_replay_button()

 


  React.useEffect(() => { ///See CORS

    fetch("http://localhost:3001/ReplayMap/") 
      .then((res) => res.json())
      .then((data) => updateReplayMap(data.ReplayMap)) 
      .catch((err) => alert("ReplayMap" + err)
    );

    fetch("http://localhost:3001/mazeMatrix/") 
        .then((res) => res.json())
        .then((data) => updateMap(data.mazeMatrix)) 
        .catch((err) => alert(err)
    );

    fetch("http://localhost:3001/display_data")
        .then((res) => res.json())
        .then((data) => {
          const get_table = CreateDataTable(data.data_);
          if (document.getElementById('data_table') != null){
            document.getElementById('data_table').replaceWith(get_table);
          }
          else {
            document.body.appendChild(get_table)
        }})
        .catch((err) => alert(err));

    // fetch("http://localhost:3001/robot_history/")
    //      .then((res) => res.json())
    //     //  .then((data) => alert(JSON.stringify(data)))
    //      .catch((err) => alert(err)
    //       );
         
  }, [updateMap, updateData]);

  const pollingSuccess = (jsonResponse) => {
    updateData(jsonResponse.data_)
    return true;
  }
  
  const pollingFailure = () => { 
    alert('Polling failed');
    return true;
  }

  const fetchData = () => {
    return fetch("http://localhost:3001/display_data/");
  }

  const pollingSuccess_2 = (jsonResponse) => {
    updateReplayMap(jsonResponse.ReplayMap)
    return true;
  }

  const fetchData_2 = () => {
    return fetch("http://localhost:3001/ReplayMap/")
  }


  const handleClickRandom = (updateMethod) => { 
    fetch("http://localhost:3001/mazeMatrix/")
      .then((res) => res.json())
      .then((data) => updateMethod(data.mazeMatrix)) 
      .catch((err) => alert(err)
    );}
  

  // const handleDateUpdate = (updateMethod) => { 
  //   fetch("http://localhost:3001/display_data/")
  //     .then((res) => res.json())
  //     .then((data) => updateData(data.data_))
  //     .catch((err) => alert(err));

  return (
    <div className="App">
      <h1 style={{ fontSize: '36px' }}> EBB-Imperial   Maze</h1>
      <Maze td = {mazeMatrix}/>
      <button onClick={() => handleClickRandom(updateMap)}>Randomize Maze</button>
      <div id="result"></div>
      <progress max="100" value="50"></progress>
      <ReactPolling
        url={'http://localhost:3001/display_data/'}
        interval= {200} // in milliseconds(ms)
        retryCount={3} // this is optional
        onSuccess = {pollingSuccess}
        onFailure= {pollingFailure}
        promise={fetchData} // custom api calling function that should return a promise
        render={({ startPolling, stopPolling, isPolling }) => {
          const oldTable = document.getElementById('data_table');
          const newTable = CreateDataTable(data_);
          // document.replaceChild(newTable, oldTable);
          if (oldTable != null){
            oldTable.replaceWith(newTable);
          }
        }}
      />
      
      <ReactPolling
        url={'http://localhost:3001/ReplayMatrix/'}
        interval= {1000} // in milliseconds(ms)
        retryCount={3} // this is optional
        onSuccess = {pollingSuccess_2}
        onFailure= {pollingFailure}
        promise={fetchData_2} // custom api calling function that should return a promise
        render={({ startPolling, stopPolling, isPolling }) => {
          
        }}
      />
      <Maze td = {ReplayMap}/>
      {/* <div id="dataDisplay"></div> */}
    </div> );
}
export default App;
