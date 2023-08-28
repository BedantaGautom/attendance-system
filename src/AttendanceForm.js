import React, { useState } from 'react';

const AttendanceForm = ({ students, onAttendanceSubmit }) => {
  const [attendance, setAttendance] = useState({});

  const handleAttendanceChange = (studentId, isPresent) => {
    setAttendance((prevAttendance) => ({
      ...prevAttendance,
      [studentId]: isPresent,
    }));
  };

  return (
    <div className="attendance-form">
      <h2>Take Attendance</h2>
      <form>
        {students.map((student) => (
          <div key={student.id} className="attendance-item">
            <label className={`attendance-label ${attendance[student.id] ? 'present' : 'absent'}`}>
              <input
                type="radio"
                name={`attendance-${student.id}`}
                value="present"
                checked={attendance[student.id] === true}
                onChange={() => handleAttendanceChange(student.id, true)}
              />
              Present
            </label>
            <label className={`attendance-label ${attendance[student.id] === false ? 'absent' : 'present'}`}>
              <input
                type="radio"
                name={`attendance-${student.id}`}
                value="absent"
                checked={attendance[student.id] === false}
                onChange={() => handleAttendanceChange(student.id, false)}
              />
              Absent
            </label>
            <span className="student-name">{student.name}</span>
          </div>
        ))}
        <button
          type="button"
          className="button primary"
          onClick={() => onAttendanceSubmit(attendance)}
        >
          Submit Attendance
        </button>
      </form>
    </div>
  );
};

export default AttendanceForm;
