import React, { useState } from 'react';
import { Drawer, List, ListItemText, ListItemButton, ListItemIcon, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

const DrawerComp = () => {
    const [drawerVisibility, setDrawerVisibility] = useState(false);
    return (
        <React.Fragment>
            <Drawer open={drawerVisibility} onClose={()=>{setDrawerVisibility(false)}}>
                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemText>Item</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                </List>
            </Drawer>    
            <IconButton onClick={() => {setDrawerVisibility(!drawerVisibility)}}>
                <MenuIcon />
            </IconButton>
        </React.Fragment>
    )
}

export default DrawerComp;