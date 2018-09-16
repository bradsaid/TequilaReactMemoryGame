import React, { Component } from "react";
import TequilaCard from "./components/TequilaCard";
import Wrapper from "./components/Wrapper";
import Tequilas from "./tequila.json";
import "./App.css";
import Jumbotron from "./components/Style/Jumbotron.js";

class App extends Component {
  state = {
    tequilas : Tequilas,
    unselected : Tequilas,
    score: 0,
    master: 0
  };

  removeTequila = id => {
    const tequilas = this.state.unselected.filter(tequila => tequila.id !== id);  // new array minus selected
    this.setState({ unselected: tequilas });  // update array state with new array
    
    let tequila = this.state.unselected.find(tequila => tequila.id === id)   // get id of selected
    let x = this.state.unselected.includes(tequila)   // check if tequila is in unselected, if false, then game over!
    if (!x) { 
      this.setState({ 
        score: 0,
        tequilas : Tequilas,
        unselected : Tequilas  
      })
    } else {
      this.setState({ 
        score: this.state.score +=1, 
        master: this.state.score > this.state.master ? this.state.score : this.state.master 
      })
    }
    this.state.tequilas.sort(() => .5 - Math.random())
    this.state.tequilas.sort(() => .5 - Math.random())
  }



  render() { 
    return (
      <div className="container mw-100">
      <Jumbotron
        score={this.state.score}
        master={this.state.master}
      />
      <Wrapper> 
        
        {this.state.tequilas.map(tequila => (
          <TequilaCard
            removeTequila={this.removeTequila}
            id={tequila.id}
            key={tequila.id}
            image={tequila.image}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
