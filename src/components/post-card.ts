import { editModal } from "./edit-modal";
import { deleteModal } from "./delete-modal";
import { auth } from "../firebase";

export const postCard = (
  name: string,
  localDate: string,
  localTime: string,
  content: string,
  docId: string,
  spanLike: HTMLDivElement
): HTMLDivElement => {
  const loggedUser = auth.currentUser!.displayName
  const card = document.createElement('div');
  const wrapper = document.createElement('div');
  const title = document.createElement('p');
  const text = document.createElement('p');
  const buttons = document.createElement('div');
  const editButton = document.createElement('button');
  const deleteButton = document.createElement('button');
  const deleteDialog = deleteModal(`${docId}`);
  const editDialog = editModal(`${content}`, `${docId}`);

  card.classList.add('card', 'post-card');
  wrapper.classList.add('wrapper', 'post-card-wrapper');
  title.classList.add('title', 'post-title');
  text.classList.add('text', 'post-text');
  buttons.classList.add('buttons', 'button-group');
  editButton.classList.add('button', 'edit-button', 'post-edit-button');
  editButton.textContent = 'Edit';
  deleteButton.classList.add('button', 'edit-button', 'post-edit-button');
  deleteButton.textContent = 'Delete';
  title.textContent = `${name} published on ${localDate} at ${localTime} :`;
  text.textContent = `${content}`

  wrapper.appendChild(title);
  wrapper.appendChild(text);

  if (`${name}` === loggedUser) {

    editButton.addEventListener('click', () => {
      editDialog.showModal();
    })
  
    deleteButton.addEventListener('click', () => {
      deleteDialog.showModal();
    })

    buttons.appendChild(editButton)
    buttons.appendChild(deleteButton);
    wrapper.appendChild(buttons);
    wrapper.appendChild(editDialog);
    wrapper.appendChild(deleteDialog);
  }

  wrapper.appendChild(spanLike)
  card.appendChild(wrapper);
  return card;
};
