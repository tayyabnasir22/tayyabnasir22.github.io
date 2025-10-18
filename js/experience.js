// Load Experience section
fetch('data/experience.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('experienceContent');
    container.innerHTML += data.experiences.map(exp => `
      <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div class="flex-grow-1">
          <h3 class="mb-0">${exp.title}</h3>
          <div class="subheading mb-1">${exp.company}</div>
          ${exp.link ? `<p><a href="${exp.link}" target="_blank">Profile Link</a></p>` : ''}
        </div>
        <div class="flex-shrink-0">
          <span class="text-primary">${exp.start} - ${exp.end}</span>
        </div>
      </div>
    `).join('');
  })
  .catch(err => console.error('Error loading experience.json:', err));
