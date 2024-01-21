export type Path = '/' | '/login' | '/signup' | '/feed' | '/profile';

export type Routes = {
  '/': Function;
  '/login': Function;
  '/signup': Function;
  '/feed': Function;
  '/profile': Function;
};
