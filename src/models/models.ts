export type Path = '/' | '/login' | '/signup' | '/feed' | '/profile';

export type OnNavigate = (path: Path, root?: HTMLElement) => void;
export type Routes = {
  '/': (onNavigate: (path: Path) => void) => HTMLElement;
  '/login': (onNavigate: (path: Path) => void) => HTMLElement;
  '/signup': (onNavigate: (path: Path) => void) => HTMLElement;
  '/feed': (onNavigate: (path: Path) => void) => HTMLElement;
  '/profile': (onNavigate: (path: Path) => void) => HTMLElement;
};
