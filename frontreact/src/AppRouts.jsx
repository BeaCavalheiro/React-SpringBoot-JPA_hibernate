import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './context/auth';
import Index from './views/index';
import Promo from './views/promo';
import Nac from './views/nacio';
import Inter from './views/inter';
import Cad from './views/cadastro';
import FC from './views/FC';
import HT from './views/HT';
import Login from './views/log';
import ADM from './views/Adm'

const AppRoutes = () => {
      return (
      <Router>
         <Routes>
            <Route path='/' element={<Index/>} />
            <Route path='/Promo' element={<Promo />} />
            <Route path='/Nacionais' element={<Nac />} />
            <Route path='/Internacionais' element={<Inter />} />
            <Route path='/Cadastro' element={<Cad/>} />
            <Route path='/FaleConosco' element={<FC />} />
            <Route path='/HT' element={<HT />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/ADM' element={<ADM />} />
          </Routes>
       
      </Router>
    )
  }
  export default AppRoutes;