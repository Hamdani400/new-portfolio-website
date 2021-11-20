import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {Link} from 'react-router-dom';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import {makeStyles} from '@mui/styles';
import Typography from '@mui/material/Typography';

const useStyle = makeStyles ({
  navtext: {
    color: 'white',
  },
  navitem: {
    display: 'flex',
    justifyContent: 'right',
  },
  navbar: {
    display: 'flex',
  },
});

export default function Navbar () {
  const classes = useStyle ();

  return (
    <div>
      <AppBar position="fixed" color="transparent" elevation={0}>
        <Toolbar className={classes.navitem}>
          <List className={classes.navbar}>
            <ListItemText>
              <Link to="/" style={{textDecoration: 'none'}}>
                <Typography variant="body2" ml={3} className={classes.navtext}>
                  Home
                </Typography>
              </Link>
            </ListItemText>
            <ListItemText>
              <Link to="/project" style={{textDecoration: 'none'}}>
                <Typography variant="body2" ml={3} className={classes.navtext}>
                  Project
                </Typography>
              </Link>
            </ListItemText>
            <ListItemText>
              <Link to="/experience" style={{textDecoration: 'none'}}>
                <Typography variant="body2" ml={3} className={classes.navtext}>
                  Experience
                </Typography>
              </Link>
            </ListItemText>
          </List>
        </Toolbar>
      </AppBar>
    </div>
  );
}
