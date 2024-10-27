import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import '@mui/material/styles';
import { useLocation } from 'react-router-dom';
// declare module '@mui/material/styles' {
//   interface Palette {
//     button: {
//       hover: string;
//       pressed: string;
//       disabled: string;
//     };
//   }
//   interface PaletteOptions {
//     button?: {
//       hover?: string;
//       pressed?: string;
//       disabled?: string;
//     };
//   }
// }
// declare module '@mui/material/styles' {
//   interface TypographyVariants {
//     thirdText: React.CSSProperties;
//     thirdText2: React.CSSProperties;
//     buttonText: React.CSSProperties;
//     tabBarRegular: React.CSSProperties;
//     tabBarBold: React.CSSProperties;
//   }

//   interface TypographyVariantsOptions {
//     thirdText?: React.CSSProperties;
//     thirdText2?: React.CSSProperties;
//     buttonText: React.CSSProperties;
//     tabBarRegular: React.CSSProperties;
//     tabBarBold: React.CSSProperties;
//   }
// }
// declare module '@mui/material/Typography' {
//   interface TypographyPropsVariantOverrides {
//     thirdText: true;
//     thirdText2: true;
//     buttonText: true;
//     tabBarRegular: true;
//     tabBarBold: true;
//   }
// }

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#027979',
//       light: '#fbffff'
//     },
//     secondary: {
//       main: '#dede1c'
//     },
//     success: {
//       main: '#8fe478'
//     },
//     error: {
//       main: '#e6735f'
//     },
//     warning: {
//       main: '#fbd13e'
//     },
//     info: {
//       main: '#4599e7'
//     },
//     grey: {
//       '600': '#1d1d1d',
//       '500': '#3d3d3d',
//       '400': '#5d5d5d',
//       '300': '#7d7d7d',
//       '200': '#9d9d9d',
//       '100': '#dcdcdc',
//       '50': '#fcfcfc'
//     },
//     button: {
//       hover: '#014343',
//       pressed: '#013232',
//       disabled: '#c6d7d7'
//     }
//   },
//   typography: {
//     fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
//     h1: {
//       fontWeight: 600,
//       fontSize: '28px',
//       lineHeight: '42px'
//     },
//     h2: {
//       fontWeight: 600,
//       fontSize: '24px',
//       lineHeight: '36px'
//     },
//     h3: {
//       fontWeight: 600,
//       fontSize: '18px',
//       lineHeight: '27px'
//     },
//     h4: {
//       fontWeight: 600,
//       fontSize: '14px',
//       lineHeight: '24px'
//     },
//     body1: {
//       fontWeight: 400,
//       fontSize: '16px',
//       lineHeight: '24px'
//     },
//     body2: {
//       fontWeight: 400,
//       fontSize: '14px',
//       lineHeight: '21px'
//     },
//     thirdText: {
//       fontWeight: 400,
//       fontSize: '12px',
//       lineHeight: '18px'
//     },
//     thirdText2: {
//       fontWeight: 400,
//       fontSize: '12px',
//       lineHeight: '12px'
//     },
//     buttonText: {
//       fontWeight: 600,
//       fontSize: '16px',
//       lineHeight: '24px'
//     },
//     tabBarRegular: {
//       fontWeight: 600,
//       fontSize: '10px',
//       lineHeight: '12px'
//     },
//     tabBarBold: {
//       fontWeight: 700,
//       fontSize: '10px',
//       lineHeight: '15px'
//     }
//   }
// });

function App() {
  const location = useLocation();

  const isCategoriesPage = location.pathname.includes('categories');
  const isBasketPage = location.pathname.includes('basket');
  const isProfilePage = location.pathname.includes('profile');
  const isManufacturesPage = location.pathname.includes('manufacturers');
  const isDeliveryPage = location.pathname.includes('delivery');
  // const isGuarancePage = location.pathname.includes('guarantee');
  const isContactsPage = location.pathname.includes('contacts');
  const isOfertaPage = location.pathname.includes('oferta');
  const isConfidentialPage = location.pathname.includes('confidential');
  return (
    <div className="App">
      {}
      <Header />
      <Outlet />
      {!isCategoriesPage &&
        !isBasketPage &&
        !isProfilePage &&
        !isManufacturesPage &&
        !isDeliveryPage &&
        // !isGuarancePage &&
        !isContactsPage &&
        !isOfertaPage &&
        !isConfidentialPage && <Footer />}
    </div>
  );
}

export default App;
