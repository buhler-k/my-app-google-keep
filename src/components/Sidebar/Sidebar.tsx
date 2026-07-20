import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
    const [isHover, setIsHover] = useState(false);


    const hoverOverHandler = () => {
        setIsHover(true);

    }

    const hoverOutHandler = () => {
        setIsHover(false);

    }
    const sidebarClickHandler = () => {
        // placeholder click handler for sidebar
    }
    return (

        <div className="sidebar" onClick = {sidebarClickHandler} onMouseEnter = {hoverOverHandler} onMouseLeave={hoverOutHandler}>
            
                 <div className="sidebar-item sidebar-active-item">
                    <span className="material-symbols-outlined hover active">lightbulb</span>
                
                    
                    {isHover && (
                    <div className="sidebar-item sidebar-active-item text">
                        <span className="sidebar-text">Notes</span>
                    </div>
                        
                    )} 
                </div>
                
               
        

            <div className="sidebar-item">
                <span className="material-symbols-outlined hover">notifications</span>
                 {isHover && (
                    
                        <span className="sidebar-text">Reminders</span>
                    )} 
                
            </div>

            <div className="sidebar-item">
                <span className="material-symbols-outlined hover ">edit</span>

                 {isHover && (
                    
                        <span className="sidebar-text">Edit Labels</span>
                    )} 
                
            </div>

            <div className="sidebar-item">
                <span className="material-symbols-outlined hover ">archive</span>

                 {isHover && (
                    
                        <span className="sidebar-text">Archive</span>
                    )} 
                
            </div>

            <div className="sidebar-item">
                <span className="material-symbols-outlined hover ">delete</span>
                 {isHover && (
                    
                        <span className="sidebar-text">Trash</span>
                    )} 
                
            </div>
        </div>

    );
};

export default Sidebar;