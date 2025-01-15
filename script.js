// script.js

document.getElementById('attendanceForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting the default way

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = new Date().toLocaleTimeString(); // Current time

    // Save attendance to local storage
    const attendanceRecord = { name, date, time };
    let attendanceList = JSON.parse(localStorage.getItem('attendanceList')) || [];
    attendanceList.push(attendanceRecord);
    localStorage.setItem('attendanceList', JSON.stringify(attendanceList));

    // Clear input fields
    document.getElementById('attendanceForm').reset();

    // Update the attendance table
    loadAttendanceRecords();
});

// Function to load attendance records from localStorage and display them in the table
function loadAttendanceRecords() {
    const attendanceList = JSON.parse(localStorage.getItem('attendanceList')) || [];
    const attendanceBody = document.getElementById('attendanceBody');

    // Clear previous table content
    attendanceBody.innerHTML = '';

    // Populate table with attendance records
    attendanceList.forEach(record => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = record.name;
        row.appendChild(nameCell);

        const dateCell = document.createElement('td');
        dateCell.textContent = record.date;
        row.appendChild(dateCell);

        const timeCell = document.createElement('td');
        timeCell.textContent = record.time;
        row.appendChild(timeCell);

        attendanceBody.appendChild(row);
    });
}

// Initial load of attendance records when the page is loaded
window.onload = loadAttendanceRecords;
