import Home from './pages/home/index.ts';
import Login from './pages/login/index.ts';
import SignUp from './pages/signup/index.ts';
import Feed from './pages/feed/index.ts';
import Profile from './pages/profile/index.ts';
import { Path, Routes } from './models/models.ts';
import './style.css';

const rootDiv: HTMLElement = document.getElementById('root')!;
const routes: Routes = {
  '/': Home,
  '/login': Login,
  '/signup': SignUp,
  '/feed': Feed,
  '/profile': Profile,
};
const onNavigate = (pathname: Path, root = rootDiv): void => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }
  root.appendChild(routes[pathname](onNavigate));
};

window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[window.location.pathname as Path](onNavigate));
};
rootDiv.appendChild(routes[window.location.pathname as Path](onNavigate));

