export function utils() {
  const arePasswordsEqual = (input: string , confirm: string): boolean => input === confirm;
  const isPasswordValid = (password: string): boolean =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password);
  const isEmailValid = (email: string): boolean =>
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);

  return {
    arePasswordsEqual,
    isPasswordValid,
    isEmailValid,
  };
}
