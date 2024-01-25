import logo from '../../assets/img/logo-title.webp';
import { Path } from '../../models/models';
import { services } from '../../services/index';
import { aboutModal } from '../../components/about-modal';
import { likeCount } from '../../components/like-count';
import { postCard } from '../../components/post-card';
import { onSnapshot } from 'firebase/firestore';

const { getDisplayName, getEmail, getPostsRef, createPost, userLogout } = services();

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
  const about = aboutModal();

  divUserName.classList.add('divUserName');
  divSignOut.classList.add('divSignOut');
  userName.textContent = `Welcome, ${getDisplayName()}!`;
  logoImg.src = `${logo}`;
  logoImg.alt = "logo Pets' Diaries";
  logoImg.classList.add('feed-logo');
  logoImg.classList.add('logo');
  logoutButton.textContent = 'Logout';
  logoutButton.classList.add('logoutButton');
  postInput.classList.add('timelineInputBox');
  postInput.id = 'new-post-input';
  postInput.placeholder = 'Write your post here';
  postInput.required = true;
  postInput.autocomplete = 'off';
  postsDiv.classList.add('posts-div');
  publishButton.id = 'publishbutton';
  publishButton.textContent = 'Publish';
  publishButton.className = 'buttonToPost';
  title.textContent = 'Share your stories:';
  navHomeDiv.className = 'navHome';
  timelineMainDiv.className = 'timeline-main-div';
  timelineDiv.className = 'feed-div';
  contentDiv.className = 'timelineContentDiv';
  contentPostDiv.className = 'timelinePosts';

  logoImg.addEventListener('click', () => about.showModal());
  divUserName.addEventListener('click', () => onNavigate('/profile'));
  userName.addEventListener('click', () => onNavigate('/profile'));

  logoutButton.addEventListener('click', () => {
    userLogout().then(() => onNavigate('/'));
  });

  publishButton.addEventListener('click', async e => {
    e.preventDefault();
    const post = document.querySelector('input')!;
    await createPost(post.value);
    postInput.value = '';
  });

  navHomeDiv.appendChild(divUserName);
  navHomeDiv.appendChild(userName);
  navHomeDiv.appendChild(logoImg);
  navHomeDiv.appendChild(about);
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

  onSnapshot(getPostsRef(), (querySnapshot) => {
    while (postsDiv.hasChildNodes()) {
      postsDiv.removeChild(postsDiv.firstChild!);
    }
    querySnapshot.forEach((post) => {
      const postContent = post.data({
        serverTimestamps: 'estimate',
      });
      const name = post.data().displayName || post.data().email;
      const localDate = postContent.time.toDate().toLocaleDateString();
      const localTime = postContent.time.toDate().toLocaleTimeString();
      const {content} = post.data();
      const email = getEmail();
      const {likes}= post.data();
      const docId = post.id;

      const spanLike = likeCount(email!, post, likes); // importantes de aquí pah abajo
      const postDiv = postCard(name, localDate, localTime, content, docId, spanLike);
      postsDiv.appendChild(postDiv);
    });
  });

  return timelineDiv;
}
