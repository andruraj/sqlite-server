import React from "react";
import PropTypes from "prop-types";
import { getProjects } from "../actions/projectActions";
import { connect } from "react-redux";

const Home = props => {
  React.useEffect(() => {
    props.getProjects();
  }, []);
  const projects =
    props.projects?.projects?.length > 0
      ? props.projects.projects.map(proj => (
          <div
            className="card"
            key={proj.id}
            style={{
              margin: "20px 100px"
            }}
          >
            <div className="card-header">{proj.name}</div>
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
  console.log(props);
  return <div>{projects}</div>;
};

Home.propTypes = {
  projects: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  projects: state.projects,
  errors: state.errors
});

export default connect(mapStateToProps, { getProjects })(Home);
