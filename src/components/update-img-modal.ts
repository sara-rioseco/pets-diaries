import { Path } from '../models/models.ts';
import { services } from '../services/index.ts'

const { updateUser } = services();

export const updateImgModal = (onNavigate: (pathname: Path) => void): HTMLDialogElement => {
  const dialog = document.createElement('dialog');
  const wrapper = document.createElement('div');
  const text = document.createElement('p');
  const input = document.createElement('input');
  const updateButton = document.createElement('button');
  const cancelButton = document.createElement('button');

  dialog.classList.add('modal', 'update-modal');
  wrapper.classList.add('wrapper', 'dialog-wrapper');
  updateButton.classList.add('button', 'update-button', 'small-button');
  cancelButton.classList.add('button', 'cancel-button', 'small-button');
  text.innerText = 'Enter the url of you image';
  input.id = 'new-img';
  input.classList.add('input');
  updateButton.textContent = 'Change Picture';
  cancelButton.textContent = 'Cancel';

  while (dialog.hasChildNodes()) {
    dialog.removeChild(dialog.firstChild!);
  }

  updateButton.addEventListener('click', async () => {
    let newImg = (<HTMLInputElement>document.getElementById('new-img')).value;
    newImg = input.value;
    await updateUser({
      photoURL: newImg
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