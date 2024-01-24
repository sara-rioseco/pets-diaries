import logo from '../../assets/img/logo-title.webp';
import { Path } from '../../models/models';
import { aboutModal } from '../../components/about-modal';
import { utils } from '../../utils/index';
import { services } from '../../services/index';

const { isEmailValid, isPasswordValid, arePasswordsEqual } = utils();
const { createUser, updateUser } = services();


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
  nameInput.placeholder = 'Username';
  nameInput.required = true;
  emailInput.classList.add('registerInputBox');
  emailInput.ariaLabel = 'Email';
  emailInput.id = 'myEmailInput';
  emailInput.placeholder = 'Email';
  emailInput.required = true;
  passwordInput.classList.add('registerInputBox');
  passwordInput.type = 'password';
  passwordInput.id = 'myPasswordInput';
  passwordInput.placeholder = 'Enter a password (at least 6 characters)';
  passwordInput.minLength = 6;
  passwordInput.required = true;
  passwordInput2.classList.add('registerInputBox');
  passwordInput2.type = 'password';
  passwordInput2.id = 'myPasswordInput2';
  passwordInput2.placeholder = 'Repeat password';
  passwordInput2.minLength = 6;
  passwordInput2.required = true;
  registerBttn.id = 'registerbutton';
  homeBttn.id = 'home-button';
  homeBttn.classList.add('button', 'signup-button');
  divTitleRegister.classList.add('divTitleLogin');
  registerDiv.className = 'home-div';
  headerDiv.className = 'header-div';
  contentDiv.className = 'content-register';
  headerDiv.innerHTML = `<img src="${logo}" alt="logo" id="logo">`;
  registerBttn.classList.add('button', 'signup-button');
  title.textContent = 'Sign Up with your email';
  subtitle.textContent = 'Or use your Google account';
  registerBttn.textContent = 'Sign Up';
  homeBttn.textContent = 'Go back';

  logoImg.addEventListener('click', () => about.showModal());
  homeBttn.addEventListener('click', () => onNavigate('/'));
  registerBttn.addEventListener('click', (e) => {
    e.preventDefault();
    const displayName = (<HTMLInputElement>document.getElementById('myNameInput')).value;
    const email = (<HTMLInputElement>document.getElementById('myEmailInput')).value;
    const password1 = (<HTMLInputElement>document.getElementById('myPasswordInput')).value;
    const password2 = (<HTMLInputElement>document.getElementById('myPasswordInput2')).value;
    if (!arePasswordsEqual(password1, password2)) {
      alert('Passwords do not match');
      window.location.reload();
      return
    }
    if (!isPasswordValid(password1)) {
      alert('Password must have a minimum of eight characters and at least one uppercase letter, one lowercase letter and one number')
      window.location.reload();
      return
    }
    if (!isEmailValid(email)) {
      alert('Invalid email address');
      window.location.reload();
      return
    } else {
    createUser(email, password1)
    .then(() => {
      updateUser({displayName: displayName})
      .then(() => onNavigate('/feed'))
    })
    .catch((e) => {
      throw new Error(`${e}`)
    })
    }
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
