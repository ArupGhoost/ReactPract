import React from 'react'
import CancelIcon from '@material-ui/icons/Cancel';
// import Cancel from '@material-ui/icons/Cancel';
import './TodoList.css'

function TodoList2(props) {
     
   
    return (
        <>
        <div>
           {/* <div style={{position:'absolute', left:'540px', top:'172px',width:'20px', height:'20px'}}>
            <CancelIcon /></div> */}
           <i className='cross' onClick={() => {
               props.onSelect(props.id)
           }}><CancelIcon/></i>
           <br />
            <li>{props.text}</li>
            </div>
            
        </>
    )
}

export default TodoList2
