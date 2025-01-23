document.addEventListener("DOMContentLoaded", () => { 

  const submenuTrigger = document.getElementById('submenu-contain'); 
  const submenuSource = document.getElementById('submenu'); 
  const submenuContainer = document.getElementById('submenu-container');
  const submenuDynamic = document.getElementById('submenu-dynamic');

  if (submenuTrigger && submenuSource && submenuDynamic) {
    submenuTrigger.addEventListener('mouseover', () => {
      submenuContainer.style.display = 'flex';
      submenuDynamic.innerHTML = submenuSource.innerHTML;
      submenuDynamic.style.display = 'flex';
    });

    submenuTrigger.addEventListener('mouseleave', () => {
      setTimeout(() => {
        if (!submenuContainer.matches(':hover')) {
          submenuContainer.style.display = 'none';
          submenuDynamic.style.display = 'none';
          submenuDynamic.innerHTML = '';
        }
      }, 300); // Añade un pequeño retraso para permitir mover el mouse al submenu
    });

    submenuContainer.addEventListener('mouseleave', () => {
      submenuContainer.style.display = 'none';
      submenuDynamic.style.display = 'none';
      submenuDynamic.innerHTML = '';
    });
  }

});