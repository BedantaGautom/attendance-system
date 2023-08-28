import React from 'react';

const Student = ({ student, onMarkPresent, onMarkAbsent }) => {
  return (
    <div className="student">
      <p>{student.name}</p>
      <div className="button-group">
        {/* <button className="button present" onClick={() => onMarkPresent(student.id)}>
          Present
        </button>
        <button className="button absent" onClick={() => onMarkAbsent(student.id)}>
          Absent
        </button> */}
      </div>
    </div>
  );
};

const StudentList = ({ students, onMarkPresent, onMarkAbsent }) => {
  return (
    <div className="student-list">
      <h2>Student List</h2>
      {students.map((student) => (
        <Student
          key={student.id}
          student={student}
          onMarkPresent={onMarkPresent}
          onMarkAbsent={onMarkAbsent}
        />
      ))}
    </div>
  );
};

export default StudentList;
