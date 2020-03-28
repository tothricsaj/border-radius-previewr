import React from 'react';
import './App.css';

class App extends React.Component {

  render() {

    let sliders = () => {
      let classes = [
        'top-left',
        'top-right',
        'bottom-left',
        'bottom-right'
      ]

      return classes.map((el, i) => {
        return (
          <div className={el}>
            <input className={el + '-x'} type="range" min="1" max="100" /> 
            <input className={el + '-y'} type="range" min="1" max="100" />
          </div>
        )
        
      })
    }

    return (
    <div className="App">
      <h2>Border Radius previewer</h2>

      <div className="box"></div>

      {sliders()}
      
    </div>
  );
  }
}

export default App;
