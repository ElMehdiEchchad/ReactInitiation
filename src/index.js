// Import the react and the reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import fake from 'faker';
import Comment from './comment'
// Create a react component
const App = () => {
     return (
       <div>
        <div className='ui container comments'>
          
          <Comment author="User" date="11hrs00" message="Test of props" />

        </div>
      </div>
    );
}
// Take the react component and show it on the screen
ReactDOM.render(<App />, document.getElementById('root'))
