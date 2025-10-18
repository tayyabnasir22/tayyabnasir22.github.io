// Load Awards & Certifications section
fetch('data/awards.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('awardsContent');
    container.innerHTML += `
      <ul class="fa-ul mb-0">
        ${data.awards.map(award => `
          <li>
            <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
            ${award.title}
          </li>
        `).join('')}
      </ul>
    `;
  })
  .catch(err => console.error('Error loading awards.json:', err));
