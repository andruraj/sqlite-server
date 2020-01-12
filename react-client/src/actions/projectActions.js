import axios from "axios";

export const addProject = project => dispatch => {
  dispatch(clearErrors());
  axios
    .post("/add", project)
    .then(res =>
      dispatch({
        type: "ADD_PROJECT",
        payload: project
      })
    )
    .catch(err =>
      dispatch({
        type: "GET_ERRORS",
        payload: err.response.data
      })
    );
  dispatch(getProjects());
};

export const updateProject = project => dispatch => {
  axios
    .post("/update", project)
    .then(res =>
      dispatch({
        type: "UPDATE_PROJECT",
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: "GET_ERRORS",
        payload: err.response.data
      })
    );
};

export const deleteProject = id => dispatch => {
  axios
    .delete(`/delete/${id}`)
    .then(res =>
      dispatch({
        type: "DELETE_PROJECT",
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: "GET_ERRORS",
        payload: err.response.data
      })
    );
};

export const getProjects = () => dispatch => {
  dispatch(setProjectLoading());
  axios
    .get("/projects/all")
    .then(res =>
      dispatch({
        type: "GET_PROJECTS",
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: "GET_PROJECTS",
        payload: null
      })
    );
};

export const getProject = id => dispatch => {
  dispatch(setProjectLoading());
  axios
    .get(`/projects/${id}`)
    .then(res =>
      dispatch({
        type: "GET_PROJECT",
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: "GET_PROJECT",
        payload: null
      })
    );
};

export const setProjectLoading = () => {
  return {
    type: "PROJECT_LOADING"
  };
};

export const clearErrors = () => {
  return {
    type: "CLEAR_ERRORS"
  };
};
