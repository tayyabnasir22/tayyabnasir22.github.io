// Load Awards & Certifications section
fetch('data/projects.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('projectsContainer');
    container.innerHTML += data.map(d => `
        <div class="d-flex flex-column flex-md-row justify-content-between mb-2">
            <div class="flex-grow-1">
                <h3 class="mb-0"><a href="${d.url + d.details}">${d.name}</a></h3>
                <div class="subheading mb-2">${d.company}</div>
            </div>
            <div class="flex-shrink-0 mb-5"><span class="text-primary">${d.year}</span></div>
        </div><hr/>
    `).join('');
  })
  .catch(err => console.error('Error loading projects.json:', err));
