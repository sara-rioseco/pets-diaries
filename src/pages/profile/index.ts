import logo from '../../assets/img/logo-title.webp';
import { Path } from '../../models/models';
import { services } from '../../services';
import { aboutModal } from '../../components/about-modal';
import { auth } from '../../firebase';

const { userLogout } = services();

export default function Profile(onNavigate: (pathname: Path) => void) {
  const profileDiv = document.createElement('div');
  const headerDiv = document.createElement('div');
  const subtitle = document.createElement('h2');
  const contentDiv = document.createElement('div');
  const homeBttn = document.createElement('button');
  const logoutButton = document.createElement('button');
  const updateUsernameButton = document.createElement('button');
  const logoImg = document.createElement('img');
  const about = aboutModal();
  // const updateNameModal = updateUsernameModal(onNavigate);

  logoImg.src = `${logo}`;
  logoImg.alt = "logo Pets' Diaries";
  logoImg.classList.add('logo');
  profileDiv.className = 'home-div';
  headerDiv.className = 'header-div';
  contentDiv.className = 'content-div';
  homeBttn.classList.add('loginBttn');
  logoutButton.classList.add('loginBttn');

  logoImg.addEventListener('click', () => about.showModal());
  subtitle.textContent = `Welcome, ${auth.currentUser!.displayName}, this is your Profile.`;
  updateUsernameButton.textContent = 'Update username';
  // updateUsernameButton.addEventListener('click', () => updateNameModal.showModal());
  homeBttn.textContent = 'Go back to feed';
  homeBttn.addEventListener('click', () => onNavigate('/feed'));
  logoutButton.textContent = 'Logout';
  logoutButton.addEventListener('click', () => {
    userLogout().then(() => onNavigate('/'));
  });
  contentDiv.appendChild(headerDiv);
  profileDiv.appendChild(logoImg);
  profileDiv.appendChild(about);
  headerDiv.appendChild(subtitle);
  contentDiv.appendChild(updateUsernameButton);
  contentDiv.appendChild(homeBttn);
  contentDiv.appendChild(logoutButton);
  // contentDiv.appendChild(updateNameModal);
  profileDiv.appendChild(contentDiv);

  return profileDiv;
}
