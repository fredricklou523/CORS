class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: "DIFFERENT ORIGIN",
    };
  }

  componentDidMount() {
    $.get("http://localhost:1337/getTime", (data) => {
      this.setState({
        currentTime: data,
      });
    });
  }

  render() {
    return (
      <div>
        <div>origin of request -> {window.location.href}</div>
        <div>API origin -> http://localhost:1337/getTime </div>
        {this.state.currentTime}
      </div>
    );
  }
}
export default App;
