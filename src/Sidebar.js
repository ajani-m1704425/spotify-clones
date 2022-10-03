import React from 'react';
import "./Sidebar.css";
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from './Datalayer';

function Sidebar(props) {
    const [{ playlist }, dispatch] = useDataLayerValue();
    const keys=0;

    return (
        <div className='sidebar'>
            <img 
                className='logo'
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt="spotify logo" />
            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title= "Search"/>
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
            
            <br />
            <strong className='sidebar_title'>PLAYLISTS</strong>
            <hr />
            {playlist?.items?.map(
                (value) => (
                <SidebarOption key={keys+1} title={value.name}/>
            ))}
           
        </div>
        
    );
}

export default Sidebar;