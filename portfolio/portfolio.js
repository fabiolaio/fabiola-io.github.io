document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-button');
    const projects = document.querySelectorAll('.project');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
  
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active-filter'));
  
        // Add active class to the clicked button
        button.classList.add('active-filter');
  
        // Get the type
        const type = button.getAttribute('data-type');
  
        // Show/Hide projects
        projects.forEach(project => {
          if (type === 'all' || project.classList.contains(type)) {
            project.style.display = 'block';
          } else {
            project.style.display = 'none';
          }
        });
      });
    });
  });
  