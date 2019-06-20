import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { fetchData, addCharacters, failure, success } from "../actions"

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return (
        <div className="CharactersList_wrapper">
          Data is being fetched, please wait...
        </div>
      );
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

function mapStateToProps(state) {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
    error: state.charsReducer.error
  };
}

export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
    /* action creators go here */
  {
    fetchData, addCharacters, failure, success
  })
  (CharacterListView);
