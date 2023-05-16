import renderer from 'react-test-renderer';
import Editor from './Editor';
import { Provider } from 'react-redux';
import store from '../store';

it('checks print of component', () => {
  const component = renderer.create(
    <Provider store={store}>
      <Editor />
    </Provider>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})