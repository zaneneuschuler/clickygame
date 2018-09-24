import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
const styles = {
  card: {
    width: 150,
    height: 150
  },
  media: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: 'cover',
  },
};

class App extends Component {
  
  render() {
    
    return (
      <div className="App">
        <AppBar position="static">
        <Toolbar>
          <Grid justify= "space-between"
          container 
          spacing={24}>
            <Grid item><Typography variant="title">Clicky Game!</Typography></Grid>
            <Grid item><Typography variant="title">World</Typography></Grid>
            <Grid item><Typography variant="title">Bottom text</Typography></Grid>
            </Grid>
          
          
          
        </Toolbar>
        </AppBar>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br />
        <Grid
        container
        spacing={24}>
         <Grid item  xs={3}><Card className={styles.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          width="150"
          className={styles.media}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
          styles=""
        />
      </CardActionArea>
    </Card></Grid>
         <Grid item  xs={3}><Card className={styles.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          width="150"
          className={styles.media}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
      </CardActionArea>
    </Card></Grid>
         <Grid item  xs={3}><Card className={styles.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          width="150"
          className={styles.media}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
      </CardActionArea>
    </Card></Grid>
         <Grid item  xs={3}><Card className={styles.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          width="150"
          className={styles.media}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
      </CardActionArea>
    </Card></Grid>
         <Grid item  xs={3}><Card className={styles.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          width="150"
          className={styles.media}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
      </CardActionArea>
    </Card></Grid>
         <Grid item  xs={3}><Card className={styles.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          width="150"
          className={styles.media}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
      </CardActionArea>
    </Card></Grid>
         <Grid item  xs={3}><Card className={styles.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          width="150"
          className={styles.media}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
      </CardActionArea>
    </Card></Grid>
         <Grid item  xs={3}><Card className={styles.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          width="150"
          className={styles.media}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
      </CardActionArea>
    </Card></Grid>
         <Grid item  xs={3}><Card className={styles.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          width="150"
          className={styles.media}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
      </CardActionArea>
    </Card></Grid>
         <Grid item  xs={3}><Card className={styles.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          width="150"
          className={styles.media}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
      </CardActionArea>
    </Card></Grid>
         <Grid item  xs={3}><Card className={styles.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          width="150"
          className={styles.media}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
      </CardActionArea>
    </Card></Grid>
         <Grid item  xs={3}><Card className={styles.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          width="150"
          className={styles.media}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
      </CardActionArea>
    </Card></Grid>
        
        </Grid>
      </div>
    );
  }
}

export default App;
