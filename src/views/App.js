import logo from "./logo.svg";
import "./App.scss";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./Navigation/Navigation";
import Home from "./Example/Home";
import TodoListComponent from "./todos/TodoListComponent"
import MyComponent from "./Example/MyComponent"
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import ListUser from "./Users/ListUser";
import DetailUser from "./Users/DetailUser";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <Navigation />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Home /> */}
        {/* <MyComponent /> */}
        {/* <TodoListComponent /> */}
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/todo" element={<TodoListComponent />} />
        <Route path="/about" element={<MyComponent />} />
        <Route path="/user" element={<ListUser />} exact="true"/>
        <Route path="/user/:id" element={<DetailUser />} />
      </Routes>
      </header>
     

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
    </BrowserRouter>
  );
}

export default App;
