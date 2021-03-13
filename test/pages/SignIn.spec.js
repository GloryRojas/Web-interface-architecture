import createStore from '../../src/lib/createStore';
import SignIn from '../../src/pages/SignIn';

describe('SignIn', () => {
  it('should return div with nested button', () => {
    const el = SignIn({ store: createStore() });
    expect(el.tagName).toBe('DIV');
    expect(el.className).toBe('sign-in');
    expect(el.children.length).toBe(1);
    expect(el.children[0].tagName).toBe('BUTTON');
    expect(el.children[0].innerText).toBe('Sign in');
  });
  it('should render enabled button by default', () => {
    const el = SignIn({ store: createStore() });
    expect(el.children[0].disabled).toBe(false);
  });
  it('should render enabled button when loading is false', () => {
    const el = SignIn({ store: createStore({ loading: false }) });
    expect(el.children[0].disabled).toBe(false);
  });
  it('should render disabled button when loading is true', () => {
    const el = SignIn({ store: createStore({ loading: true }) });
    expect(el.children[0].disabled).toBe(true);
  });
});
