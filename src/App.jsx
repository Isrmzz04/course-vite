import { RouterProvider, createBrowserRouter } from "react-router-dom"
import 'remixicon/fonts/remixicon.css'
import('preline')
import Home from "./pages/Home"
import ProductList from "./pages/ProductList"
import ProductDetail from "./pages/ProductDetail"
import Checkout from "./pages/Checkout"
import { Provider } from "react-redux"
import store from "./store/store"
import Payment from "./pages/Payment"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true,
        element: <ProductList />
      },
      {
        path: "detail/:id",
        element: <ProductDetail />
      },
      {
        path: "checkout/",
        element: <Checkout />
      },
      {
        path: "payment/",
        element: <Payment />
      }
    ]
  }
])

const App = () => {
  return (
    <>
      <Provider store={store}>        
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}

export default App