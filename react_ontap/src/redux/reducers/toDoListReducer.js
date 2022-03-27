const stateDefaule = {
  arrTask: [{taskName:"học code",status:false}],
};

export const toDoListReducer = (state = stateDefaule, action) => {
  switch (action.type) {
      case 'GET_ALL_TASK':
          state.arrTask=action.arrTask;
          return {...state}
    default:
      return { ...state };
  }
};
