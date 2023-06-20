import React from "react";

function App() {
  setInterval(ChangeTime,1) ;
  const now = new Date().toLocaleTimeString();
  const [time , updatetime] = React.useState(now) ;

  function ChangeTime(){
    const next = new Date().toLocaleTimeString();
    updatetime(next) ;
  } ;

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick = {ChangeTime}>Get Time</button>
    </div>
  );
}

export default App;
