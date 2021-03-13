import createElement from '../lib/createElement';
import SignInButton from '../components/SignInButton';

export default (props) => createElement('div', {
  className: 'sign-in',
  children: [
    SignInButton({ disabled: !!props.store.getState().loading }),
  ],
});
