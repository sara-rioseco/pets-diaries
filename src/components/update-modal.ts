import { auth } from '../firebase.ts'
import { Path } from '../models/models.ts';
import { services } from '../services/index.ts'

const { updateUser } = services();

export const updateUsernameModal = (onNavigate: (pathname: Path) => void): HTMLDialogElement => {
  const dialog = document.createElement('dialog');
  const wrapper = document.createElement('div');
  const text = document.createElement('p');
  const input = document.createElement('textarea');
  const updateButton = document.createElement('button');
  const cancelButton = document.createElement('button');

  dialog.classList.add('modal', 'update-modal');
  updateButton.classList.add('button', 'update-button');
  cancelButton.classList.add('button', 'cancel-button');
  dialog.id = 'edit-modal';
  dialog.style.height = '200px';
  text.innerHTML = '';
  text.innerText = 'Enter your new username';
  input.id = 'new-name';
  input.style.height = '70px';
  input.innerText = auth.currentUser!.displayName!;
  input.style.width = '400px';
  updateButton.textContent = 'Change Username';
  cancelButton.textContent = 'Cancel';

  while (dialog.hasChildNodes()) {
    dialog.removeChild(dialog.firstChild!);
  }

  updateButton.addEventListener('click', async () => {
    let newName = document.getElementById('new-name')!.textContent!;
    newName = input.value;
    await updateUser({
      displayName: newName, photoURL: '',
    }).then(() => {
      dialog.close();
      onNavigate('/feed')
    }).catch((e) => {
      throw new Error(`${e}`)
    });
  });

  cancelButton.addEventListener('click', () => dialog.close());

  wrapper.appendChild(text);
  wrapper.appendChild(input);
  wrapper.appendChild(updateButton);
  wrapper.appendChild(cancelButton);
  dialog.appendChild(wrapper);
  return dialog;
};