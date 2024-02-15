export const input = (
  name: string,
  id: string,
  type?: 'password' | 'email' | 'text'
): HTMLDivElement => {
  const wrapper = document.createElement('div');
  const input = document.createElement('input');
  const label = document.createElement('label');

  wrapper.classList.add('input-wrapper');
  input.classList.add('input', 'input-text');
  label.classList.add('label', 'input-label');

  input.type = type || 'search';
  input.id = `${id}`;
  input.autocomplete = 'new-password';
  input.placeholder = ' ';
  input.name = 'nope';
  input.required = true;

  label.setAttribute('for', `${id}`);
  label.textContent = `${name}`;

  wrapper.appendChild(input);
  wrapper.appendChild(label);

  return wrapper;
};
