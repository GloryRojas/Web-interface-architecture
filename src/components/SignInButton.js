import Button from './Button';

export default (props) => Button({
  text: 'Sign in',
  disabled: !!props.disabled,
});
