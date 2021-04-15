// Import the react and the reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './comment'
import ApprovalCard from './ApprovalCard'
// Create a react component
const App = () => {
     return (
       
        <div className='ui container comments'>
          <ApprovalCard>
                <Comment author="User1"
                date="11hrs10" 
                content="Comment"
                />  
          </ApprovalCard>
          <ApprovalCard>
                <Comment author="User"
                date="11hrs25" 
                content="Un autre comment!"
                />  
          </ApprovalCard>
          <ApprovalCard>
                <Comment author="User"
                date="11hrs30" 
                content="Un autre!"
                />  
          </ApprovalCard>
          
        </div>
     
    );
}
// Take the react component and show it on the screen
ReactDOM.render(<App />, document.getElementById('root'))
