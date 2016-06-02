import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: {title: ''}
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(evt) {
    const course = this.state.course;
    course.title= evt.target.value;
    this.setState({course});
  }

  onClickSave() {
    this.props.dispatch(courseActions.createCourse(this.state.course));
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }


  render(){
    return (
      <div>
        <h1>Courses Page</h1>
        <h2>Add Course</h2>
        {this.props.course.map(this.courseRow)}
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />

        <input
          type="submit"
          onClick={this.onClickSave}
          value="save" />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  course: PropTypes.array.isRequired
};


function mapStateToProps(state, ownProps) {
  return {
    course:state.course
  };
}

export default connect(mapStateToProps)(CoursesPage);