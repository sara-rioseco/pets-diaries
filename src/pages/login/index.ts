import logo from '../../assets/img/logo-title.webp';
import { Path } from '../../models/models';
import { aboutModal } from '../../components/about-modal';
import { logoGoogle } from '../../components/google-button';
import { services } from '../../services';

const { userLogin, googleLogin } = services();

export default function Login(onNavigate: (pathname: Path) => void) {
  const loginDiv = document.createElement('div');
  const headerDiv = document.createElement('div');
  const title = document.createElement('h1');
  const contentDiv = document.createElement('div');
  const emailInput = document.createElement('input');
  const passwordInput = document.createElement('input');
  const loginBttn = document.createElement('button');
  const homeBttn = document.createElement('button');
  const logoImg = document.createElement('img');
  const googleButton = document.createElement('div');
  const divTitleLogin = document.createElement('li');
  const about = aboutModal();

  logoImg.src = `${logo}`;
  logoImg.alt = "logo Pets' Diaries";
  logoImg.classList.add('logo');

  emailInput.classList.add('loginInputBox');
  emailInput.id = 'myEmailInput';
  emailInput.placeholder = 'Enter email';
  passwordInput.classList.add('loginInputBox');
  passwordInput.type = 'password';
  passwordInput.id = 'myPasswordInput';
  passwordInput.placeholder = 'Enter password';
  passwordInput.minLength = 6;
  passwordInput.required = true;

  loginBttn.classList.add('loginBttn');
  googleButton.className = 'logoGoogle';
  homeBttn.classList.add('loginBttn');
  divTitleLogin.classList.add('divTitleLogin');

  loginDiv.className = 'home-div';
  headerDiv.className = 'header-div';
  contentDiv.className = 'content-login';
  headerDiv.innerHTML = `<img src="${logo}" alt="logo" id="logo">`;
  googleButton.innerHTML = `${logoGoogle}`

  title.textContent = 'Log in to your account';
  loginBttn.textContent = 'Login';
  homeBttn.textContent = 'Go back to home';

  logoImg.addEventListener('click', () => about.showModal());
  homeBttn.addEventListener('click', () => onNavigate('/'));
  loginBttn.addEventListener('click', () => {
    const email = (<HTMLInputElement>document.getElementById('myEmailInput')).value;
    const password = (<HTMLInputElement>document.getElementById('myPasswordInput')).value;
    userLogin(email, password).then(() => {
        onNavigate('/feed');
      },
      // eslint-disable-next-line no-alert
      () => alert('Invalid credentials'),
    );
  });

  googleButton.addEventListener('click', () => {
    googleLogin().then(
      () => {
        onNavigate('/feed');
      },
      // eslint-disable-next-line no-alert
      () => alert('Invalid credentials'),
    );
  });

  loginDiv.appendChild(logoImg);
  loginDiv.appendChild(about);
  contentDiv.appendChild(title);
  contentDiv.appendChild(emailInput);
  contentDiv.appendChild(passwordInput);
  contentDiv.appendChild(loginBttn);
  contentDiv.appendChild(googleButton);
  contentDiv.appendChild(homeBttn);
  loginDiv.appendChild(contentDiv);

  return loginDiv;
}
