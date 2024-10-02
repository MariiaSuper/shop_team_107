import { Route, BrowserRouter, Routes } from 'react-router-dom';
import App from './App';
import { HomePage } from './pages/HomePage/HomePage';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { GeneratorsComponent } from './pages/GeneratorsComponent/GeneratorsComponent';
import { AllProductsComponent } from './pages/AllProductsComponent/AllProductsComponent';
import { NotFoundPage } from './pages/NotFoundPage';
import { BatteriesComponent } from './pages/BatteriesComponent/BatteriesComponent';
import { InvertersComponent } from './pages/InvertersComponent/InvertersComponent';
import { OthersComponent } from './pages/OthersComponent/OthersComponent';
import { UsefulArticlesComponent } from './components/UsefulArticlesComponent/UsefulArticlesComponent';
import { Article1 } from './pages/Article1/Article1';
import { Article2 } from './pages/Article2/Article2';
import { Article3 } from './pages/Article3/Article3';
import { AllArticles } from './pages/AllArticles/AllArticles';

export const Root = () => (
  <Provider store={store}>
    <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="generators" element={<GeneratorsComponent />} />
          <Route path="batteries" element={<BatteriesComponent />} />
          <Route path="inverters" element={<InvertersComponent />} />
          <Route path="others" element={<OthersComponent />} />
          <Route path="products" element={<AllProductsComponent />} />
          <Route path="/article" element={<UsefulArticlesComponent />} />
          <Route path="article/1" element={<Article1 />} />
          <Route path="article/2" element={<Article2 />} />
          <Route path="article/3" element={<Article3 />} />
          <Route path="all-articles" element={<AllArticles />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
