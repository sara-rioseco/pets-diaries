export const aboutModal = (): HTMLDialogElement => {
  const dialog = document.createElement('dialog');
  const wrapper = document.createElement('div');
  const title = document.createElement('h2');
  const about = document.createElement('p');
  const footer = document.createElement('p');
  const button = document.createElement('button');

  dialog.id = 'about-modal';
  dialog.classList.add('modal', 'about-modal');
  wrapper.classList.add('wrapper', 'dialog-wrapper');
  button.classList.add('button', 'close-button');
  button.textContent = 'Close';

  while (dialog.hasChildNodes()) {
    dialog.removeChild(dialog.firstChild!);
  }

  title.innerText = "About Pets' Diaries";
  about.innerText =
    "Pets' Diaries is a web app that works as a social network for pet lovers. Here you can share funny stories, care tips, adoption advice or anything you want related to our beloved pets. You can sign up with your email or login with a Google account to access the feed and create, edit, delete, like and unlike posts. Please share some of your stories with us.\nHave fun!";
  footer.innerText = 'Developed by Sara Rioseco 2024';

  button.addEventListener('click', () => dialog.close());

  wrapper.appendChild(title);
  wrapper.appendChild(about);
  wrapper.appendChild(footer);
  wrapper.appendChild(button);
  dialog.appendChild(wrapper);
  return dialog;
};
