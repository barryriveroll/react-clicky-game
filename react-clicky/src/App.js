import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Score from "./components/Score";
import Wrapper from "./components/Wrapper";
import CardWrapper from "./components/CardWrapper";
import Title from "./components/Title";
import cards from "./cards.json";

class App extends Component {
  state = {
    cards,
    score: 0,
    highScore: 0,
    restart: false
  };

  addToScore = id => {
    this.displayGameText("correct");
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

  displayGameText(id) {
    clearInterval();
    document.getElementById(id).style.filter = "opacity(1)";
    setTimeout(() => {
      document.getElementById(id).style.filter = "opacity(0)";
    }, 1000);

    if (id === "incorrect") {
      let x = 10;

      let interval = setInterval(function() {
        document.getElementById("card-wrapper").style.left = x + "px";
        x *= -1;
        x--;
        if (x < 0) {
          clearInterval(interval);
        }
      }, 100);
    }
  }

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

  shuffleCardAnimation = () => {
    //
  };

  resetGame = () => {
    this.displayGameText("incorrect");
    this.state.cards.forEach(card => (card.clicked = false));
    this.setState({
      cards: this.shuffle(this.state.cards),
      score: 0,
      restart: true
    });
  };

  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        <Score score={this.state.score} highScore={this.state.highScore} />
        <CardWrapper>
          {this.state.cards.map(card => (
            <CharacterCard
              bg={Math.floor(Math.random() * 4) + 1}
              shuffle={this.state.restart}
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
        </CardWrapper>
      </Wrapper>
    );
  }
}

export default App;
