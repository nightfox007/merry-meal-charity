import React, { useState } from 'react';
import {giveHelpDropdown} from "./HeaderItem";
import {foodMenuDropdown } from "./HeaderItem";
import {Link} from 'react-router-dom';

function DropDown (){
    
        const [dropdown,setDropdown] = useState(false);

        return(
            <div>
               <ul className={dropdown ? "givehelp-submenu clicked" : "givehelp-submenu"} 
               onClick={()=>setDropdown(!dropdown)}>

                {giveHelpDropdown.map(item =>{
                    return(
                        <li key={item.id}>
                            <Link to={item.path} className={item.cName} onClick={()=>setDropdown(false)}>{item.title}</Link>
                        </li>
                )
                })}
               </ul>

               
            </div>
        )
}

export default DropDown;