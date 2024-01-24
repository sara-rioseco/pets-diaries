import logo from '../../assets/img/logo-title.webp';
import { Path } from '../../models/models';
import { aboutModal } from '../../components/about-modal';

export default function Home(onNavigate: (pathname: Path) => void) {
  const homeDiv = document.createElement('div');
  const headerDiv = document.createElement('div');
  const subtitle = document.createElement('h2');
  const contentDiv = document.createElement('div');
  const loginBttn = document.createElement('button');
  const registerBttn = document.createElement('button');
  const logoImg = document.createElement('img');
  const about = aboutModal();

  logoImg.src = `${logo}`;
  logoImg.alt = "logo Pets' Diaries";
  logoImg.classList.add('logo');
  homeDiv.className = 'home-div';
  headerDiv.className = 'header-div';
  contentDiv.className = 'content-div';

  subtitle.textContent =
    'Welcome to the social network for pet lovers!';
  loginBttn.textContent = 'Login';
  registerBttn.textContent = 'Sign Up';
  loginBttn.classList.add('button', 'home-button');
  registerBttn.classList.add('button', 'home-button');

  logoImg.addEventListener('click', () => about.showModal());
  loginBttn.addEventListener('click', () => onNavigate('/login'));
  registerBttn.addEventListener('click', () => onNavigate('/signup'));

  contentDiv.appendChild(headerDiv);
  contentDiv.appendChild(loginBttn);
  contentDiv.appendChild(registerBttn);
  homeDiv.appendChild(logoImg);
  homeDiv.appendChild(about);
  headerDiv.appendChild(subtitle);
  homeDiv.appendChild(contentDiv);
  homeDiv.appendChild(contentDiv);

  return homeDiv;
}
