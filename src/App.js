import React, {Component} from 'react';
import General from './components/General';
import Education from './components/Education';
import './styles/appStyle.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='appStyle'>
        <General />
        <Education />
      </div>
    );
  }
}

export default App;