import { Route, BrowserRouter, Routes } from 'react-router-dom';
import App from './App';
import { HomePage } from './components/HomePage/HomePage';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Catalog from './components/Catalog/Catalog';
import { GeneratorsComponent } from './components/Catalog/GeneratorsComponent/GeneratorsComponent';
import { AllProductsComponent } from './components/Catalog/AllProductsComponent/AllProductsComponent';
import { NotFoundPage } from './components/NotFoundPage';

export const Root = () => (
  <Provider store={store}>
    <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="generators" element={<GeneratorsComponent />} />
          <Route path="batteries" element={<GeneratorsComponent />} />
          <Route path="inverters" element={<GeneratorsComponent />} />
          <Route path="others" element={<GeneratorsComponent />} />
          <Route path="all-products" element={<AllProductsComponent />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
