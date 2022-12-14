import {createContext ,useState} from 'react'


export const GlobalContext = createContext()

const Global = ({children}) => {
  const [show, setShow] = useState(false);
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
  }

const deleteProduct = (id) => {
  setProducts(products.filter(product => product.id != id))
}
const AddProduct = (form) => {
  setProducts((p)=> [...p,form] )
}

  return (
    <GlobalContext.Provider value={{products, setProducts,
      show, setShow, 
      fetchProducts, deleteProduct,AddProduct,
    }} >
      {children}
    </GlobalContext.Provider>
  )
}

export default Global
