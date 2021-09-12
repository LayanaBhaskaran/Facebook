import React from 'react'
import SidebarRow from './SidebarRow';
import './Side_Bar.css';

import MenuBookIcon from '@material-ui/icons/MenuBook';
import PeopleIcon from '@material-ui/icons/People';
import MessageIcon from '@material-ui/icons/Message';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function Side_Bar() {
    return (
        <div className="sidebar">

            <SidebarRow  Icon={MenuBookIcon} title="Pages"/>
            <SidebarRow  Icon={PeopleIcon} title="Friends"/>
            <SidebarRow  Icon={MessageIcon } title="Messages"/>
            <SidebarRow  Icon={VideoLibraryIcon} title="Videos"/>
            <SidebarRow  Icon={ExpandMoreIcon } title="More"/>
           
        </div>
    )
}

export default Side_Bar
