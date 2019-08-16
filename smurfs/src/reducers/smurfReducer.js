import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from '../actions/getData';

const initialState = {
  smurfs: [
    {
      name: '',
      age: 0,
      height: ''
    }
  ],
  isLoading: false,

}

export const smurfReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_DATA_START:
    return {
      ...state,
      isLoading: true,
      error: ''
    };
    case FETCH_DATA_SUCCESS:
    return {
      ...state,
      isLoading: false,
      smurfs: action.payload,
      error: ''
    }
    default:
    return state
  }
}
