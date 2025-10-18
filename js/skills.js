// Load Skills section
fetch('data/skills.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('skillsContent');
    container.innerHTML += data.skills.map(skill => {
      if(skill.type === "list") {
        return `
          <div class="subheading mb-3">${skill.category}</div>
          <ul class="fa-ul mb-5">
            ${skill.items.map(item => `
              <li>
                <span class="fa-li"><i class="fas fa-check"></i></span>
                ${item}
              </li>
            `).join('')}
          </ul>
        `;
      } else if(skill.type === "icons") {
        return `
          <div class="subheading mb-3">${skill.category}</div>
          <ul class="list-inline dev-icons mb-5">
            ${skill.icons.map(icon => `<li class="list-inline-item"><i class="${icon}"></i></li>`).join('')}
          </ul>
        `;
      }
    }).join('');
  })
  .catch(err => console.error('Error loading skills.json:', err));
