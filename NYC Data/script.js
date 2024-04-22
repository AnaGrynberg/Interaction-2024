window.onload = function() {
  const calendarContainer = document.getElementById('calendar-container');
  const monthsSlider = document.getElementById('monthsSlider');
  const daysSlider = document.getElementById('daysSlider');
  const calendar = document.getElementById('calendar');

  // Function to clear highlights from the calendar
  function clearHighlights() {
      const cells = calendar.getElementsByTagName('td');
      for (let cell of cells) {
          cell.style.backgroundColor = ''; // Clear background color
      }
  }

  // Generates the month buttons and attaches event listeners
  function generateMonths() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    months.forEach((month, index) => {
      let button = document.createElement('button');
      button.textContent = month;
      button.className = 'month-button';
      button.addEventListener('click', function() {
          clearHighlights(); // Clear previous highlights
          // Highlight the column for the month
          const allRows = calendar.getElementsByTagName('tr');
          allRows.forEach(row => {
              if (row.cells[index]) {
                  row.cells[index].style.backgroundColor = 'yellow'; // Highlight color
              }
          });
      });
      monthsSlider.appendChild(button);
    });
  }

  // Generates the day buttons and attaches event listeners
  function generateDays() {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    days.forEach((day, index) => {
      let button = document.createElement('button');
      button.textContent = day;
      button.className = 'day-button';
      button.addEventListener('click', function() {
          clearHighlights(); // Clear previous highlights
          // Highlight all cells in the day column
          const allRows = calendar.getElementsByTagName('tr');
          allRows.forEach(row => {
              if (row.cells[index]) {
                  row.cells[index].style.backgroundColor = 'yellow'; // Highlight color
              }
          });
      });
      daysSlider.appendChild(button);
    });
  }

  // Generates the calendar grid
  function generateCalendar() {
    for (let i = 0; i < 7; i++) { // 7 rows for weeks
      let row = calendar.insertRow();
      for (let j = 0; j < 12; j++) { // 12 months
        let cell = row.insertCell();
        cell.innerHTML = i * 12 + j + 1; // Example content, adjust as necessary
      }
    }
  }

  generateMonths();
  generateDays();
  generateCalendar();
};
