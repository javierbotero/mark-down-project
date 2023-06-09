import { createRoot } from 'react-dom/client';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
      <App />
  </Provider>
);
