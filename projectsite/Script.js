function filterProjects(category) {
    const projects = document.querySelectorAll('.project');
    
    projects.forEach(project => {
      if (category === 'all') {
        project.style.display = 'block';
      } 
      else {
        project.style.display = project.getAttribute('data-category') === category ? 'block' : 'none';
      }
    });
  }