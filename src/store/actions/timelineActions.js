export const fetchLearnings = () => {
  const getURL =
    "https://nc6ezrmcce.execute-api.us-east-2.amazonaws.com/prod/get-timeline";

  return dispatch =>
    fetch(getURL)
      .then(res => res.json())
      .then(response => {
        dispatch({
          type: "FETCH_LEARNINGS",
          learnings: response
        });
      })
      .catch(error => {
        dispatch({
          type: "FETCH_LEARNINGS_ERROR",
          error
        });
      });
};

export const addLearning = learning => {
  const postURL =
    "https://nc6ezrmcce.execute-api.us-east-2.amazonaws.com/prod/add-timeline";

  return dispatch => {
    fetch(postURL, {
      method: "POST",
      body: JSON.stringify(learning),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => {
        dispatch({
          type: "ADD_LEARNING",
          learnings: response
        });
      })
      .catch(error => {
        dispatch({
          type: "ADD_LEARNING_ERROR",
          error
        });
      });
  };
};
