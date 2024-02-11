export const aboutModal = (): HTMLDialogElement => {
  const dialog = document.createElement('dialog');
  const wrapper = document.createElement('div');
  const title = document.createElement('h2');
  const about = document.createElement('p');
  const about2 = document.createElement('p');
  const footer = document.createElement('p');
  const button = document.createElement('button');

  dialog.classList.add('modal', 'about-modal');
  wrapper.classList.add('wrapper', 'dialog-wrapper');
  title.classList.add('title');
  button.classList.add('button', 'close-button', 'small-button');
  button.textContent = 'Close';

  while (dialog.hasChildNodes()) {
    dialog.removeChild(dialog.firstChild!);
  }

  title.textContent = "About Pets' Diaries";
  about.textContent =
    "Pets' Diaries is a web app that works as a social network for pet lovers. Here you can share funny stories, care tips, adoption advice or anything you want related to our beloved pets.";
  about2.textContent = " You can sign up with your email or login with a Google account to access the feed and create, edit, delete, like and unlike posts. Please share some of your stories with us.\nHave fun!"
  footer.textContent = 'Developed by Sara Rioseco© 2024';

  button.addEventListener('click', () => dialog.close());

  wrapper.appendChild(title);
  wrapper.appendChild(about);
  wrapper.appendChild(about2);
  wrapper.appendChild(footer);
  wrapper.appendChild(button);
  dialog.appendChild(wrapper);
  return dialog;
};
