document.addEventListener('DOMContentLoaded', function() {
    const visitorForm = document.getElementById('visitorForm');
    const logList = document.getElementById('logList');
  
    visitorForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const visitorName = document.getElementById('visitorName').value;
      const visitPurpose = document.getElementById('visitPurpose').value;
      
      const currentTime = new Date();
      const visitTime = currentTime.toLocaleTimeString();
      
      const logItem = document.createElement('li');
      logItem.classList.add('logItem');
      logItem.innerHTML = `<strong>${visitorName}</strong> - ${visitPurpose} (Visited at ${visitTime})`;
      
      logList.appendChild(logItem);
      
      // Reset form fields after submission
      visitorForm.reset();
    });
  });