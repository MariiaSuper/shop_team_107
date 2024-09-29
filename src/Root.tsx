import { Route, BrowserRouter, Routes } from 'react-router-dom';
import App from './App';
import { HomePage } from './components/HomePage/HomePage';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { GeneratorsComponent } from './components/Catalog/GeneratorsComponent/GeneratorsComponent';
import { AllProductsComponent } from './components/Catalog/AllProductsComponent/AllProductsComponent';
import { NotFoundPage } from './components/NotFoundPage';
import { BatteriesComponent } from './components/Catalog/BatteriesComponent/BatteriesComponent';
import { InvertersComponent } from './components/Catalog/InvertersComponent/InvertersComponent';
import { OthersComponent } from './components/Catalog/OthersComponent/OthersComponent';

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
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
