import React from 'react';
import Smurf from './SingleSmurf';
import { connect } from 'react-redux';
import { getData } from '../actions/getData';

const SmurfMap = props => {
  return (
    <div className="allSmurfs">
      {props.smurfs.length > 0 && props.smurfs.map(smurf => <Smurf char={smurf}/>)}
      <button onClick={props.getData}>Get Data</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, {getData})(SmurfMap);
