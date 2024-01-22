import redPaw from '../assets/img/like-red.webp';
import greyPaw from '../assets/img/like-grey.webp';
import { services } from '../services/index'; 
import { DocumentReference } from 'firebase/firestore';

const { addLike, removeLike } = services();

export const likeCount = (
  email: string,
  docRef: DocumentReference,
  likesArr: string[]
): HTMLDivElement => {
  const wrapper = document.createElement('div');
  const likesCount = document.createElement('span');
  const likeImg = document.createElement('img');
  
  wrapper.classList.add('like-wrapper')
  likeImg.alt = 'Like icon'
  likeImg.classList. add('Like icon')
  likesCount.innerText = '(0)';
  likesCount.classList.add('like-count')

  if (likesArr.includes(email)) {
    likesCount.innerText = `${likesArr.length}`;
    likeImg.src = `${redPaw}`
    likeImg.addEventListener('click', () => {
      removeLike(docRef.id)
        .then(() => {
          likeImg.src = `${greyPaw}`;
        })
        .catch((error) => {
          throw new Error(`${error.message}`);
        });
    });
  } else {
    likesCount.innerHTML = `(${likesArr.length})`;
    likeImg.src = `${greyPaw}`;
    likeImg.addEventListener('click', () => {
      addLike(docRef.id, likesArr);
    })
  }

  wrapper.appendChild(likeImg);
  wrapper.appendChild(likesCount);
  return wrapper;
};
