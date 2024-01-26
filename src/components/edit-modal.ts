import { services } from '../services/index';

const { editPost } = services();

export const editModal = (
  content: string,
  docId: string
): HTMLDialogElement => {
  const dialog = document.createElement('dialog');
  const wrapper = document.createElement('div');
  const text = document.createElement('h3');
  const input = document.createElement('textarea');
  const editButton = document.createElement('button');
  const cancelButton = document.createElement('button');

  dialog.id = 'edit-modal';
  dialog.classList.add('modal', 'edit-modal');
  wrapper.classList.add('wrapper', 'dialog-wrapper');
  cancelButton.classList.add('button', 'cancel-button', 'small-button');
  editButton.classList.add('button', 'edit-button', 'small-button');
  cancelButton.textContent = 'Cancel';
  editButton.textContent = 'Edit';
  text.innerText = 'Edit your post:';
  input.id = 'new-input';
  input.classList.add('input');
  input.innerText = `${content}`;

  while (dialog.hasChildNodes()) {
    dialog.removeChild(dialog.firstChild!);
  }

  editButton.addEventListener('click', async () => {
    let newInput = document.getElementById('new-input')!.innerText;
    newInput = input.value;
    await editPost(newInput, docId);
  });

  cancelButton.addEventListener('click', () => dialog.close());

  wrapper.appendChild(text);
  wrapper.appendChild(input);
  wrapper.appendChild(editButton);
  wrapper.appendChild(cancelButton);
  dialog.appendChild(wrapper);
  return dialog;
};
