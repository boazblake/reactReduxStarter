import * as types from '../actions/actionTypes';


export default function courseReducer(state = [], action) {
  switch(action.types) {
    case types.CREATE_COURSE: 
      return [...state,
      Object.assign({}, action.course)
      ];

    default:
      return state;
  }
}