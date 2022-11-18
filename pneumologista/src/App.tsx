import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './pages/Homepage';

function App() {


  return (
    <Router>
      <div className="max-w-xs mx-auto top-0 md:ml-48 2xl:ml-96 3xl:pl-96">
          <Header />
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          {/* <Route path="/signin" element={<SignInPage/>}/>
          <Route path="/register/" element={<SelectAccountType/>}/>
          <Route path="/register/details" element={<RegisterPage/>}/>
          <Route path="/profile" element={<ProfileComponent/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/myorders" element={<MyOrdersPage/>}/>
          <Route path="/admin" element={<AdminPage/>}/> */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
