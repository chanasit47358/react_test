import Sidemenu from './sidemenu.js'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import PropTypes from "prop-types";
function Taskbar({Transitionwindow}){
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
          background:orange,
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        title: {
          flexGrow: 1,
        },
        menu:{
            background:'orange',
            zIndex:1301,
            height:"10%",
            [theme.breakpoints.down("600")]: {
              height:"8%",
            },
        },
        logo: {
          maxWidth: 40,
          marginLeft: "45%",
          [theme.breakpoints.down("600")]: {
            marginLeft: "35%",
          },
        },
      }));
      const classes = useStyles();
    return(
        <div className={classes.root} >
        <AppBar className={classes.menu} >
        <Toolbar >
        <Sidemenu Transitionwindow={Transitionwindow}/>
        <img src="/picture/LogoeHR.png" alt="hr" className={classes.logo} />
        </Toolbar>
        </AppBar>
        </div>
    )
}
Taskbar.propTypes = {
  Transitionwindow: PropTypes.func.isRequired,
};
export default Taskbar;