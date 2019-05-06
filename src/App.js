import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./Images.json";


let yourScore = 0;
let topScore = 0;
let clickMessage = "Click on a Pokémon to earn a point! The images will shuffle after each click. The goal is to reach a top score of 20 points by attempting to click on all Pokémon images only once.";

class App extends Component {
    
        state = {
        images,
        yourScore,
        topScore,
        clickMessage
    };

    setClicked = id => {

        // Make a copy of the state images array to work with
        const images = this.state.images;

        // Filter for the clicked match
        const clickMatch = images.filter(match => match.id === id);

        // If the matched image's clicked value is already true, 
        // do the game over actions
        if (clickMatch[0].clicked){

            console.log ("Your Score: " + yourScore);
            console.log ("Best Score: " + topScore);

            yourScore = 0;
            clickMessage = "You guessed incorrectly! Try again!"

            for (let i = 0 ; i < images.length ; i++){
                images[i].clicked = false;
            }

            this.setState({clickMessage});
            this.setState({ yourScore });
            this.setState({images});

        // Otherwise, if clicked = false, and the user hasn't finished
        } else if (yourScore < 11) {

            // Set its value to true
            clickMatch[0].clicked = true;

            // increment the appropriate counter
            yourScore++;
            
            clickMessage = "You guessed correctly! Keep guessing!";

            if (yourScore > topScore){
                topScore = yourScore;
                this.setState({ topScore });
            }

            // Shuffle the array to be rendered in a random order
            images.sort(function(a, b){return 0.5 - Math.random()});

            // Set this.state.images equal to the new images array
            this.setState({ images });
            this.setState({yourScore});
            this.setState({clickMessage});
        } else {

            // Set its value to true
            clickMatch[0].clicked = true;

            // restart the guess counter
            yourScore = 0;

            // Egg on the user to play again
            clickMessage = "Winner! Winner! Wanna Try again!";
            topScore = 20;
            this.setState({ topScore });
            
            for (let i = 0 ; i < images.length ; i++){
                images[i].clicked = false;
            }

            // Shuffle the array to be rendered in a random order
            images.sort(function(a, b){return 0.5 - Math.random()});

            // Set this.state.images equal to the new images array
            this.setState({ images });
            this.setState({yourScore});
            this.setState({clickMessage});

        }
    };

    render() {
        return (
            <Wrapper>
                <Title>
                  The Clicky Game
                  <div>            
                  <h3 className="scoreSummary card-header">
                      Your Score: {this.state.yourScore} 
                      <br />
                      Top Score: {this.state.topScore} 
                  </h3>
                  <br></br>
                  <h3 className="scoreSummary">
                      {this.state.clickMessage}
                  </h3>
                  </div>
                </Title>
                <div className="container">
                <div className="row">
                {this.state.images.map(match => (
                    <Card
                        setClicked={this.setClicked}
                        id={match.id}
                        key={match.id}
                        image={match.image}
                    />
                ))}
                </div>
                </div>

            </Wrapper>
        );
    }
}

export default App;