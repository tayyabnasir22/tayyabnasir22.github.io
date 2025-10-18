// Load Education section
fetch('./data/education.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('educationContent');
    container.innerHTML += data.education.map(edu => `
      <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div class="flex-grow-1">
          <h3 class="mb-0">${edu.institution}</h3>
          <div class="subheading mb-3">${edu.degree}</div>
          <div class="mb-1">${edu.field}</div>
          ${edu.research ? `<p><strong>Research Interest:</strong> ${edu.research}</p>` : ''}
          ${edu.thesis ? `<p><strong>Thesis: </strong><a href="${edu.thesis.link}" target="_blank">${edu.thesis.title}</a></p>` : ''}
          ${edu.majors ? `<p><strong>Majors: </strong>${edu.majors}</p>` : ''}
          ${edu.cgpa ? `<p>CGPA: ${edu.cgpa}</p>` : ''}
          ${edu.grade ? `<p>Grade: ${edu.grade}</p>` : ''}
        </div>
        <div class="flex-shrink-0"><span class="text-primary">${edu.start} - ${edu.end}</span></div>
      </div>
    `).join('');
  })
  .catch(err => console.error('Error loading education.json:', err));
