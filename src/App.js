import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {
  state = {
    friends: friends,
  };

  handleDelete = (id) => {
      const filteredFriends = this.state.friends.filter(f => f.id !== id);
    this.setState({ friends: filteredFriends});
  };
  render() {

  return (
    <Wrapper>
      <h1 className="title">Clicky Game</h1>
      {this.state.friends.map(f => (
      <FriendCard
        name={f.name}
        image={f.image}
        occupation={f.occupation}
        location={f.location}
        handleDelete={() => this.handleDelete(f.id)}
      />
      ))}
    </Wrapper>
  );
}
}
export default App;
