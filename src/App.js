import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      borderRadius: '50% 50% 50% 50% / 50% 50% 50% 50%'
    }

    this.borderChange = this.borderChange.bind(this)
  }

  borderChange(event) {
    console.log(event.target.value)

  }

  render() {

    let sliders = () => {
      let classes = [
        'top-left',
        'top-right',
        'bottom-left',
        'bottom-right'
      ]

      return classes.map((el, i) => {
        let rangeBlock = (axis) => {
          return (
            <div className={el+axis}>
              <input 
                className={el + axis} 
                type="range" 
                min="1" max="100" 
                onChange={this.testchange}
              /> 
            </div>
          )
        }

        return (
          <div className={el + '-wrapper'} key={i} >
            {rangeBlock('-x')}
            {rangeBlock('-y')}
          </div>
        )
        
      })
    }

    return (
    <div className="App">
      <h2>Border Radius previewer</h2>

      <div className="Box" style={this.state}></div>

      {sliders()}
      
    </div>
  );
  }
}

export default App;
