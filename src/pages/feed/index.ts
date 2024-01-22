import logo from '../../assets/img/logo-title.webp';
import { Path } from '../../models/models';

export default function Feed(onNavigate: (pathname: Path) => void) {
  const timelineDiv = document.createElement('div');
  const navHomeDiv = document.createElement('div');
  const timelineMainDiv = document.createElement('div');
  const logoImg = document.createElement('img');
  const logoutButton = document.createElement('button');
  const divUserName = document.createElement('div');
  const userName = document.createElement('span');
  const divSignOut = document.createElement('div');
  const contentDiv = document.createElement('div');
  const contentPostDiv = document.createElement('div');
  const postsDiv = document.createElement('div');
  const title = document.createElement('h4');
  const postInput = document.createElement('input');
  const publishButton = document.createElement('button');
  // const postsRef = query(collection(db, 'posts'), orderBy('time', 'desc'));
  // const descModal = descriptionModal();

  divUserName.classList.add('divUserName');
  divSignOut.classList.add('divSignOut');
  // userName.textContent = `¡Bienvenid@, ${getLoggedUser()}!`;
  logoImg.src = `${logo}`;
  logoImg.alt = "logo Pets' Diaries";
  logoImg.classList.add('feed-logo');
  logoImg.classList.add('logo');
  logoutButton.textContent = 'Cerrar sesión';
  logoutButton.classList.add('logoutButton');
  postInput.classList.add('timelineInputBox');
  postInput.id = 'myPostInput';
  postInput.placeholder = 'Escribe lo que quieras publicar';
  postInput.required = true;
  postInput.autocomplete = 'off';
  postsDiv.id = 'posts-div';
  postsDiv.className = 'publicacionPost';
  // descModal.id = 'about-modal';

  publishButton.id = 'publishbutton';
  publishButton.textContent = 'Publicar';
  publishButton.className = 'buttonToPost';
  title.textContent = 'Comparte tu historia';
  navHomeDiv.className = 'navHome';
  timelineMainDiv.className = 'timeline-main-div';
  timelineDiv.className = 'feed-div';
  contentDiv.className = 'timelineContentDiv';
  contentPostDiv.className = 'timelinePosts';
  postsDiv.className = '';

  // logoImg.addEventListener('click', () => descModal.showModal());
  divUserName.addEventListener('click', () => onNavigate('/profile'));
  userName.addEventListener('click', () => onNavigate('/profile'));

  logoutButton.addEventListener('click', () => {
    // userLogout().then(() => onNavigate('/'));
  });

  publishButton.addEventListener('click', async e => {
    e.preventDefault();
    // const post = document.getElementById('myPostInput').value;
    // createPost(post);
    postInput.value = '';
  });

  navHomeDiv.appendChild(divUserName);
  navHomeDiv.appendChild(userName);
  navHomeDiv.appendChild(logoImg);
  // navHomeDiv.appendChild(descModal);
  navHomeDiv.appendChild(logoutButton);
  contentDiv.appendChild(title);
  contentDiv.appendChild(postInput);
  contentDiv.appendChild(publishButton);
  timelineDiv.appendChild(navHomeDiv);
  contentPostDiv.appendChild(postsDiv);
  timelineMainDiv.appendChild(contentDiv);
  timelineMainDiv.appendChild(contentPostDiv);
  timelineDiv.appendChild(timelineMainDiv);
  timelineDiv.appendChild(divSignOut);
  divSignOut.appendChild(logoutButton);

  // onSnapshot(postsRef, (querySnapshot) => {
  //   postsDiv.innerHTML = '';
  //   querySnapshot.forEach((post) => {
  //     const postContent = post.data({
  //       serverTimestamps: 'estimate',
  //     });
  //     const name = post.data().displayName;
  //     const localDate = postContent.time.toDate().toLocaleDateString();
  //     const localTime = postContent.time.toDate().toLocaleTimeString().slice(0, 5);
  //     const content = post.data().content;
  //     const likesArr = post.data().likes;
  //     const docId = post.id;
  //     const spanLike = spanLikeFunc(post, likesArr);
  //     const postDiv = createPostDiv(name, localDate, localTime, content, docId, spanLike);
  //     postsDiv.appendChild(postDiv);
  //   });
  // });
  return timelineDiv;
}
