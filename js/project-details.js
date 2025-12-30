fetch('data/project-tiles.json')
  .then(res => res.json())
  .then(projectsData => {
    const container = document.getElementById('projectsContainer');
    var count = 0;

    projectsData.projects.forEach(project => {
      const detailFile = `details_data/${project.anchor}.json`;

      fetch(detailFile)
        .then(detailRes => {
          if (!detailRes.ok) return null; // skip missing files
          return detailRes.json();
        })
        .then(details => {
          if (!details) return;

          count += 1;

          var d = {
            'bg' : 'bg-secondary',
            'img1': 'assets/img/portfolio-1.jpg',
            'img2': 'assets/img/portfolio-1-flipped.jpg',
            'btn': 'btn-primary',
            'title': 'text-white',
            'nametitle': 'text-black'
          }

          if (count % 2 === 0){
            d = {
                'bg' : 'bg-white',
                'img1': 'assets/img/portfolio-3.jpg',
                'img2': 'assets/img/portfolio-3-flipped.jpg',
                'btn': 'btn-dark',
                'title': 'text-secondary',
                'nametitle': 'text-primary'
            }
          }

          const section = document.createElement('section');
          section.className = `content-section ${d['bg']}`;//Need to make this based on the count
          section.id = project.anchor;
          console.log(project.anchor)
          section.innerHTML = `
            <div class="container px-4 px-lg-5">
                <div class="content-section-heading text-center">
                    <h3 class="${d['title']} mb-0">Portfolio Project</h3>
                    <h2 class="mb-5 ${d['nametitle']}">${details.name}</h2>
                </div>
                <div class="row gx-0">
                    <div class="col-lg-6">
                        <a class="portfolio-item" >
                            <div class="caption">
                                <div class="caption-content">
                                    <div class="h2">Description</div>
                                    <p class="mb-0">${details.description}</p>
                                </div>
                            </div>
                            <img class="img-fluid" src="${d['img1']}" alt="..." />
                        </a>
                    </div>
                    <div class="col-lg-6">
                        <a class="portfolio-item" >
                            <div class="caption">
                                <div class="caption-content">
                                    <div class="h2">Tools and Technologies</div>
                                    <p class="mb-0">${details.tools.join(", ")}</p>
                                </div>
                            </div>
                            <img class="img-fluid" src="${d['img2']}" alt="..." />
                        </a>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-8 collapse" id="${project.anchor}Collapse">
                        <br/>
                        <div class="caption px-4 px-lg-5 py-4 text-white role-item">
                            <div class="caption-content">
                                <div class="h2">Roles and Responsibilities</div>
                                ${details.role.map(
                                    t => `<p class="mb-1 d-flex align-items-start">
                                            <span class="me-2">•</span>
                                            <span>${t}.</span>
                                        </p>`
                                    ).join("")
                                }
                            </div>
                        </div>                        
                    </div>
                </div>
                <br/>
                <div class="container gx-1 px-4 px-lg-5 text-center">
                    <button class="btn btn-xl ${d['btn']} me-4" type="button" data-bs-toggle="collapse" data-bs-target="#${project.anchor}Collapse" aria-expanded="false" aria-controls="${project.anchor}Collapse">Roles and Responsibilities</button>
                </div>
            </div>
          `;

          container.appendChild(section);
        })
        .catch(err => {
          console.warn(`Details not found for ${project.anchor}`, err);
        });
    });
  })
  .catch(err => {
    console.error('Error loading projects:', err);
  });
