import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, GlobalStyles } from '@mui/material';

import App from './App';
import { HomePage } from './pages/HomePage/HomePage';
import { GeneratorsComponent } from './pages/GeneratorsComponent/GeneratorsComponent';
import { AllProductsComponent } from './pages/AllProductsComponent/AllProductsComponent';
import { NotFoundPage } from './pages/NotFoundPage';
import { BatteriesComponent } from './pages/BatteriesComponent/BatteriesComponent';
import { InvertersComponent } from './pages/InvertersComponent/InvertersComponent';
import { OthersComponent } from './pages/OthersComponent/OthersComponent';
import { Article1 } from './pages/Article1/Article1';
import { Article2 } from './pages/Article2/Article2';
import { Article3 } from './pages/Article3/Article3';
import { AllArticles } from './pages/AllArticles/AllArticles';
import { OurCatalog } from './pages/OurCatalog/OurCatalog';
import { store } from './store/store';
import { theme } from './theme/theme';
import './reset.scss';
import { Basket } from './pages/Basket/Basket';
import { Profile } from './pages/Profile/Profile';
import { Manufactures } from './pages/Manufactures/Manufactures';
import { DeliveryAndPayment } from './pages/DeliveryAndPayment/DeliveryAndPayment';
import { Guarantee } from './pages/Guarantee/Guarantee';
import { Favorites } from './pages/Favorites/Favorites';
import { Confidential } from './pages/Confidential/Confidential';

export const Root = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: '#f0f0f0'
          }
        }}
      />
      <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="categories" element={<OurCatalog />} />
            <Route path="/generators" element={<GeneratorsComponent />} />
            <Route path="/batteries" element={<BatteriesComponent />} />
            <Route path="/inverters" element={<InvertersComponent />} />
            <Route path="/others" element={<OthersComponent />} />
            <Route path="products" element={<AllProductsComponent />} />
            <Route path="article/1" element={<Article1 />} />
            <Route path="article/2" element={<Article2 />} />
            <Route path="article/3" element={<Article3 />} />
            <Route path="all-articles" element={<AllArticles />} />
            <Route path="basket" element={<Basket />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="profile" element={<Profile />} />
            <Route path="manufacturers" element={<Manufactures />} />
            <Route path="delivery" element={<DeliveryAndPayment />} />
            <Route path="guarantee" element={<Guarantee />} />
            <Route path="confidential" element={<Confidential />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);
