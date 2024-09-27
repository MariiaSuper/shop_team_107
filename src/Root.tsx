import { Route, BrowserRouter, Routes } from 'react-router-dom';
import App from './App';
import { HomePage } from './components/HomePage';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Catalog from './components/Catalog/Catalog';
import { GeneratorsComponent } from './components/Catalog/GeneratorsComponent/GeneratorsComponent';
import { AllProductsComponent } from './components/Catalog/AllProductsComponent/AllProductsComponent';

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
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
