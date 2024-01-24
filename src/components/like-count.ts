import redPaw from '../assets/img/like-red.webp';
import greyPaw from '../assets/img/like-grey.webp';
import { services } from '../services/index'; 
import { QueryDocumentSnapshot } from 'firebase/firestore';

const { addLike, removeLike } = services();

export const likeCount = (
  email: string,
  docSnap: QueryDocumentSnapshot,
  likes: string[]
): HTMLDivElement => {
  const wrapper = document.createElement('div');
  const likesCount = document.createElement('span');
  const likeImg = document.createElement('img');
  
  wrapper.classList.add('like-wrapper')
  likeImg.alt = 'Like icon'
  likeImg.classList.add('like-icon')
  likesCount.innerText = '(0)';
  likesCount.classList.add('like-count')

  likesCount.innerText = `(${likes.length})`;

  if (likes.includes(email)) {
    likeImg.src = `${redPaw}`
    likeImg.addEventListener('click', async () => {
      removeLike(docSnap.ref)
        .then(() => {
          likeImg.src = `${greyPaw}`;
        })
        .catch((error) => {
          throw new Error(`${error.message}`);
        });
    });
  } if (!likes.includes(email)) {
    likeImg.src = `${greyPaw}`;
    likeImg.addEventListener('click', () => {
      addLike(docSnap.ref)        
      .then(() => {
        likeImg.src = `${redPaw}`;
      })
      .catch((error) => {
        throw new Error(`${error.message}`);
      });
    })
  }

  wrapper.appendChild(likeImg);
  wrapper.appendChild(likesCount);
  return wrapper;
};
