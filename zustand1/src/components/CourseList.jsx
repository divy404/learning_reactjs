import React from 'react';
import useCourseStore from '../app/courseStore';

const CourseList = () => {
  const courses = useCourseStore((state) => state.courses);
  const removeCourse = useCourseStore((state) => state.removeCourse);
  const toggleCourseStatus = useCourseStore((state) => state.toggleCourseStatus);

  return (
    <ul>
      {courses.map((course) => (
        <React.Fragment key={course.id}>
          <li
            className="course-item"
            style={{ backgroundColor: course.completed ? "#00FF0044" : "white" }}
          >
            <span className="course-item-col-1">
              <input
                checked={course.completed}
                type="checkbox"
                onChange={() => toggleCourseStatus(course.id)}
              />
            </span>
            <span>{course.title}</span>
            <button
              onClick={() => removeCourse(course.id)}
              className="delete btn"
            >
              Delete
            </button>
          </li>
        </React.Fragment>
      ))}
    </ul>
  );
};

export default CourseList;

