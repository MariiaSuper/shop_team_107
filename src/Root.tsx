import { Route, BrowserRouter, Routes } from 'react-router-dom';
import App from './App';
import { HomePage } from './components/HomePage/HomePage';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { NotFoundPage } from './components/NotFoundPage';
import UsefulArticlesComponent from './components/UsefulArticlesComponent/UsefulArticlesComponent';

export const Root = () => (
  <Provider store={store}>
    <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/article" element={<UsefulArticlesComponent />} />
          {/* <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/all-articles" element={<AllArticlesPage />} /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
