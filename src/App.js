import Taskbar from './main/component/navbar/taskbar.js'
import Content from './main/component/content/Content.js'
import { useState } from 'react';
function App() {
  let [window,setWindow] = useState(false)
  function Transitionwindow(menu){
    setWindow(menu);
  }
  return (
    <div >
      <header>
        <Taskbar Transitionwindow={Transitionwindow}/>
      </header>
      <Content window={window}/>
    </div>
  );
}

export default App;
