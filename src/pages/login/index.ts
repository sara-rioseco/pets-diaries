import logo from '../../assets/img/logo-title.webp';

export default function Login(onNavigate: Function) {
  const loginDiv = document.createElement('div');
  const headerDiv = document.createElement('div');
  const title = document.createElement('h1');
  const contentDiv = document.createElement('div');
  const emailInput = document.createElement('input');
  const passwordInput = document.createElement('input');
  const loginBttn = document.createElement('button');
  const homeBttn = document.createElement('button');
  const logoImg = document.createElement('img');
  const logoGoogle = document.createElement('img');
  const divTitleLogin = document.createElement('li');
  // const descModal = descriptionModal();

  logoImg.src = `${logo}`;
  logoImg.alt = "logo Pets' Diaries";
  logoImg.classList.add('logo');

  // descModal.id = 'about-modal';
  emailInput.classList.add('loginInputBox');
  emailInput.id = 'myEmailInput';
  emailInput.placeholder = 'Ingresa tu Correo';
  passwordInput.classList.add('loginInputBox');
  passwordInput.type = 'password';
  passwordInput.id = 'myPasswordInput';
  passwordInput.placeholder = 'Contraseña';
  passwordInput.minLength = 6;
  passwordInput.required = true;

  loginBttn.classList.add('loginBttn');
  logoGoogle.className = 'logoGoogle';
  homeBttn.classList.add('loginBttn');
  divTitleLogin.classList.add('divTitleLogin');

  loginDiv.className = 'home-div';
  headerDiv.className = 'header-div';
  contentDiv.className = 'content-login';
  // headerDiv.innerHTML = `<img src="${logoTitleRed}" alt="logo" id="logo">`;
  // logoGoogle.src = `${logoGoogleImg}`;

  title.textContent = 'Iniciar Sesión';
  loginBttn.textContent = 'Iniciar Sesión';
  homeBttn.textContent = 'Volver al inicio';

  // heartImg.addEventListener('click', () => descModal.showModal());
  homeBttn.addEventListener('click', () => onNavigate('/'));
  loginBttn.addEventListener('click', () => {
    // const email = document.getElementById('myEmailInput').value;
    // const password = document.getElementById('myPasswordInput').value;
    // userLogin(email, password).then(
    //   () => {
    //     onNavigate('/timeline');
    //     // This gives you a Google Access Token. You can use it to access the Google API.
    //     // const credential = GoogleAuthProvider.credentialFromResult(result);
    //     // const token = credential.accessToken;
    //     // The signed-in user info.
    //     // const user = result.user;
    //   },
    //   // eslint-disable-next-line no-alert
    //   () => alert('Credenciales incorrectas o usuario no registrado'),
    // );
  });

  logoGoogle.addEventListener('click', () => {
    // userGoogleLogin().then(
    //   () => {
    //     onNavigate('/timeline');
    //   },
    //   // eslint-disable-next-line no-alert
    //   () => alert('Credenciales incorrectas'),
    // );
  });

  loginDiv.appendChild(logoImg);
  // loginDiv.appendChild(descModal);
  contentDiv.appendChild(title);
  contentDiv.appendChild(emailInput);
  contentDiv.appendChild(passwordInput);
  contentDiv.appendChild(loginBttn);
  contentDiv.appendChild(logoGoogle);
  contentDiv.appendChild(homeBttn);
  loginDiv.appendChild(contentDiv);

  return loginDiv;
}
