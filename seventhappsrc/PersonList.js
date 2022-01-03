import { Component } from "react";

import { connect } from "react-redux";
class PersonList extends Component {
  state = {
    selectObject: null,
  };

  onEditClickHandler = (person) => {
    console.log("Edit", person);
    this.setState({ selectObject: person });
  };

  onValueChangeHandler = (event) => {
    const { value, name } = event.target;
    this.setState({
      selectObject: { ...this.state.selectObject, [name]: value },
    });
  };

  onResetClickHandler = () => {
    this.setState({ selectObject: null });
  };

  render() {
    console.log(this.props.personList);
    return (
      <>
        <h1>PersonList</h1>
        <table className={"table"}>
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Name</th>
              <th>Age</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {this.props.personList.map((person, index) => {
              return (
                <tr key={person.id}>
                  <td>{person.id}</td>

                  <td>
                    {this.state.selectObject &&
                    this.state.selectObject.id === person.id ? (
                      <input
                        name="name"
                        value={this.state.selectObject.name}
                        onChange={this.onValueChangeHandler}
                      />
                    ) : (
                      person.name
                    )}
                  </td>
                  <td>
                    {this.state.selectObject &&
                    this.state.selectObject.id === person.id ? (
                      <input
                        name="age"
                        value={this.state.selectObject.age}
                        onChange={this.onValueChangeHandler}
                      />
                    ) : (
                      person.age
                    )}
                  </td>
                  <td>
                    {this.state.selectObject &&
                    this.state.selectObject.id === person.id ? (
                      <>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            this.props.updatePerson({
                              ...this.state.selectObject,
                            });
                            this.onResetClickHandler();
                          }}
                        >
                          Update
                        </button>
                        &nbsp; &nbsp;
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            this.onResetClickHandler();
                          }}
                        >
                          Reset
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            this.props.deletePersonByIndex(index);
                          }}
                        >
                          Delete
                        </button>
                        &nbsp; &nbsp;
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            this.onEditClickHandler(person);
                          }}
                        >
                          Edit
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    personList: state.personList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePersonByIndex: (index) =>
      dispatch({ type: "PERSON_DELETE", payload: index }),
    updatePerson: (person) =>
      dispatch({ type: "PERSON_UPDATE", payload: person }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonList);
