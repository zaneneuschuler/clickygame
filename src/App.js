import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from './components/card';
import cards from "./cards.json";
var shuffle = require('shuffle-array');

class App extends Component {




    state = {
      score: 0,
      topScore: 0,
      cards,
      beenClicked: [],
      greetingMessage: "Clicky Game!"
    }
  handleScore = (id) => {
    if(this.state.beenClicked.includes(id)){

      this.setState({greetingMessage: "You lose! Click again to try again.",
      beenClicked: [],
      score: 0
    });

    }else{
      this.setState({greetingMessage: "Correct guess!",
    beenClicked: [...this.state.beenClicked, id],
    score: this.state.score + 1
    }, () => this.handleTopScore());
    }
    this.setState({cards: shuffle(this.state.cards)});
  };

  handleTopScore = () => {
    if (this.state.score > this.state.topScore) {
      this.setState({
        topScore: this.state.score
      });
    }
  }
  


  render() {
    
    return (
      <div className="App">
        <AppBar position="static">
        <Toolbar>
          <Grid justify= "space-between"
          container 
          spacing={24}>
            <Grid item><Typography variant="title">Current Score: {this.state.score}</Typography></Grid>
             <Grid item><Typography variant="title">{this.state.greetingMessage}</Typography></Grid>
            <Grid item><Typography variant="title">Top Score: {this.state.topScore}</Typography></Grid>
            </Grid>
          
          
          
        </Toolbar>
        </AppBar>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Click an image to raise your score! But be careful, if you click it again... you lose!</h1>
        </header>
        <br />
        <div className="container">

         <div className="row">
                 {this.state.cards.map(card => (
          <Card 
          image= {card.image}
          onClick={this.handleScore}
          id={card.id}
          />
        ))}
          
         </div>
        </div>
      
      </div>
    );
  }
}

export default App;
