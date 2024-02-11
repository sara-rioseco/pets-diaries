export const topButton = (): HTMLElement => {
  const button = document.createElement('button');
  const icon = document.createElement('i');

  button.id = 'top-button';
  button.className = 'top-button';
  button.title = 'Go to top';
  icon.classList.add('fa', 'fa-chevron-up');


  button.appendChild(icon);
  return button;
}