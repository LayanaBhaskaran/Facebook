import React from 'react'
import'./SidebarRow.css';
import {BsBookHalf} from'react-icons/bs';
import {FaUsers} from 'react-icons/fa';
import {RiMessage2Line} from 'react-icons/ri';
import {MdVideoLibrary} from 'react-icons/md';
import {FcExpand} from 'react-icons/fc';
//import { Icon } from '@material-ui/core';

function SidebarRow(props) {
    return (
        <div className="sidebarRow">
          {props.Icon && <props.Icon/>}
            <h4>{props.title}</h4>
           

        </div>
    )
}

export default SidebarRow
