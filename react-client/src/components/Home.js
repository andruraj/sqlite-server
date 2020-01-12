import React from "react";
import PropTypes from "prop-types";
import { getProjects, addProject } from "../actions/projectActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Home = props => {
  React.useEffect(() => {
    props.getProjects();
  }, []);

  const [modal, setModal] = React.useState(false);
  const [name, setName] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [completed, setCompleted] = React.useState("");

  const projects =
    props.projects?.length > 0
      ? props.projects.map(proj => (
          <div
            className="card"
            key={proj.id}
            style={{
              margin: "20px 100px"
            }}
          >
            <Link to={`/projects/${proj.id}`}>
              <div className="card-header">{proj.name}</div>
            </Link>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>{proj.desc}</p>
                <footer className="blockquote-footer">
                  <cite title="Source Title">
                    {proj.completed ? "Complete" : "In Progress"}
                  </cite>
                </footer>
              </blockquote>
            </div>
          </div>
        ))
      : null;
  return (
    <div>
      <button
        className="btn btn-primary"
        style={{ margin: "20px 100px 0px 100px" }}
        onClick={() => setModal(true)}
      >
        Add
      </button>

      {/* <!-- The Modal --> */}
      <div
        id="myModal"
        class="modal"
        style={{
          display: modal ? "unset" : "none",
          position: "fixed",
          zIndex: "1",
          margin: "auto",
          height: "100%",
          width: "100%",
          overflow: "auto",
          backgroundColor: "rgb(0,0,0,0.5)",
          paddingTop: "200px"
        }}
      >
        {/* <!-- Modal content --> */}
        <div
          class="modal-content"
          style={{
            backgroundColor: "#fefefe",
            margin: "auto",
            padding: "20px",
            border: "1px solid #888",
            width: "50%"
          }}
        >
          <h3 style={{ textAlign: "center" }}>Add New Project</h3> <br />
          <div style={{ margin: "auto" }}>
            <table>
              <tbody>
                <tr>
                  <td>
                    <b>Project Name</b>
                  </td>
                  <td>
                    <input
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      style={{
                        border: "none",
                        width: "100%"
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Description</b>
                  </td>
                  <td>
                    <input
                      type="text"
                      value={desc}
                      onChange={e => setDesc(e.target.value)}
                      style={{
                        border: "none",
                        width: "100%"
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Status</b>
                  </td>
                  <td>
                    <input
                      type="text"
                      value={completed}
                      onChange={e => setCompleted(e.target.value)}
                      style={{
                        border: "none",
                        width: "100%"
                      }}
                    />
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
              <button
                className="btn btn-success"
                onClick={() => {
                  const pro = {
                    name,
                    desc,
                    completed
                  };
                  props.addProject(pro);
                  props.history.push("/");
                  setModal(false);
                }}
              >
                Add
              </button>{" "}
              <button
                className="btn btn-danger"
                onClick={() => setModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      {projects}
    </div>
  );
};

Home.propTypes = {
  projects: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  projects: state.projects.projects,
  errors: state.errors
});

export default connect(mapStateToProps, { getProjects, addProject })(Home);
