import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getProject,
  deleteProject,
  updateProject
} from "../actions/projectActions";
import { withRouter } from "react-router-dom";

const Project = props => {
  React.useEffect(() => {
    props.getProject(props.match.params.id);
  }, []);

  const [edit, setEdit] = React.useState(false);
  const [name, setName] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [completed, setCompleted] = React.useState("");

  const project =
    props.project?.length > 0
      ? props.project.map(proj => (
          <div
            key={proj.id}
            style={{
              margin: 0,
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            }}
          >
            <table>
              <tbody>
                <tr>
                  <td style={{ width: "25%" }}>
                    <b>Project Name</b>
                  </td>
                  <td style={{ width: "75%" }}>
                    {edit ? (
                      <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        style={{
                          border: "none",
                          width: "100%"
                        }}
                      />
                    ) : (
                      proj.name
                    )}
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Description</b>
                  </td>
                  <td>
                    {edit ? (
                      <input
                        type="text"
                        value={desc}
                        onChange={e => setDesc(e.target.value)}
                        style={{
                          border: "none",
                          width: "100%"
                        }}
                      />
                    ) : (
                      proj.desc
                    )}
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Status</b>
                  </td>
                  <td>
                    {edit ? (
                      <input
                        type="text"
                        value={completed}
                        onChange={e => setCompleted(e.target.value)}
                        style={{
                          border: "none",
                          width: "100%"
                        }}
                      />
                    ) : proj.completed ? (
                      "Completed"
                    ) : (
                      "In Progress"
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <div
              style={{
                textAlign: "center"
              }}
            >
              {edit ? (
                <button
                  className="btn btn-success"
                  onClick={() => {
                    setEdit(false);
                    const pro = {
                      id: proj.id,
                      name,
                      desc,
                      completed
                    };
                    props.updateProject(pro);
                    props.history.push("/");
                  }}
                >
                  Save
                </button>
              ) : (
                <button
                  className="btn btn-success"
                  onClick={() => {
                    setName(proj.name);
                    setDesc(proj.desc);
                    setCompleted(proj.completed);
                    setEdit(true);
                  }}
                >
                  Edit
                </button>
              )}{" "}
              <button
                className="btn btn-danger"
                onClick={e => {
                  e.preventDefault();
                  props.deleteProject(proj.id);
                  props.history.push("/");
                }}
              >
                Delete
              </button>{" "}
              {edit ? (
                <button
                  className="btn btn-warning"
                  onClick={() => setEdit(false)}
                >
                  Cancel
                </button>
              ) : null}
            </div>
          </div>
        ))
      : null;
  console.log(props?.project[0]?.completed);
  return <div style={{ height: "100%" }}>{project}</div>;
};

Project.propTypes = {
  project: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  project: state.projects.project
});

export default connect(mapStateToProps, {
  getProject,
  deleteProject,
  updateProject
})(withRouter(Project));
