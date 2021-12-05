import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newpage/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import Bill from "./pages/bill/Bill";
import Submit from "./pages/submit/Submit";
import Upload from "./pages/upload/Upload";
import Form from "./pages/form/Form";
import Nov from "./pages/nov/Nov";

function App() {
  return (
    <Router>
      <Topbar />

      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/users" element={<UserList />}/>
          <Route path="/user/:userId" element={<User />}/>
          <Route path="/newUser" element={<NewUser/>}/>
          <Route path="/products" element={<ProductList />}/>
          <Route path="/product/:productId" element={<Product />}/>
          <Route path="/newproduct" element={<NewUser/>}/>
          <Route path="/bill"  element={<Bill/>}/>
          <Route path="/submit" element={<Submit/>}/>
          <Route path="/upload" element={<Upload/>}/>
          <Route path="/form"  element={<Form/>}/>
          <Route path="/nov"    element={< Nov/>}/>
         
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
