import Links from "./Links";
import Search from "./Search";

function Navbar() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Search />
      <Links />
    </div>
  )
}

export default Navbar;
