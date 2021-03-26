import React, { useState } from 'react'
import './TodoList.css'
import TodoList2 from './TodoList2';
import AddIcon from '@material-ui/icons/Add';

function TodoList() {
     
    const[todoItems, settodoItems] = useState('')
    const [Items, setItems] = useState([])

    const addItems = (event) =>{
        settodoItems(event.target.value)
    }
    const addmainItems = () =>{
       setItems((oldItems) => {
           return [...oldItems, todoItems]
       })
       settodoItems('');
    }
    const deleteItem = (id) => {
        console.log('deleted');
        setItems((oldItems) =>{
            return oldItems.filter((arrElem, idx) =>{
                return  idx !== id;
            }
            )
        } 
        )
    }

    return (
        <>
         <div className='main_div'>
            <div className='main'>
            <br />
            <h1>TodoList</h1>
            <br />
            <input type='text' placeholder='Add a Item' onChange={addItems} value={todoItems}/>
            
            <button onClick={addmainItems}><AddIcon /> </button>
            <br />
               
               <ol>
               
                
                {Items.map( (items, idx) => {
                    
                  return( 
                  <TodoList2  text={items}
                      key={idx} 
                      id={idx}
                      onSelect={deleteItem}
                  />
                  )
                    
                })}
                
 
             </ol>
               
           
            </div>
         </div>
        </>
    )
}

export default TodoList
