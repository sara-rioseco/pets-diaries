import redPaw from '../assets/img/like-red.webp';
import greyPaw from '../assets/img/like-grey.webp';
import { services } from '../services/index'; 
import { QueryDocumentSnapshot } from 'firebase/firestore';

const { addLike, removeLike } = services();

export const likeCount = (
  email: string,
  docRef: QueryDocumentSnapshot,
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
    likeImg.src = redPaw
    likeImg.addEventListener('click', async () => {
      console.log(docRef.id, 'you unliked this, now it show be grey')
      removeLike(docRef.id)
        .then(() => {
          likeImg.src = greyPaw;
        })
        .catch((error) => {
          console.log(error)
          throw new Error(`${error.message}`);
        });
    });
  } else {
    likeImg.src = `${greyPaw}`;
    likeImg.addEventListener('click', () => {
      console.log(docRef.id, 'you liked this, now it shhouled be red')
      addLike(docRef.id, likes)        
      .then(() => {
        likeImg.src = redPaw;
      })
      .catch((error) => {
        console.log(error)
        throw new Error(`${error.message}`);
      });
    })
  }

  wrapper.appendChild(likeImg);
  wrapper.appendChild(likesCount);
  return wrapper;
};
