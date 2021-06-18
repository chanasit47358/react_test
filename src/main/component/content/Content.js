import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { CardActions, CardContent, SvgIcon, TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import clsx from 'clsx';
import PropTypes from "prop-types";
function Content({ window }) {
    const drawerWidth = 240;
    console.log(typeof (window));
    const useStyles = makeStyles((theme) => ({
        root: {
            display: "flex",
            flexDirection: "column",
            width: "95vw",
            height: "98vh",
            marginLeft: "1.5%",
            [theme.breakpoints.down("600")]: {
                width: "100vw",
                height: "140vh",
            },
        },
        control: {
            padding: theme.spacing(2),
        },
        card: {
            width: "100%",
            height: "90%",
            margin: "1% 1% 1% 1%",
            [theme.breakpoints.down("600")]: {
                margin: "1.5% 5% 5% 8.5%",
                width: "80%",
            },
        },
        cardshift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: +drawerWidth,
        },
        Typo: {
            margin: '2% 0% 0% 1%',
            fontWeight:"bold",
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            [theme.breakpoints.down("600")]: {
                margin: "2% 5% 0% 9%",
                fontWeight:"bold",
            },
        },
        Typoshift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: +drawerWidth,
        },
        image: {
            width: '300%',
            height: '300%',
            margin: '5% 10% 10% 10%',
            [theme.breakpoints.down("600")]: {
                margin: "0% 0% 0% 7%",
                width: '50%',
                height: '50%',
            },
        },
        button: {
            width: "276%",
            margin: '1% 1% 1% 17%',
            fontSize: "5%",
            [theme.breakpoints.down("600")]: {
                width: "50%",
                margin: "2% 0% 0% 6%",
                fontSize: "10%",
            },
        },
        content: {
            display: 'flex',
            alignItems: 'center',
            width: "50%",
        },
        content2: {
            width: "110%",
            margin: "120% 0% 0% 200%",
            [theme.breakpoints.down("600")]: {
                margin: "2% 0% 0% 64%",
                fontSize: "10%",
            },
        },
        save: {
            float: 'right',
            marginTop: '5%',
            marginRight: "5%",
            [theme.breakpoints.down("600")]: {
                marginTop: "-3%",
                marginRight: "20%",
            },
        },
        inputbox: {
            marginLeft: "70%",
            marginTop: "5%",
            width: "100%",
            [theme.breakpoints.down("600")]: {
                marginTop: "2%",
                marginleft: "-65%",
            },
        },
        inputid: {
            width: "94.25%",
            [theme.breakpoints.down("600")]: {
                width: "144%",
            },
            
        },
        inputid2: {
            width: "94.25%",
            marginBottom:"-3%",
            [theme.breakpoints.down("600")]: {
                width: "150%",
                marginBottom:"-3%"
            },
        },
        iconid: {
            marginTop: "1.6%",
            marginRight: "2%",
            [theme.breakpoints.down("600")]: {
                margin: "4% 5.5% 0% -58.5%",
            },
        },
        iconmr: {
            marginRight: "1.7%",
            marginTop: "1%",
            marginLeft: "1.5%",
            [theme.breakpoints.down("600")]: {
                margin: "3% 5.5% 0% -51.5%",
            },
        },
        row1: {
            display: "flex",
            [theme.breakpoints.down("600")]: {
                // marginTop: "2%",
                marginleft: "20%",
            },
        },
        inputnamebox: {
            display: "flex",
            width: "100%",
            [theme.breakpoints.down("600")]: {
                width: "150%",
            },
        },
        row2: {
            display: "flex",
            width: "100%",
        },
        name: {
            width: "100%",
            marginleft: "10%",
            [theme.breakpoints.down("600")]: {
                width: "89%",
            },
        },
        inputfirstname: {
            width: "100%",
            marginright: "20%",
            [theme.breakpoints.down("600")]: {
                marginLeft:"0.5%",
                width: "133%",
            },
        },
        inputname: {
            width: "96%",
            marginright: "20%",
            [theme.breakpoints.down("600")]: {
                marginLeft:"0.5%",
                width: "133%",
            },
        },
        row3: {
            width: "100%",
            display: "flex",
            marginTop:"1.5%",
        },
        icongen: {
            marginTop: "1%",
            marginLeft: "1.1%",
            marginRight: "2.1%",
            [theme.breakpoints.down("600")]: {
                margin: "6% 7% 0% -53%",
            },
        },
        inputgenderbox:{
            [theme.breakpoints.down("600")]: {
                marginTop:"3%"
            },
        },
        inputgen:{
            width:"100%",
            [theme.breakpoints.down("600")]: {
                width: "133.5%",
            },
        },
        icondate:{
            marginTop:"1%",
            marginRight:"1%",
            [theme.breakpoints.down("600")]: {
                margin: "3% 7% 0% -19%",
            },
        },
        inputdate:{
            width:"267.5%",
            [theme.breakpoints.down("600")]: {
                width: "159.5%",
            },
        },
        datebox:{
            [theme.breakpoints.down("600")]: {
                width: "100%",
            },
        },
        save:{
            marginTop:"10%",
            marginLeft:"80%",
            [theme.breakpoints.down("600")]: {
                marginTop:"0%",
                marginLeft:"29%",
            },
        },
        b1:{
            background:"Green",
            color:"white",
        },
        b2:{
            background:"grey",
            color:"white",
        },

    }));
    const classes = useStyles();
    const genders = [
        {
            value: 'Male',
            label: 'Male',
        },
        {
            value: 'Female',
            label: 'Female',
        },
    ];
    const aaa = [
        {
            value: 'Mr',
            label: 'Mr',
        },
        {
            value: 'Mrs',
            label: 'Mrs',
        },
    ]
    return (
        <div className={classes.root}>
            <Toolbar />
            <Typography className={clsx(classes.Typo, { [classes.Typoshift]: window })}>
                Profile
            </Typography>
            <Card className={clsx(classes.card, { [classes.cardshift]: window })}>
                <CardContent className={classes.content}>
                    <Grid container spacing={1} >
                        <Grid item xs={12} sm={1}>
                            <div>
                                <Grid item className={classes.content2}>
                                    <Avatar alt="Keng Shortgun" src="/picture/1.jpg" className={classes.image} />
                                    <Button variant="outlined" className={classes.button}>
                                        Upload Image
                                    </Button>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm>
                            <div className={classes.inputbox}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <div className={classes.row1}>
                                            <SvgIcon className={classes.iconid}>
                                                <path d="M2,3H22C23.05,3 24,3.95 24,5V19C24,20.05 23.05,21 22,21H2C0.95,21 0,20.05 0,19V5C0,3.95 0.95,3 2,3M14,6V7H22V6H14M14,8V9H21.5L22,9V8H14M14,10V11H21V10H14M8,13.91C6,13.91 2,15 2,17V18H14V17C14,15 10,13.91 8,13.91M8,6A3,3 0 0,0 5,9A3,3 0 0,0 8,12A3,3 0 0,0 11,9A3,3 0 0,0 8,6Z" />
                                            </SvgIcon>
                                            <TextField id="outlined-basic" label="Id card" variant="outlined" size="small"
                                                className={classes.inputid} />
                                        </div>
                                    </Grid>
                                    <div className={classes.row2}>
                                        <SvgIcon className={classes.iconmr}>
                                            <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                                        </SvgIcon>
                                        <Grid container spacing={1}>
                                            <Grid item xs={12} sm={2}>
                                                <div className={classes.inputnamebox}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        select
                                                        label="Mr."
                                                        className={classes.name}
                                                        variant="outlined"
                                                        size="small" >
                                                        {aaa.map((option) => (
                                                            <MenuItem key={option.value} value={option.value}>
                                                                {option.label}
                                                            </MenuItem>
                                                        ))}
                                                    </TextField>
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} sm={5}>
                                                <TextField id="outlined-basic" label="First Name"
                                                    variant="outlined" size="small" className={classes.inputfirstname} />
                                            </Grid>
                                            <Grid item xs={12} sm={5}>
                                                <TextField id="outlined-basic" label="Last Name"
                                                    variant="outlined" size="small" className={classes.inputname} />
                                            </Grid>
                                        </Grid>
                                    </div>
                                    <div className={classes.row3}>
                                        <SvgIcon className={classes.icongen}>
                                            <path d="M17.58,4H14V2H21V9H19V5.41L15.17,9.24C15.69,10.03 16,11 16,12C16,14.42 14.28,16.44 12,16.9V19H14V21H12V23H10V21H8V19H10V16.9C7.72,16.44 6,14.42 6,12A5,5 0 0,1 11,7C12,7 12.96,7.3 13.75,7.83L17.58,4M11,9A3,3 0 0,0 8,12A3,3 0 0,0 11,15A3,3 0 0,0 14,12A3,3 0 0,0 11,9Z" />
                                        </SvgIcon>
                                        <Grid container spacing={1}>
                                            <Grid item xs={12} sm={2}>
                                                <div className={classes.inputgenderbox}>
                                                <TextField
                                                id="outlined-basic"
                                                select
                                                label="Male"
                                                variant="outlined"
                                                className={classes.inputgen}
                                                size="small"
                                                >
                                                {genders.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}</TextField>
                                            </div>
                                            </Grid>
                                            <Grid item xm={12} sm={10} style={{display:"flex"}}>
                                            <SvgIcon className={classes.icondate} >
                                                        <path d="M12,6C13.11,6 14,5.1 14,4C14,3.62 13.9,3.27 13.71,2.97L12,0L10.29,2.97C10.1,3.27 10,3.62 10,4A2,2 0 0,0 12,6M16.6,16L15.53,14.92L14.45,16C13.15,17.29 10.87,17.3 9.56,16L8.5,14.92L7.4,16C6.75,16.64 5.88,17 4.96,17C4.23,17 3.56,16.77 3,16.39V21A1,1 0 0,0 4,22H20A1,1 0 0,0 21,21V16.39C20.44,16.77 19.77,17 19.04,17C18.12,17 17.25,16.64 16.6,16M18,9H13V7H11V9H6A3,3 0 0,0 3,12V13.54C3,14.62 3.88,15.5 4.96,15.5C5.5,15.5 6,15.3 6.34,14.93L8.5,12.8L10.61,14.93C11.35,15.67 12.64,15.67 13.38,14.93L15.5,12.8L17.65,14.93C18,15.3 18.5,15.5 19.03,15.5C20.11,15.5 21,14.62 21,13.54V12A3,3 0 0,0 18,9Z" />
                                                    </SvgIcon>
                                                <div className={classes.datebox}>
                                                    <TextField id="outlined-basic" variant="outlined" 
                                                    className={classes.inputdate} size="small" type='date' format="MM/dd/yyyy" />
                                                </div>
                                            </Grid>
                                        </Grid>   
                                    </div>
                                    <Grid item xs={12}>
                                        <div className={classes.row1}>
                                            <SvgIcon className={classes.iconid}>
                                            <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                                            </SvgIcon>
                                            <TextField id="outlined-basic" label="Phone" variant="outlined" size="small"
                                            className={classes.inputid2} />
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div className={classes.row1}>
                                            <SvgIcon className={classes.iconid}>
                                            <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                                            </SvgIcon>
                                            <TextField id="outlined-basic" label="Email" variant="outlined" size="small"
                                            className={classes.inputid2} />
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div className={classes.row1}>
                                            <SvgIcon className={classes.iconid}>
                                            <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                                            </SvgIcon>
                                            <TextField id="outlined-basic" label="Address" variant="outlined" size="small"
                                            className={classes.inputid} multiline rows={4}/>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions className={classes.save}>
                    <Button variant="contained" className={classes.b1} size="large">             Save           </Button>
                    <Button variant="contained" className={classes.b2} size="large">             Cancle         </Button>
                </CardActions>
            </Card>

        </div>
    )
}
Content.propTypes = {
    window: PropTypes.bool.isRequired,
};
export default Content;