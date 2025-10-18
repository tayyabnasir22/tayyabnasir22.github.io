// Load social icons dynamically
fetch('./data/socials.json')
  .then(response => {
    if (!response.ok) throw new Error('Failed to load socials JSON');
    return response.json();
  })
  .then(socialData => {
    const socialContainer = document.getElementById('socialIcons');
    socialContainer.innerHTML = socialData.socials.map(social => `
      <a class="social-icon mb-3" href="${social.url}">
        <i class="${social.icon}"></i>
      </a>
    `).join('');
  })
  .catch(error => {
    console.error('Error loading socials.json:', error);
    document.getElementById('socialIcons').innerHTML =
      '<p class="text-danger">Failed to load social links.</p>';
  });
