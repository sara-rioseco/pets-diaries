import { services } from '../services/index';

const { deletePost } = services();

export const deleteModal = (docId: string): HTMLDialogElement => {
  const dialog = document.createElement('dialog');
  const wrapper = document.createElement('div');
  const text = document.createElement('h3');
  const deleteButton = document.createElement('button');
  const cancelButton = document.createElement('button');

  dialog.id = 'delete-modal';
  dialog.classList.add('modal', 'delete-modal');
  wrapper.classList.add('wrapper', 'dialog-wrapper');
  cancelButton.classList.add('button', 'cancel-button', 'small-button');
  deleteButton.classList.add('button', 'delete-button', 'small-button');
  cancelButton.textContent = 'Cancel';
  deleteButton.textContent = 'Delete';
  text.innerText = 'Do you want to delete this post?';

  while (dialog.hasChildNodes()) {
    dialog.removeChild(dialog.firstChild!);
  }

  deleteButton.addEventListener('click', async () => {
    await deletePost(docId);
  });

  cancelButton.addEventListener('click', () => dialog.close());

  wrapper.appendChild(text);
  wrapper.appendChild(deleteButton);
  wrapper.appendChild(cancelButton);
  dialog.appendChild(wrapper);
  return dialog;
};
