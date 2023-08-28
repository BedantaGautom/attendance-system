import React from 'react';

const AttendanceRecords = ({ records }) => {
  return (
    <div className="attendance-records">
      <h2>Attendance Records</h2>
      {records.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Present Students</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => (
              <tr key={index}>
                <td>{record.date}</td>
                <td>{record.presentStudents.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No attendance records available.</p>
      )}
    </div>
  );
};

export default AttendanceRecords;
