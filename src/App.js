import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  Image()
}

function Image(){
  const element = (
    <div id="wallpapercontainer">
      <img src="imgs/landscape5.jpg" width="100%"></img>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

App()
