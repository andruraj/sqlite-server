const initState = {
  projects: [],
  project: [],
  loading: false
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      return {
        ...state,
        projects: [action.payload, ...state.projects],
        loading: true
      };
    case "GET_PROJECTS":
      return {
        ...state,
        projects: action.payload,
        loading: false
      };
    case "GET_PROJECT":
      return {
        ...state,
        project: action.payload,
        loading: false
      };
    case "UPDATE_PROJECT":
      return {
        ...state,
        projects: state.projects.map(project => {
          if (project.id === action.payload.id) {
            project = action.payload;
          }
          return project;
        }),
        loading: false
      };
    case "DELETE_PROJECT":
      return {
        ...state,
        projects: state.projects.filter(
          project => project._id !== action.payload
        ),
        loading: false
      };
    case "PROJECT_LOADING":
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default projectReducer;
