import "../styles/index.scss";
// import TodoItem from "./TodoItem";
// import ContactCard from "./ContactCard";
import Joke from "./Joke";

const App = () => {
  return (
    <div className="jokeContainer">
      <Joke
        question="What's the best thing about Switzerland?"
        punchLine="I don't know, but the flag is a big plus!"
      />
      <Joke
        question="Did you hear about the mathematician who's afraid of negative numbers?"
        punchLine="He'll stop at nothing to avoid them!"
      />
      <Joke
        question="Hear about the new restaurant called Karma?"
        punchLine="There’s no menu: You get what you deserve."
      />
      <Joke
        question="Did you hear about the actor who fell through the floorboards?"
        punchLine="He was just going through a stage."
      />
      <Joke
        question="Did you hear about the claustrophobic astronaut?"
        punchLine="He just needed a little space."
      />
      <Joke question="" punchLine="He just needed a little space." />
    </div>
  );
};

export default App;
