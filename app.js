

function toggleSchedule() {
    const rows = document.querySelectorAll('table tr');
    for (let i = 0; i < rows.length; i++) {
      if (rows[i].classList.contains('light')) {
        rows[i].classList.remove('light');
        rows[i].classList.add('dark');
      } else {
        rows[i].classList.remove('dark');
        rows[i].classList.add('light');
      }
    }
  }
  
  