const initState = {
  learnings: []
};

const timelineReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_LEARNINGS":
      return { ...state, learnings: action.learnings };
    case "ADD_LEARNING":
      return state;
    default:
      return state;
  }
};

export default timelineReducer;
