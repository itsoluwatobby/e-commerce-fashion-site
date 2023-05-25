import {Home} from "./pages/Home";
import {ProductList} from "./pages/ProductList";
import {Product} from "./pages/Product";
import {Register} from "./pages/Register";
import {Login} from "./pages/Login";
import {Cart} from "./pages/Cart";
import { Route, Routes } from 'react-router-dom'
import { Layout } from "./components/Layout";
import { NotFound } from "./pages/NotFound";

function App() {

  return (
    <main className="App">
      <Routes>
        
        <Route path={'/'} element={<Home />} />
        
        <Route path='/' element={<Layout />}>
          <Route path='/productList' element={<ProductList />} />
          <Route path='/product' element={<Product />} />
          <Route path='/category/:cartId' element={<Cart />} />
        </Route>
        
        <Route path={'/signIn'} element={<Login />} />
        <Route path={'/signUp'} element={<Register />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default App
