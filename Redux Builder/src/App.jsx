import React from 'react';
import "./index.css"
import "./App.css"
import Counter from './components/Counter';
import Theme from './components/Theme';


const App = () => {
  return (
    <div>
       <Theme />
       <Counter />
    </div>
  )
}

export default App