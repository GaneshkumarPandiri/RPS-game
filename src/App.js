import {Component} from 'react'

import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import ChoiceButtons from './components/ChoiceButtons/index'

import {
  MainContainer,
  ScoreContainer,
  Score,
  ButtonsList,
  RulesButton,
  ScorePara,
  ShowRulesImage,
  ResultCard,
  ChoiceImage,
  MainHeading,
  MainResultCard,
} from './styledComponents'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    data: 'rockButton',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    data: 'ScissorsButton',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    data: 'paperButton',
  },
]
class App extends Component {
  state = {
    score: 0,
    isGame: true,
    you: '',
    opponent: '',
    resultDeclare: '',
  }

  onSelectChoice = value => {
    const opponent = Math.ceil(Math.random() * choicesList.length)
    const opponentValue = choicesList[opponent - 1].id
    const result = opponentValue === value
    const opponentImage = choicesList[opponent - 1].imageUrl
    const yourObject = choicesList.filter(item => item.id === value)
    const yourImage = yourObject[0].imageUrl
    console.log(opponentValue)
    console.log(value)
    if (result) {
      this.setState(prevState => ({
        resultDeclare: 'IT IS DRAW',
        isGame: false,
        you: yourImage,
        opponent: opponentImage,
        score: prevState.score,
      }))
    } else if (value === 'PAPER') {
      if (opponentValue === 'ROCK') {
        this.setState(prevState => ({
          resultDeclare: 'YOU WON',
          isGame: false,
          you: yourImage,
          opponent: opponentImage,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          resultDeclare: 'YOU LOSE',
          isGame: false,
          you: yourImage,
          opponent: opponentImage,
          score: prevState.score - 1,
        }))
      }
    } else if (value === 'SCISSORS') {
      if (opponentValue === 'PAPER') {
        this.setState(prevState => ({
          resultDeclare: 'YOU WON',
          isGame: false,
          you: yourImage,
          opponent: opponentImage,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          resultDeclare: 'YOU LOSE',
          isGame: false,
          you: yourImage,
          opponent: opponentImage,
          score: prevState.score - 1,
        }))
      }
    } else if (value === 'ROCK') {
      if (opponentValue === 'SCISSORS') {
        this.setState(prevState => ({
          resultDeclare: 'YOU WON',
          isGame: false,
          you: yourImage,
          opponent: opponentImage,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          resultDeclare: 'YOU LOSE',
          isGame: false,
          you: yourImage,
          opponent: opponentImage,
          score: prevState.score - 1,
        }))
      }
    }
  }

  onPlayAgain = () => {
    this.setState({isGame: true})
  }

  render() {
    const {score, isGame, you, opponent, resultDeclare} = this.state
    console.log(isGame)

    return (
      <MainContainer>
        <MainHeading>Rock Paper Scissors</MainHeading>
        <ScoreContainer>
          <div>
            <p>ROCK</p>
            <p>PAPER</p>
            <p>SCISSORS</p>
          </div>
          <Score>
            <ScorePara>Score</ScorePara>
            <ScorePara>{score}</ScorePara>
          </Score>
        </ScoreContainer>
        {isGame ? (
          <ButtonsList>
            {choicesList.map(item => (
              <ChoiceButtons
                onSelectChoice={this.onSelectChoice}
                choiceItem={item}
                key={item.id}
              />
            ))}
          </ButtonsList>
        ) : (
          <MainResultCard>
            <ResultCard>
              <div>
                <p>YOU</p>
                <ChoiceImage src={you} alt="your choice" />
              </div>
              <div>
                <p>OPPONENT</p>
                <ChoiceImage src={opponent} alt="opponent choice" />
              </div>
            </ResultCard>
            <p>{resultDeclare}</p>
            <RulesButton type="button" onClick={this.onPlayAgain}>
              PLAY AGAIN
            </RulesButton>
          </MainResultCard>
        )}

        <div className="popup-container">
          <Popup
            modal
            trigger={<RulesButton type="button">Rules</RulesButton>}
            position="top left"
          >
            {close => (
              <>
                <ButtonsList>
                  <ShowRulesImage
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </ButtonsList>
                <button
                  type="button"
                  className="trigger-button"
                  onClick={() => close()}
                >
                  <RiCloseLine />
                </button>
              </>
            )}
          </Popup>
        </div>
      </MainContainer>
    )
  }
}

export default App
