import logo from '../../assets/img/logo-title.webp';
import { Path } from '../../models/models';
import { aboutModal } from '../../components/about-modal';
import { logoGoogle } from '../../components/google-button';
import { services } from '../../services';

const { userLogin, googleLogin } = services();

export default function Login(onNavigate: (pathname: Path) => void) {
  const loginDiv = document.createElement('div');
  const title = document.createElement('h2');
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

  emailInput.classList.add('input', 'email-input');
  emailInput.id = 'email-input';
  emailInput.placeholder = 'Enter email';
  passwordInput.classList.add('input', 'password-input');
  passwordInput.type = 'password';
  passwordInput.id = 'password-input';
  passwordInput.placeholder = 'Enter password';
  passwordInput.minLength = 6;
  passwordInput.required = true;

  loginBttn.classList.add('button', 'login-button');
  googleButton.className = 'logoGoogle';
  homeBttn.classList.add('button', 'login-button');
  divTitleLogin.classList.add('divTitleLogin');

  loginDiv.className = 'home-div';
  contentDiv.className = 'content-wrapper';
  googleButton.innerHTML = `${logoGoogle}`

  title.textContent = 'Log into your account';
  loginBttn.textContent = 'Login';
  homeBttn.textContent = 'Go back';

  logoImg.addEventListener('click', () => about.showModal());
  homeBttn.addEventListener('click', () => onNavigate('/'));
  loginBttn.addEventListener('click', () => {
    const email = (<HTMLInputElement>document.getElementById('email-input')).value;
    const password = (<HTMLInputElement>document.getElementById('password-input')).value;
    userLogin(email, password).then(() => {
        onNavigate('/feed');
      },
      () => alert('Invalid credentials'),
    );
  });

  googleButton.addEventListener('click', () => {
    googleLogin().then(
      () => {
        onNavigate('/feed');
      },
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
