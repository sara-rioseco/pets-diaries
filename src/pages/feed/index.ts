import logo from '../../assets/img/logo-title.webp';
import img from '../../assets/img/user-image.webp';
import { Path } from '../../models/models';
import { services } from '../../services/index';
import { aboutModal } from '../../components/about-modal';
import { likeCount } from '../../components/like-count';
import { postCard } from '../../components/post-card';
import { topButton } from '../../components/top-button';
import { DocumentData, QueryDocumentSnapshot, onSnapshot } from 'firebase/firestore';

const { getDisplayName, getProfilePicture, getEmail, getFirstPostsRef, getNextFivePosts, createPost, userLogout } = services();

export default function Feed(onNavigate: (pathname: Path) => void) {
  const feed = document.createElement('div');  
  const header = document.createElement('header');
  const logoImg = document.createElement('img'); 
  const nav = document.createElement('nav');
  const userImg = document.createElement('img');
  const user = document.createElement('h3');
  const logoutButton = document.createElement('button');
  const title = document.createElement('h3');
  const input = document.createElement('input');
  const publishButton = document.createElement('button');
  const about = aboutModal();

  const posts = document.createElement('div');
  const loading = document.createElement('div');
  const upButton = topButton();

  userImg.src = `${getProfilePicture() || img}`;
  userImg.loading = "lazy";
  userImg.alt = "User's image";
  userImg.classList.add('img', 'user-img');
  user.textContent = `Welcome, ${getDisplayName()}!`;
  logoImg.src = `${logo}`;
  logoImg.alt = "logo Pets' Diaries";
  logoImg.classList.add('logo', 'feed-logo');
  logoutButton.textContent = 'Logout';
  logoutButton.classList.add('button', 'logout-button', 'small-button');
  input.classList.add('input', 'feed-input');
  input.id = 'new-post-input';
  input.placeholder = 'Write your post here';
  input.required = true;
  input.autocomplete = 'off';
  posts.classList.add('posts-wrapper');
  loading.classList.add('loading');
  loading.textContent = 'Loading posts...';
  publishButton.textContent = 'Publish';
  publishButton.classList.add('button', 'publish-button', 'small-button');
  title.textContent = 'Share your stories:';
  title.classList.add('title', 'post-title');
  header.className = 'header';
  feed.className = 'feed-div';

  logoImg.addEventListener('click', () => about.showModal());
  user.addEventListener('click', () => onNavigate('/profile'));
  userImg.addEventListener('click', () => onNavigate('/profile'));

  logoutButton.addEventListener('click', () => {
    userLogout().then(() => onNavigate('/'));
  });

  publishButton.addEventListener('click', async e => {
    e.preventDefault();
    const post = document.querySelector('input')!;
    await createPost(post.value);
    input.value = '';
  });

  // ========= BACK TO TOP BUTTON FEATURE =========
  function scroll() {
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
      ? upButton.style.display = "flex"
      : upButton.style.display = "none"
  }
  
  function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
  window.onscroll = () => scroll();
  upButton.addEventListener('click', (e) => {
    e.preventDefault();
    toTop();
  })

  header.appendChild(logoImg);
  nav.appendChild(userImg);
  nav.appendChild(user);
  nav.appendChild(logoutButton);
  nav.appendChild(title);
  nav.appendChild(input);
  nav.appendChild(publishButton);
  nav.appendChild(about);
  feed.appendChild(header);
  feed.appendChild(nav);
  feed.appendChild(posts);
  feed.appendChild(upButton)

  // INITIAL ON SNAPSHOT (gets first 5 posts from collection)
  let lastPost: QueryDocumentSnapshot<DocumentData, DocumentData> // LAST POST ON SCREEN

  onSnapshot(getFirstPostsRef(), (querySnapshot) => {
    while (posts.hasChildNodes()) {
      posts.removeChild(posts.firstChild!);
    }
    lastPost = querySnapshot.docs[querySnapshot.docs.length - 1]; // UPDATE LAST POST
    loading.classList.add('active');
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
      const spanLike = likeCount(email!, post, likes);
      const postDiv = postCard(name, localDate, localTime, content, docId, spanLike);
      posts.appendChild(postDiv);
      posts.appendChild(loading);
    });

    // ADD SCROLL EVENT AFTER FIRST ON SNAPSHOT
    document.addEventListener('scroll', handleScroll)
  });

  // HANDLE SCROLL EVENT WHEN USER GETS TO THE BOTTOM OF SCREEN
  const handleScroll = async () => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
    if (window.scrollY >= scrollableHeight) {
      const morePosts = await getNextFivePosts(lastPost)
      posts.removeChild(loading);
      if (morePosts.empty) {
        document.removeEventListener('scroll', handleScroll) // REMOVE EVENT LISTENER IF NO MORE POSTS
        loading.classList.remove('active')
        return
      }
      lastPost = morePosts.docs[morePosts.docs.length - 1]; // UPDATE LAST POST
      morePosts.forEach((post) => {
        const postContent = post.data({
          serverTimestamps: 'estimate',
        });
        const name = post.data().displayName || post.data().email.replace(/@.*$/, '');
        const localDate = postContent.time.toDate().toLocaleDateString();
        const localTime = postContent.time.toDate().toLocaleTimeString();
        const {content} = post.data();
        const email = getEmail();
        const {likes}= post.data();
        const docId = post.id;    
        const spanLike = likeCount(email!, post, likes);
        const postDiv = postCard(name, localDate, localTime, content, docId, spanLike);
        posts.appendChild(postDiv);
      })
      posts.appendChild(loading);
    }
  }
  return feed;
}
  
