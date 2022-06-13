// TODO

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {value: '', itemList: []};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    let newItem = <li>{this.state.value}</li>;
    this.setState({
      value: '',
      itemList: [...this.state.itemList, newItem]
    });
  }

  render() {

    let itemAdder = (
      <form  onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <input type="submit" value="Add Item"/>
      </form>
    )

    return (
      <div id='app'>
        <h1 id='list'>Grocery List</h1>
        {itemAdder}
        <ul>
          {this.state.itemList}
        </ul>

      </div>
    );

  }

}

ReactDOM.render(<App />, document.getElementById('app'));