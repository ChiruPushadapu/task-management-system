import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu'
import { Menu, MenuItem, Tooltip, IconButton } from '@mui/material';

function MenuIconComponent(){
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    }
    
    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleAboutUs = () => {
        handleClose();
        navigate('/aboutus');
    }

    const handleSettings = () => {
        handleClose();
        navigate('/settings');
    }

    return(
        <div>
            <Tooltip title="Menu">
                <IconButton color="inherit" onClick={handleClick} size="small">
                    <MenuIcon />
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 75,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleAboutUs}>About Us</MenuItem>
                <MenuItem onClick={handleSettings}>Settings</MenuItem>
            </Menu>
        </div>
    )
}

export default MenuIconComponent;