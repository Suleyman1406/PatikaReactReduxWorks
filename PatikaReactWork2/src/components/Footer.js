import React, { useEffect, useState } from 'react'

const Footer = ({isCheckedList,selectedItem,setSelectedItem,clearCompleted}) => {
    const[itemCount,setItemCount]=useState(0);
    const items=['All','Active','Completed'];
    useEffect(()=>{
        var a=0;
        isCheckedList.map((bool)=>bool?0:a++);
        setItemCount(a);
    },[isCheckedList])
    const selectItem=(i)=>{
        setSelectedItem(i);
    }
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{itemCount} </strong>
                items left
            </span>

            <ul className="filters">
                {
                    items.map((item,i)=>{
                        return (<li key={i}>
                            <a className={i===selectedItem?"selected":""} onClick={()=>selectItem(i)}>{item}</a>
                        </li>
                        )
                    })
                }

                
            </ul>

            <button onClick={clearCompleted} className="clear-completed">
                Clear completed
            </button>
	    </footer>
    )
}

export default Footer
