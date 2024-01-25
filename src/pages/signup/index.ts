import logo from '../../assets/img/logo-title.webp';
import { Path } from '../../models/models';
import { aboutModal } from '../../components/about-modal';
import { utils } from '../../utils/index';
import { services } from '../../services/index';

const { isEmailValid, isPasswordValid, arePasswordsEqual } = utils();
const { createUser, updateUser } = services();


export default function SignUp(onNavigate: (pathname: Path) => void) {
  const registerDiv = document.createElement('div');
  const title = document.createElement('h2');
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
  nameInput.classList.add('input');
  nameInput.id = 'name-input';
  nameInput.placeholder = 'Username';
  nameInput.required = true;
  emailInput.classList.add('input', 'email-input');
  emailInput.type = 'email';
  emailInput.ariaLabel = 'Email';
  emailInput.id = 'email-input';
  emailInput.placeholder = 'Email';
  emailInput.required = true;
  passwordInput.classList.add('input', 'password-input');
  passwordInput.type = 'password';
  passwordInput.id = 'password-input';
  passwordInput.placeholder = 'Enter a password';
  passwordInput.minLength = 8;
  passwordInput.required = true;
  passwordInput2.classList.add('input', 'password-input');
  passwordInput2.type = 'password';
  passwordInput2.id = 'password-input-2';
  passwordInput2.placeholder = 'Repeat password';
  passwordInput2.minLength = 8;
  passwordInput2.required = true;
  homeBttn.classList.add('button', 'signup-button');
  divTitleRegister.classList.add('divTitleLogin');
  registerDiv.className = 'home-div';
  contentDiv.className = 'content-wrapper';
  registerBttn.classList.add('button', 'signup-button');
  title.textContent = 'Sign Up with your email';
  registerBttn.textContent = 'Sign Up';
  homeBttn.textContent = 'Go back';

  logoImg.addEventListener('click', () => about.showModal());
  homeBttn.addEventListener('click', () => onNavigate('/'));
  registerBttn.addEventListener('click', (e) => {
    e.preventDefault();
    const displayName = (<HTMLInputElement>document.getElementById('name-input')).value;
    const email = (<HTMLInputElement>document.getElementById('email-input')).value;
    const password1 = (<HTMLInputElement>document.getElementById('password-input')).value;
    const password2 = (<HTMLInputElement>document.getElementById('password-input-2')).value;
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
