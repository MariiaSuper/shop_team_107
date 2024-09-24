import { Route, BrowserRouter, Routes } from 'react-router-dom';
import App from './App';
import { HomePage } from './components/HomePage';
import { Provider } from 'react-redux';
import { store } from './store/store';

export const Root = () => (
  <Provider store={store}>
    <BrowserRouter basename={process.env.CREATE_REACT_APP_BASENAME}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
