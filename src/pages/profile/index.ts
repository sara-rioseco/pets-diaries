import logo from '../../assets/img/logo-title.webp';

export default function Profile(onNavigate: Function) {
  const profileDiv = document.createElement('div');
  const headerDiv = document.createElement('div');
  const subtitle = document.createElement('h2');
  const contentDiv = document.createElement('div');
  const homeBttn = document.createElement('button');
  const logoutButton = document.createElement('button');
  const updateUsernameButton = document.createElement('button');
  const logoImg = document.createElement('img');
  // const descModal = descriptionModal();
  // const updateNameModal = updateUsernameModal(onNavigate);

  logoImg.src = `${logo}`;
  logoImg.alt = "logo Pets' Diaries";
  logoImg.classList.add('logo');
  profileDiv.className = 'home-div';
  headerDiv.className = 'header-div';
  contentDiv.className = 'content-div';
  homeBttn.classList.add('loginBttn');
  logoutButton.classList.add('loginBttn');
  // descModal.id = 'about-modal';

  // heartImg.addEventListener('click', () => descModal.showModal());
  // subtitle.textContent = `¡Bienvenid@, ${getLoggedUser()}! Este es tu perfil.`;
  updateUsernameButton.textContent = 'Cambiar nombre';
  // updateUsernameButton.addEventListener('click', () => updateNameModal.showModal());
  homeBttn.textContent = 'Volver atrás';
  homeBttn.addEventListener('click', () => onNavigate('/feed'));
  logoutButton.textContent = 'Cerrar sesión';
  logoutButton.addEventListener('click', () => {
    // userLogout().then(() => onNavigate('/'));
  });
  contentDiv.appendChild(headerDiv);
  profileDiv.appendChild(logoImg);
  // profileDiv.appendChild(descModal);
  headerDiv.appendChild(subtitle);
  contentDiv.appendChild(updateUsernameButton);
  contentDiv.appendChild(homeBttn);
  contentDiv.appendChild(logoutButton);
  // contentDiv.appendChild(updateNameModal);
  profileDiv.appendChild(contentDiv);

  return profileDiv;
}
