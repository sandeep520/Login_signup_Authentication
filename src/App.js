import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
// import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Registration from "./components/Registration";
import Header from "./components/Header";
import ForgotPassword from './components/ForgotPassword'
import Contact from "./components/Contact";

function App() {
  return (
    <Container>
      <Row>
        
          <UserAuthContextProvider>

              <Header/>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route path="/contact" element={<Contact />} />



            </Routes>
          </UserAuthContextProvider>
        
      </Row>
    </Container>
  );
}

export default App;
