import render from './lib/render';
import SignIn from './pages/SignIn';
import createStore from './lib/createStore';

const store = createStore({ loading: false });

const withStore = (Component) => (props) => Component({
  ...props,
  store,
});

const doRender = () => render(
  withStore(SignIn),
  document.getElementById('root'),
);

store.subscribe(doRender);

doRender();
