//import Loadable from 'react-loadable';
import {lazy, Suspense} from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './scss/app.scss';
import MainLayout from './layouts/MainLayout';
import Cart from "./pages/Cart.tsx";


//const Cart = Loadable({
//  loader: () => import(/* webpackChunkName: "Cart" */ './pages/Cart'),
//  loading: () => <div>Идёт загрузка корзины...</div>,
//});

const FullPizza = lazy(() => import(/* webpackChunkName: "FullPizza" */ './pages/FullPizza'));
const NotFound = lazy(() => import(/* webpackChunkName: "NotFound" */ './pages/NotFound'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Идёт загрузка корзины...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="pizza/:id"
          element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <FullPizza />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
