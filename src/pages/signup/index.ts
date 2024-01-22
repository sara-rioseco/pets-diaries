import logo from '../../assets/img/logo-title.webp';
import { Path } from '../../models/models';
import { aboutModal } from '../../components/about-modal';

export default function SignUp(onNavigate: (pathname: Path) => void) {
  const registerDiv = document.createElement('div');
  const headerDiv = document.createElement('div');
  const title = document.createElement('h1');
  const subtitle = document.createElement('h3');
  const contentDiv = document.createElement('div');
  const nameInput = document.createElement('input');
  const emailInput = document.createElement('input');
  const passwordInput = document.createElement('input');
  const passwordInput2 = document.createElement('input');
  const registerBttn = document.createElement('button');
  const homeBttn = document.createElement('button');
  const logoImg = document.createElement('img');
  const about = aboutModal();

  const divTitleRegister = document.createElement('li');

  logoImg.src = `${logo}`;
  logoImg.alt = "logo Pets' Diaries";
  logoImg.classList.add('logo');
  nameInput.classList.add('registerInputBox');
  nameInput.id = 'myNameInput';
  nameInput.placeholder = 'Nombre';
  nameInput.required = true;
  emailInput.classList.add('registerInputBox');
  emailInput.id = 'myEmailInput';
  emailInput.placeholder = 'Email';
  emailInput.required = true;
  passwordInput.classList.add('registerInputBox');
  passwordInput.type = 'password';
  passwordInput.id = 'myPasswordInput';
  passwordInput.placeholder = 'Ingresa tu contraseña (al menos6 caracteres)';
  passwordInput.minLength = 6;
  passwordInput.required = true;
  passwordInput2.classList.add('registerInputBox');
  passwordInput2.type = 'password';
  passwordInput2.id = 'myPasswordInput2';
  passwordInput2.placeholder = 'Repetir contraseña';
  passwordInput2.minLength = 6;
  passwordInput2.required = true;
  registerBttn.id = 'registerbutton';
  homeBttn.id = 'home-button';
  homeBttn.classList.add('registerBttn');
  divTitleRegister.classList.add('divTitleLogin');
  registerDiv.className = 'home-div';
  headerDiv.className = 'header-div';
  contentDiv.className = 'content-register';
  headerDiv.innerHTML = `<img src="${logo}" alt="logo" id="logo">`;
  registerBttn.classList.add('registerBttn');
  title.textContent = 'Regístrate';
  subtitle.textContent = 'O con tu cuenta de Google';
  registerBttn.textContent = 'Registrarme';
  homeBttn.textContent = 'Volver al inicio';

  logoImg.addEventListener('click', () => about.showModal());
  homeBttn.addEventListener('click', () => onNavigate('/'));
  registerBttn.addEventListener('click', e => {
    e.preventDefault();
    // const name = document.getElementById('myNameInput').value;
    // const email = document.getElementById('myEmailInput').value;
    // const password1 = document.getElementById('myPasswordInput').value;
    // const password2 = document.getElementById('myPasswordInput2').value;
    // if (validatePassword(password1, password2) === false) {
    // eslint-disable-next-line no-alert
    alert('la contraseña ingresada no coincide');
    // } else if (password1.length < 6) {
    // eslint-disable-next-line no-alert
    alert('la contraseña debe tener al menos 6 caracteres');
    // } else if (validateEmail(email) === false) {
    // eslint-disable-next-line no-alert
    alert('la contraseña sí coincide pero el correo electrónico no es válido');
    // } else {
    // createUser(email, password1)
    // .then(updateUsername(name))
    // eslint-disable-next-line no-console
    // .catch((err) => console.log('ERROR', err));
    onNavigate('/feed');
    // }
  });

  registerDiv.appendChild(logoImg);
  registerDiv.appendChild(about);
  contentDiv.appendChild(title);
  contentDiv.appendChild(nameInput);
  contentDiv.appendChild(emailInput);
  contentDiv.appendChild(passwordInput);
  contentDiv.appendChild(passwordInput2);
  contentDiv.appendChild(registerBttn);
  contentDiv.appendChild(homeBttn);
  registerDiv.appendChild(contentDiv);

  return registerDiv;
}
