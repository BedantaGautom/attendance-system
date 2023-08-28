import React, { useState } from 'react';
import Header from './Header';
import StudentList from './StudentList';
import AttendanceForm from './AttendanceForm';
import AttendanceRecords from './AttendanceRecords';
import './App.css';

function App() {
  const [students] = useState([
    { id: 1, name: 'Student 1' },
    { id: 2, name: 'Student 2' },
    // Add more students
  ]);

  const [attendanceRecords, setAttendanceRecords] = useState([]);

  const handleAttendanceSubmit = (attendance) => {
    const presentStudents = students.filter((student) => attendance[student.id] === true);
    if (presentStudents.length > 0) {
      const newRecord = {
        date: new Date().toLocaleDateString(),
        presentStudents: presentStudents.map((student) => student.name),
      };
      setAttendanceRecords([...attendanceRecords, newRecord]);
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="content">
        <StudentList students={students} />
        <AttendanceForm students={students} onAttendanceSubmit={handleAttendanceSubmit} />
        <AttendanceRecords records={attendanceRecords} />
      </div>
    </div>
  );
}

export default App;
