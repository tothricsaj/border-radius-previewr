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

  borderChange(event, corner, axis) {
    let radiusValues = this.state.borderRadius.split(' ')

    let setAxis = (index) => {
      if(axis === '-x') radiusValues[index] = event.target.value + '%'
      else radiusValues[index + 5] = event.target.value + '%'
    }

    switch(corner){
      case 'top-left':
        setAxis(0)
        break
      case 'top-right':
        setAxis(1)
        break
      case 'bottom-left':
        setAxis(2)
        break
      case 'bottom-right':
        setAxis(3)
        break
      default:
        this.setState({...this.state})
    }

    this.setState({borderRadius: radiusValues.join(' ')})
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
                min="0" max="100" 
                onChange={ev => this.borderChange(ev, el, axis)}
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

      <h3>border-radius: {this.state.borderRadius}</h3>
      <div className="Box" style={this.state}></div>

      {sliders()}
      
    </div>
  );
  }
}

export default App;
