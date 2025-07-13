import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UploadArticle from './components/UploadArticle'

const App = ()=>{
  return(
    <>
    <ToastContainer position="top-right" autoClose={3000} />
    <UploadArticle />
    </>
  )
}

export default App