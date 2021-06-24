import React from 'react';

class SearchBar extends React.Component {
  // onInputChange(event) {
  //   // console.log(event.target.value);
  //   const search = event.target.value;
  // }
  state = { term: "" }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="image">Image Search</label>
            <input
              type="text"
              value={this.state.term}
              id="image"
              onChange={(event) => this.setState({ term: event.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
