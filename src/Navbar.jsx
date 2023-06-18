import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex text-2xl gap-2 p-2 bg-slate-300">
      <Link to="/">Home</Link>
      <Link to="/booklist">Booklist</Link>
    </div>
  );
};

export default Navbar;
