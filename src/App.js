import { useState, useEffect } from "react";
import "./ScrollIndicator.css";
import "./App.css";

function App() {

const [scrollTop,setScrollTop] = useState(0);

const onScroll = ()=>{
  const winScroll = document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
}

  return (
    <div className="App">
      <div className="progressMainWrapper">
        <div className="progressMainStyle"></div>
      </div>
      <h1>Roma İmparatorluğu</h1>
    </div>
  );
}

export default App;
