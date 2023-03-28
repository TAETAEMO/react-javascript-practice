
import { 
  createBrowserRouter, 
  RouterProvider, 
  createRoutesFromElements,
  Route
 } from 'react-router-dom';
import ErrorPage from './page/Error';
import HomePage from './page/Home';
import ProductDetailPage from './page/ProductDetail';
import ProductsPage from './page/Products';
import RootLayout from './page/Root';


// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element= {<HomePage/>}/>
//     <Route path= '/products' element= {<ProductsPage/>}/>
//   </Route>
// );

const router = createBrowserRouter([
  {
   path: '/',
   element: <RootLayout />,
   errorElement: <ErrorPage />,
   children: [
     { index: true, path: '', element: <HomePage />},
     {path: 'products', element: <ProductsPage />},
     {path: 'products/:productId', element: <ProductDetailPage />}
   ],
  }
])

// const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
