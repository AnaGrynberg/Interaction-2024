window.onload = function() {
    const calendarContainer = document.getElementById('calendar-container');
    const monthsSlider = document.getElementById('monthsSlider');
    const daysSlider = document.getElementById('daysSlider');
    const calendar = document.getElementById('calendar');
    
    // Generates the month buttons
    function generateMonths() {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      months.forEach(month => {
        let button = document.createElement('button');
        button.textContent = month;
        button.className = 'month-button';
        // Add event listeners if needed
        // button.addEventListener('click', function() { /* Your code here */ });
        monthsSlider.appendChild(button);
      });
    }
    
    // Generates the day buttons
    function generateDays() {
      const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      days.forEach(day => {
        let button = document.createElement('button');
        button.textContent = day;
        button.className = 'day-button';
        // Add event listeners if needed
        // button.addEventListener('click', function() { /* Your code here */ });
        daysSlider.appendChild(button);
      });
    }
    
    // Generates the calendar grid
    function generateCalendar() {
      for (let i = 0; i < 7; i++) { // 7 rows for weeks
        let row = calendar.insertRow();
        for (let j = 0; j < 12; j++) { // 12 months
          let cell = row.insertCell();
          // You can set attributes or innerHTML of the cell if needed
        }
      }
    }
    
    // Add scroll event listeners to sliders if needed
    function setupSliders() {
      // Scroll to current month in months slider
      const date = new Date();
      const currentMonthIndex = date.getMonth();
      const monthButtons = monthsSlider.getElementsByTagName('button');
      if (monthButtons[currentMonthIndex]) {
        const leftPosition = monthButtons[currentMonthIndex].offsetLeft;
        monthsSlider.scrollLeft = leftPosition - monthsSlider.offsetWidth / 2 + monthButtons[currentMonthIndex].offsetWidth / 2;
      }
      
      // Scroll to current day in days slider
      const currentDayIndex = date.getDay() - 1; // Adjust for 0 index
      const dayButtons = daysSlider.getElementsByTagName('button');
      if (dayButtons[currentDayIndex]) {
        const topPosition = dayButtons[currentDayIndex].offsetTop;
        daysSlider.scrollTop = topPosition - daysSlider.offsetHeight / 2 + dayButtons[currentDayIndex].offsetHeight / 2;
      }
      
      // Here you can add additional event listeners for interactivity
      // For example, you could update the calendar based on the selected month/day
    }
  
    generateMonths();
    generateDays();
    generateCalendar();
    setupSliders();
  };
  