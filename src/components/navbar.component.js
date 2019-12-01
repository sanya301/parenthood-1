import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            <Link color="textPrimary" href="/">
              parenthood
            </Link>
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="/add" className={classes.link}>
              Add Product*
            </Link>
            <Link variant="button" color="textPrimary" href="/shop" className={classes.link}>
              Shop
            </Link>
            <Link variant="button" color="textPrimary" href="/about-us" className={classes.link}>
              About Us
            </Link>
          </nav>
          <Button href="#" color="primary" variant="outlined" className={classes.link}>
            Your Cart
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}