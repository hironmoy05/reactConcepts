function Joke(props) {
  console.log(props);

  return (
    <div className="jokes-card">
      <h1
        style={{
          display: props.question ? "block" : "none",
        }}
      >
        Question: {props.question}
      </h1>
      <h3
        style={{
          color: !props.question && "#888888",
          borderBottom: "1px solid rgba(0, 0, 0, .1)",
          paddingBottom: "2rem",
        }}
      >
        Answer: {props.punchLine}
      </h3>
    </div>
  );
}

export default Joke;
