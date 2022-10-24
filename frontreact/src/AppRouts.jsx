import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/auth';
import Index from './components/views/index';
import Promo from './components/views/promo';
import Nac from './components/views/nacio';
import Inter from './components/views/inter';
import Cad from './components/views/cadastro';
import FC from './components/views/FC';
import HT from './components/views/HT';
import Login from './components/views/log';

const AppRoutes = () => {
      return (
      <Router>
        <AuthProvider >
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
        </AuthProvider>
      </Router>
    )
  }
  export default AppRoutes;