
import React, {useState} from "react";
import TableComp from './TableComp';
import ReactPolling from "react-polling/lib/ReactPolling"; 
//https://www.npmjs.com/package/react-polling

function App() {
  const [tableData33, updateTable33] = useState([[]]); 
  const [polledData, updatePollData] = useState("");
  const fetchData = () => {
    return fetch("http://localhost:3001/pollServer/");
  }
  const pollingSuccess = (jsonResponse) => {
    const txtres = "Current time at server: " + jsonResponse.time; updatePollData(txtres);
    return true;
  }
  const pollingFailure = () => { //alert('Polling failed'); //return true;
  }
  React.useEffect(() => {
  ///See CORS
  /* fetch("http://localhost:3001/personQuery/")
  .then((res) => res.json())
  .then((data) => alert(JSON.stringify(data))) .catch((err) => alert(err)
  );
  */
  }, []);

  //handleClick is our event handler for the button click
  const handleClick = (updateMethod) => { 
    fetch("http://localhost:3001/tableData33/")
      .then((res) => res.json())
      .then((data) => updateMethod(data.tableData33)) 
      .catch((err) => alert(err)
  );};

  return (
    <div className="App">
      <ReactPolling
      url={'http://localhost:3001/pollServer/'}
      interval= {500} // in milliseconds(ms)
      retryCount={3} // this is optional
      onSuccess = {pollingSuccess}
      onFailure= {pollingFailure}
      promise={fetchData} // custom api calling function that should return a promise
      render={({ startPolling, stopPolling, isPolling }) => {
        return <div>{polledData}<br/><br/></div>;
    }} />
    <TableComp td = {tableData33}/>
    <button onClick={() => handleClick(updateTable33)}>Randomize ages</button> </div>
  );
}
export default App;
