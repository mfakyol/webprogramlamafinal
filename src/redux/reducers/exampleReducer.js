//ActionTypes
const UPDATE_EXAMPLE = 'UPDATE_EXAMPLE';


//Reducer
export default function exampleReducer(state = "", action) {
  switch (action.type) {
    case UPDATE_EXAMPLE:
      return action.payload.example;
    default:
      return state;
  }
}


//Actions
export function updateExample(example) {
  return {
    type: UPDATE_EXAMPLE,
    payload: {
      example,
    },
  };
}

export function getExample(data) {
  return (dispatch) => {
    dispatch(updateExample(data));
  };
}