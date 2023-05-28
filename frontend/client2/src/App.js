import React, {useState} from "react"; 
import Maze from './Import/Maze';
import * as Control_Module from './Import/Control_Button';
import Image_display from "./Import/Image_display";
import CreateDataTable from "./Import/Data_table";
import ReactPolling from "react-polling/lib/ReactPolling";


function App() {
  console.log("App called");
  const [buttonContainer, data] = Control_Module.Control_Button();
  const [mazeMatrix, updateMap] = useState([[]]);
  const [data_, updateData] = useState([[]]);

  // Image_display();
  // const data_ = [
  //   { name: 'John Doe', age: 30, city: 'New York' },
  //   { name: 'Jane Smith', age: 25, city: 'London' },
  //   { name: 'Bob Johnson', age: 35, city: 'Paris' }
  // ];
  console.log(data_);
  

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
  
  React.useEffect(() => { ///See CORS
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
  }, [updateMap, updateData]);
  // document.body.appendChild(CreateDataTable(data.data_)

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
      <h1 style={{ fontSize: '36px' }}>EBB-Imperial   Maze</h1>
      <Maze td = {mazeMatrix}/>
      <button onClick={() => handleClickRandom(updateMap)}>Randomize Maze</button>
      <div id="result"></div>
      <ReactPolling
        url={'http://localhost:3001/display_data/'}
        interval= {500} // in milliseconds(ms)
        retryCount={3} // this is optional
        onSuccess = {pollingSuccess}
        onFailure= {pollingFailure}
        promise={fetchData} // custom api calling function that should return a promise
        render={({ startPolling, stopPolling, isPolling }) => {
          const oldTable = document.getElementById('data_table');
          const newTable = CreateDataTable(data_);
          // document.replaceChild(newTable, oldTable);
          if (oldTable != null){
            console.log("old",oldTable);
            console.log("new",newTable);
            oldTable.replaceWith(newTable);
          }
        }}
        
      />
    </div> );
}
export default App;