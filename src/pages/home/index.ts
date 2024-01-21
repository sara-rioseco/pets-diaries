import logo from '../../assets/img/logo-title.webp';

export default function Home(onNavigate: Function) {
  const homeDiv = document.createElement('div');
  const headerDiv = document.createElement('div');
  const subtitle = document.createElement('h2');
  const contentDiv = document.createElement('div');
  const loginBttn = document.createElement('button');
  const registerBttn = document.createElement('button');
  const logoImg = document.createElement('img');
  // const descModal = descriptionModal();

  logoImg.src = `${logo}`;
  logoImg.alt = "logo Pets' Diaries";
  logoImg.classList.add('logo');
  homeDiv.className = 'home-div';
  headerDiv.className = 'header-div';
  contentDiv.className = 'content-div';
  // descModal.id = 'about-modal';

  subtitle.textContent =
    '¡Bienvenid@ a la red social para los amantes de los animales!';
  loginBttn.textContent = 'Ingresar';
  registerBttn.textContent = 'Registrarme';
  loginBttn.classList.add('homeBttn');
  registerBttn.classList.add('homeBttn');

  // heartImg.addEventListener('click', () => descModal.showModal());
  loginBttn.addEventListener('click', () => onNavigate('/login'));
  registerBttn.addEventListener('click', () => onNavigate('/signup'));

  contentDiv.appendChild(headerDiv);
  contentDiv.appendChild(loginBttn);
  contentDiv.appendChild(registerBttn);
  homeDiv.appendChild(logoImg);
  // homeDiv.appendChild(descModal);
  headerDiv.appendChild(subtitle);
  homeDiv.appendChild(contentDiv);
  homeDiv.appendChild(contentDiv);

  return homeDiv;
}
