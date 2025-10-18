// Load navbar links dynamically
fetch('data/home-link.json')
  .then(response => {
    if (!response.ok) throw new Error('Failed to load navbar JSON');
    return response.json();
  })
  .then(navData => {
    const navbarContainer = document.getElementById('navbarLinks');
    navbarContainer.innerHTML = navData.links.map(link => `
      <li class="nav-item">
        <a class="nav-link js-scroll-trigger" href="${link.href}">${link.label}</a>
      </li>
    `).join('');
  })
  .catch(error => {
    console.error('Error loading navbar.json:', error);
    document.getElementById('navbarLinks').innerHTML =
      '<li class="nav-item text-danger">Failed to load navigation</li>';
  });