import logo from '../../assets/img/logo-title.webp';
import { Path } from '../../models/models';
import { services } from '../../services';
import { aboutModal } from '../../components/about-modal';
import { updateUsernameModal } from '../../components/update-name-modal';
import { updateImgModal } from '../../components/update-img-modal';

const { getDisplayName, userLogout } = services();

export default function Profile(onNavigate: (pathname: Path) => void) {
  const profile = document.createElement('div');
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const title = document.createElement('h3');
  const contentDiv = document.createElement('div');
  const homeBttn = document.createElement('button');
  const logoutButton = document.createElement('button');
  const updateNameButton = document.createElement('button');
  const updatePicButton = document.createElement('button');
  const logoImg = document.createElement('img');
  const about = aboutModal();
  const updateNameModal = updateUsernameModal(onNavigate);
  const updatePicModal = updateImgModal(onNavigate);

  logoImg.src = `${logo}`;
  logoImg.alt = "logo Pets' Diaries";
  logoImg.classList.add('logo');
  profile.className = 'home-div';
  header.className = 'header';
  nav.className ='profile-nav';
  contentDiv.className = 'content-div';
  homeBttn.classList.add('button', 'login-button');
  logoutButton.classList.add('button', 'login-button');
  updateNameButton.classList.add('button', 'login-button');
  updatePicButton.classList.add('button', 'login-button');

  logoImg.addEventListener('click', () => about.showModal());
  title.textContent = `Welcome, ${getDisplayName()}, this is your Profile.`;
  updateNameButton.textContent = 'Update username';
  updateNameButton.addEventListener('click', () => updateNameModal.showModal());
  updatePicButton.textContent = 'Update picture';
  updatePicButton.addEventListener('click', () => updatePicModal.showModal());
  homeBttn.textContent = 'Go back to feed';
  homeBttn.addEventListener('click', () => onNavigate('/feed'));
  logoutButton.textContent = 'Logout';
  logoutButton.addEventListener('click', () => {
    userLogout().then(() => onNavigate('/'));
  });

  header.appendChild(logoImg);
  header.appendChild(about);
  nav.appendChild(title);
  nav.appendChild(updateNameButton);
  nav.appendChild(updatePicButton);
  nav.appendChild(homeBttn);
  nav.appendChild(logoutButton);
  nav.appendChild(updateNameModal);
  nav.appendChild(updatePicModal);
  profile.appendChild(header);
  profile.appendChild(nav);
  profile.appendChild(contentDiv);

  return profile;
}
