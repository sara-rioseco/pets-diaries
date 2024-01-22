export function utils(): object {
  const isPasswordValid = (input: string, confirm: string): boolean =>
    input === confirm;

  const isEmailValid = (email: string): boolean =>
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);

  return {
    isPasswordValid,
    isEmailValid,
  };
}
