import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {Link} from 'react-router-dom';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import {makeStyles} from '@mui/styles';
import Typography from '@mui/material/Typography';
import clsx from 'clsx';

const useStyle = makeStyles ({
  navtext: {
    color: 'white',
  },
  navitem: {
    justifyContent: 'right',
  },
  navbar: {
    display: 'flex',
    paddingRight: '9rem !important',
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
                <Typography
                  variant="body2"
                  ml={8}
                  className={clsx (classes.navtext, 'hvr-underline-from-left')}
                >
                  Home
                </Typography>
              </Link>
            </ListItemText>
            <ListItemText>
              <Link to="/project" style={{textDecoration: 'none'}}>
                <Typography
                  variant="body2"
                  ml={8}
                  className={clsx (classes.navtext, 'hvr-underline-from-left')}
                >
                  Project
                </Typography>
              </Link>
            </ListItemText>
            <ListItemText>
              <Link to="/experience" style={{textDecoration: 'none'}}>
                <Typography
                  variant="body2"
                  ml={8}
                  className={clsx (classes.navtext, 'hvr-underline-from-left')}
                >
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
