import { useState } from 'react';
import './App.css';
import DRFSide from './components/DRF/DRF';
import JSONSide from './components/JSON/JSON';

function App() {

  const [DRFValue, setDRFValue] = useState("");

  const onSerializeCallback = (val) => {
    setDRFValue(val)
  }

  return (
    <div className="App">
      <div className="row">
        <div className="col col-half col-fs" style={{borderRight: "1px solid #5C5C5C"}}>
          <JSONSide onSerializeCallback={onSerializeCallback}/>
        </div>
        <div className="col col-half col-fs">
          <DRFSide value={DRFValue}/>
        </div>
      </div>
    </div>
  );
}

export default App;
