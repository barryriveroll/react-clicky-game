import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Score from "./components/Score";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./cards.json";

class App extends Component {
  state = {
    cards,
    score: 0,
    highScore: 0
  };

  addToScore = id => {
    this.state.cards.map(card => {
      if (card.id === id) card.clicked = true;
    });

    this.setState({
      cards: this.shuffle(this.state.cards),
      score: this.state.score + 1,
      highScore:
        this.state.score + 1 > this.state.highScore
          ? this.state.score + 1
          : this.state.highScore
    });
  };

  shuffle = array => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  resetGame = () => {
    this.state.cards.forEach(card => (card.clicked = false));
    this.setState({
      cards: this.shuffle(this.state.cards),
      score: 0
    });
  };

  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        <Score score={this.state.score} highScore={this.state.highScore} />
        {this.state.cards.map(card => (
          <CharacterCard
            key={card.id}
            addToScore={this.addToScore}
            resetGame={this.resetGame}
            clicked={card.clicked}
            id={card.id}
            name={card.name}
            image={card.image}
            occupation={card.occupation}
            location={card.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
