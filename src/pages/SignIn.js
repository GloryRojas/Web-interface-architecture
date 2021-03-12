import SignInButton from '../components/SignInButton';
import createElement from '../lib/createElement';

export default () => createElement('div', {
  className: 'sign-in',
  children: [SignInButton()],
});
