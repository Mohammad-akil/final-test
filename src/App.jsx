import Booklist from "./Booklist";
import Navbar from "./Navbar";
import UserList from "./UserList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/booklist" element={<Booklist />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
