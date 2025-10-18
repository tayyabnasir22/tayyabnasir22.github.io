// Load Projects section
fetch('data/project-tiles.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('projectsContent');
    
    // Split into rows of 3 buttons
    for(let i = 0; i < data.projects.length; i += 3) {
      const rowProjects = data.projects.slice(i, i + 3);
      const row = document.createElement('div');
      row.className = 'row gx-4 gx-lg-5 mb-1';
      
      const btnGroup = document.createElement('div');
      btnGroup.className = 'btn-group';
      
      rowProjects.forEach(proj => {
        const a = document.createElement('a');
        a.href = `#${proj.anchor}`;
        a.className = `btn btn-sm btn-${proj.style} btn-outline-dark`;
        a.textContent = proj.name;
        btnGroup.appendChild(a);
      });
      
      row.appendChild(btnGroup);
      container.appendChild(row);
    }
  })
  .catch(err => console.error('Error loading projects.json:', err));
