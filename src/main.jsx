 import ReactDOM from 'react-dom/client'
import App from './App'
import Global from './context/Global'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";

 
ReactDOM.createRoot(document.getElementById('root')).render(
  <Global>
  <ThemeProvider>
      <App />
  </ThemeProvider>
  </Global>,
)
