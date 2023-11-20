//your JS code here. If required.
 function updateTimer() {
      var timerElement = document.getElementById('timer');
      var currentDateTime = new Date();
      
      // Format the date and time
      var dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      var timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
      var formattedDate = currentDateTime.toLocaleDateString('en-US', dateOptions);
      var formattedTime = currentDateTime.toLocaleTimeString('en-US', timeOptions);
      
      // Display the formatted date and time
      timerElement.textContent = formattedDate + ' ' + formattedTime;
    }

    // Update the timer every second
    setInterval(updateTimer, 1000);

    // Initial update
    updateTimer();