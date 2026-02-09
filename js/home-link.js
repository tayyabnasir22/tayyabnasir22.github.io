// Load navbar links dynamically
fetch('data/home-link.json')
  .then(response => {
    if (!response.ok) throw new Error('Failed to load navbar JSON');
    return response.json();
  })
  .then(navData => {
    const navbarContainer = document.getElementById('navbarLinks');
    navbarContainer.innerHTML = navData.links.map((link, index) => {
    const isLast = index === navData.links.length - 1;
    const linkClass = isLast ? 'nav-link special-class' : 'nav-link js-scroll-trigger';
    const liner = isLast ? '<hr class="bolder-line"/>' : ''
    return `
      <li class="nav-item">
        ${liner}
        <a class="${linkClass}" href="${link.href}">${link.label}</a>
      </li>
    `}).join('');
  })
  .catch(error => {
    console.error('Error loading navbar.json:', error);
    document.getElementById('navbarLinks').innerHTML =
      '<li class="nav-item text-danger">Failed to load navigation</li>';
  });