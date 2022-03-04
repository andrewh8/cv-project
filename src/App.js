import React from 'react';
import General from './components/General';
import Education from './components/Education';
import './styles/appStyle.css';

const App = () => {
    return (
      <div className='appStyle'>
        <General />
        <Education />
      </div>
    );
};

export default App;