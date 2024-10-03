import { Route, BrowserRouter, Routes } from 'react-router-dom';
import App from './App';
import { HomePage } from './pages/HomePage/HomePage';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { GeneratorsComponent } from './components/Catalog/GeneratorsComponent/GeneratorsComponent';
import { AllProductsComponent } from './components/Catalog/AllProductsComponent/AllProductsComponent';
import { NotFoundPage } from './pages/NotFoundPage';
import { BatteriesComponent } from './components/Catalog/BatteriesComponent/BatteriesComponent';
import { InvertersComponent } from './components/Catalog/InvertersComponent/InvertersComponent';
import { OthersComponent } from './components/Catalog/OthersComponent/OthersComponent';
import { OurCatalog } from './pages/OurCatalog/OurCatalog';

export const Root = () => (
  <Provider store={store}>
    <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="categories" element={<OurCatalog />} />
          <Route path="categories/generators" element={<GeneratorsComponent />} />
          <Route path="categories/batteries" element={<BatteriesComponent />} />
          <Route path="categories/inverters" element={<InvertersComponent />} />
          <Route path="categories/others" element={<OthersComponent />} />
          <Route path="products" element={<AllProductsComponent />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
