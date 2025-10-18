// Load Datasets section
fetch('data/datasets.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('datasetContent');
    container.innerHTML += data.datasets.map(dataset => `
      <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div class="flex-grow-1">
          <h3 class="mb-0">
            ${dataset.link ? `<a href="${dataset.link}" target="_blank">${dataset.name}</a>` : dataset.name}
          </h3>
          <div class="subheading mb-2">${dataset.platform}</div>
        </div>
        <div class="flex-shrink-0 mb-5"><span class="text-primary">${dataset.year}</span></div>
      </div>
    `).join('');
  })
  .catch(err => console.error('Error loading datasets.json:', err));
