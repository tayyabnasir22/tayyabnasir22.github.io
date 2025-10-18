// Load Quotes section
fetch('data/quotes.json')
  .then(res => res.json())
  .then(data => {
    const row = document.getElementById('quotesRow');
    data.quotes.forEach(q => {
      const col = document.createElement('div');
      col.className = 'col-lg-3 col-md-6 mb-5 mb-lg-0';

      col.innerHTML = `
        <span class="service-icon rounded-circle mx-auto mb-3"><i class="${q.icon}"></i></span>
        <h4><strong>${q.title}</strong></h4>
        <p class="text-faded mb-0">${q.text}</p>
      `;
      row.appendChild(col);
    });
  })
  .catch(err => console.error('Error loading quotes.json:', err));
