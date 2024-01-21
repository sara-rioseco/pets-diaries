import Home from './pages/home/index.ts';
import Login from './pages/login/index.ts';
import SignUp from './pages/signup/index.ts';
import Feed from './pages/feed/index.ts';
import Profile from './pages/profile/index.ts';
import './style.css';

type Root = HTMLElement;
type Path = '/' | '/login' | '/signup' | '/feed' | '/profile';
type Routes = {
  '/': Function;
  '/login': Function;
  '/signup': Function;
  '/feed': Function;
  '/profile': Function;
};

const root: Root = document.getElementById('root')!;
const routes: Routes = {
  '/': Home,
  '/login': Login,
  '/signup': SignUp,
  '/feed': Feed,
  '/profile': Profile,
};
const onNavigate = (pathname: Path, root: Root): void => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }
  root.appendChild(routes[pathname](onNavigate));
};

window.onpopstate = () => {
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }
  root.appendChild(routes[window.location.pathname as Path](onNavigate));
};
root.appendChild(routes[window.location.pathname as Path](onNavigate));

