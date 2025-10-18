// Load Research section
fetch('data/publications.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('researchContent');
    container.innerHTML += data.research.map(entry => `
      <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div class="flex-grow-1">
          <h3 class="mb-0">
            ${entry.link ? `<a href="${entry.link}" target="_blank">${entry.title}</a>` : entry.title}
          </h3>
          <div class="subheading mb-3">${entry.authors}</div>
          <div>${entry.journal}</div>
        </div>
        <div class="flex-shrink-0"><span class="text-primary">${entry.year}</span></div>
      </div>
    `).join('');
  })
  .catch(err => console.error('Error loading research.json:', err));
