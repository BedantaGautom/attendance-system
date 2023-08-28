import React, { useState } from 'react';

const StudentAbsent = ({ students, onAbsentSubmit }) => {
  const [absentStudents, setAbsentStudents] = useState([]);

  const handleAbsentChange = (studentId, isAbsent) => {
    if (isAbsent) {
      setAbsentStudents([...absentStudents, studentId]);
    } else {
      setAbsentStudents(absentStudents.filter((id) => id !== studentId));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAbsentSubmit(absentStudents);
  };

  return (
    <div className="card">
      <h2>Mark Absent Students</h2>
      <form onSubmit={handleSubmit}>
        {students.map((student) => (
          <div key={student.id}>
            <label>
              <input
                type="checkbox"
                checked={absentStudents.includes(student.id)}
                onChange={(e) => handleAbsentChange(student.id, e.target.checked)}
              />
              {student.name}
            </label>
          </div>
        ))}
        <button type="submit" className="button secondary">
          Mark Absent
        </button>
      </form>
    </div>
  );
};

export default StudentAbsent;
