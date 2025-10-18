// Dynamically load data from JSON and render HTML
fetch('data/personal.json')
  .then(response => {
    if (!response.ok) throw new Error('Failed to load JSON');
    return response.json();
  })
  .then(aboutData => {
    const container = document.getElementById("bio-basic");

    container.innerText = aboutData.introduction

    const accordian = document.getElementById("accordionExp")
    accordian.innerHTML = `
        ${aboutData.details.map((item, i) => `
          <div class="accordion-item">
            <h2 class="accordion-header" id="${item.id}">
              <button class="accordion-button ${i > 0 ? "collapsed" : ""}" type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse${item.id}"
                aria-controls="collapse${item.id}">
                ${item.title}
              </button>
            </h2>
            <div id="collapse${item.id}" class="accordion-collapse collapse ${i === 0 ? "show" : ""}"
              aria-labelledby="${item.id}" data-bs-parent="#accordionExp">
              <div class="accordion-body">
                <p class="lead">${item.content}</p>
              </div>
            </div>
          </div>
        `).join('')}
    `;
  })
  .catch(error => {
    console.error('Error loading about.json:', error);
    document.getElementById("aboutContent").innerHTML =
      `<p class="text-danger">Failed to load profile data.</p>`;
  });
