document.addEventListener('DOMContentLoaded', () => {
  const projectsSection = document.getElementById('projects');
  if (!projectsSection) return;

  fetch('/api/projects')
    .then(response => response.json())
    .then(data => {
      const list = document.createElement('ul');
      data.forEach(project => {
        const item = document.createElement('li');
        item.innerHTML = `<strong>${project.title}</strong>: ${project.description}`;
        list.appendChild(item);
      });
      projectsSection.appendChild(list);
    })
    .catch(err => {
      projectsSection.innerHTML += '<p>Failed to load projects.</p>';
      console.error(err);
    });
});
