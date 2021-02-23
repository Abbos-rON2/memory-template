import React, { Fragment } from 'react';
import Card from './Card'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: this.shuffle(16),
      startTime: 3000, 
      moves: 0,
      score: 0,
      hidden: 16,
      pair: false,
      isMoving: false
    }
  }
  shuffle(l) { // l - количество блоков в игре
    let length = [];
    for (let k = 0; k < 2; k++) {
      for (let i = 0; i < l / 2; i++) {
        length.push(i)
      }
    }
    let arr = length.sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = {
        index: i,
        value: arr[i],
        isHidden: false
      }
    }

    return arr;
  }
  componentDidMount() {
    const arr = this.state.cards
    setTimeout(function () {
      for (let i = 0; i < arr.length; i++) {
        arr[i] = {
          index: i,
          value: arr[i].value,
          isHidden: true
        }
      }
      this.setState({cards: arr});
    }.bind(this), this.state.startTime);
  }

  handleClick(i) { // i - индекс кликнутого блока
    const cards = this.state.cards;
    const pair = this.state.pair
    if (this.state.cards[i].isHidden && !this.state.isMoving) {
      cards[i].isHidden = false;
      if (this.state.pair && this.state.pair.value === this.state.cards[i].value) {
        this.setState({
          cards: cards,
          score: this.state.score + 1,
          pair: false,
          hidden: this.state.hidden - 2,
          moves: this.state.moves + 1
        });
      } else if (this.state.pair) {
        cards[this.state.pair.index].isHidden = false;
        cards[i].isHidden = false;
        this.setState({cards: cards, isMoving: true});
        setTimeout(function () {
          cards[pair.index].isHidden = true;
          cards[i].isHidden = true;
          this.setState({
            cards: cards,
            pair: false,
            isMoving: false,
            moves: this.state.moves + 1
          })
        }.bind(this), 1500);
      } else {
        this.setState({cards: cards, pair: cards[i]});
      }
    }
  }

  render() {
    return (
      <Fragment>
        <div className="Info">
        <div className="hidden">Hidden: {this.state.hidden}</div>
          <div className="score">Score: {this.state.score}</div>
          <div className="moves">Moves: {this.state.moves}</div>
        </div>
        <div className="Game">
        {this.state.hidden !== 0 ? this.state.cards.map(({index, value, isHidden}) => <Card key={index} index={index} value={value} isHidden={isHidden} update={this.handleClick.bind(this)}/>) : 'Game Over'}
        </div>
      </Fragment>
    );
  }

}

export default Game;
