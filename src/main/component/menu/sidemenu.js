import { useState } from 'react'
import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import SendIcon from '@material-ui/icons/Send';
import SvgIcon from '@material-ui/core/SvgIcon';
import PropTypes from "prop-types";
function Sidemenu({Transitionwindow}) {
    let [menu, setMenu] = useState(false)
    const drawerWidth = 240;
    const toggleDrawer = (status) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setMenu(status)
        Transitionwindow(status);

    };
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            background:"white",
        },
        paper: {
            background: "blue"
          },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            margin: '5%',
            width: '10%',
            zindex: -1,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerContainer: {
            overflow: 'auto',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        logout: {
            transform: "scaleX(-1)",
            color: "black",
        },
        text: {
            fontSize: '100px',
        },
        xx: {
            marginTop: '10%',
        },
    }));
    const classes = useStyles();
    function changeBackground(e) {
        e.target.style.background = "rgba(251,236,197,255)";
    }
    function changeBackground1(e) {
        e.target.style.background = "";
    }
    return (
        <>
            <Button onClick={toggleDrawer(true)}>
                <MenuIcon style={{ color: 'white' }} />
            </Button>
            <Drawer open={menu} onClose={toggleDrawer(false)} className={classes.drawer} variant='temporary' BackdropProps={{ invisible: true }}>
                <List >
                    <Toolbar />
                    <ListItem key="profile" className={classes.list} onMouseOver={changeBackground}
                        onMouseOut={changeBackground1}>
                        <ListItemIcon>
                            <Avatar alt="Keng Shortgun" src="/picture/1.jpg" />
                        </ListItemIcon>
                        <ListItemText primary="Dechathon" className={classes.text} />
                    </ListItem>
                    <ListItem key="Ma" onMouseOver={changeBackground}
                        onMouseOut={changeBackground1}>
                        <ListItemIcon>
                            <SvgIcon>
                                <path d="M12,5.5C13.93,5.5 15.5,7.07 15.5,9C15.5,10.93 13.93,12.5 12,12.5C10.07,12.5 8.5,10.93 8.5,9C8.5,7.07 10.07,5.5 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14C3.34,14 2,12.66 2,11C2,9.34 3.34,8 5,8M19,8C20.66,8 22,9.34 22,11C22,12.66 20.66,14 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" />
                            </SvgIcon>
                        </ListItemIcon>
                        <ListItemText primary="Employee Management" className={classes.text} />
                    </ListItem>
                    <ListItem key="Re" onMouseOver={changeBackground}
                        onMouseOut={changeBackground1}>
                        <ListItemIcon>
                            <SendIcon />
                        </ListItemIcon>
                        <ListItemText primary="Request Management" className={classes.text} />
                    </ListItem>
                    <ListItem key="Report" onMouseOver={changeBackground}
                        onMouseOut={changeBackground1}>
                        <ListItemIcon>
                            <SvgIcon>
                                <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 20.41 4.12 20.8 4.34 21.12C4.41 21.23 4.5 21.33 4.59 21.41C4.95 21.78 5.45 22 6 22H13.53C13 21.42 12.61 20.75 12.35 20H6V4H13V9H18V12C18.7 12 19.37 12.12 20 12.34V8L14 2M18 23L23 18.5L20 15.8L18 14V17H14V20H18V23Z" />
                            </SvgIcon>
                        </ListItemIcon>
                        <ListItemText primary="Report" className={classes.text} />
                    </ListItem>
                    <Toolbar />
                    <Toolbar />
                    <Toolbar />
                    <Toolbar />
                    <Toolbar />
                    <div className={classes.xx}>
                        <ListItem key="Re" onMouseOver={changeBackground}
                            onMouseOut={changeBackground1}>
                            <ListItemIcon>
                                <SvgIcon className={classes.logout}>
                                    <path d="M22,18V22H18V19H15V16H12L9.74,13.74C9.19,13.91 8.61,14 8,14A6,6 0 0,1 2,8A6,6 0 0,1 8,2A6,6 0 0,1 14,8C14,8.61 13.91,9.19 13.74,9.74L22,18M7,5A2,2 0 0,0 5,7A2,2 0 0,0 7,9A2,2 0 0,0 9,7A2,2 0 0,0 7,5Z" />
                                </SvgIcon>
                            </ListItemIcon>
                            <ListItemText primary="Change Password" className={classes.text} />
                        </ListItem>
                        <ListItem key="Report" onMouseOver={changeBackground}
                            onMouseOut={changeBackground1}>
                            <ListItemIcon>
                                <SvgIcon className={classes.logout}>
                                    <path d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z" />
                                </SvgIcon>
                            </ListItemIcon>
                            <ListItemText primary="Logout" className={classes.text} />
                        </ListItem>
                    </div>
                </List>
            </Drawer>
        </>
    );
}
Sidemenu.propTypes = {
    Transitionwindow: PropTypes.func.isRequired,
  };
export default Sidemenu;