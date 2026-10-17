import { useState } from "react";
import { Search, ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState('')
  const { total: cartCount } = useCart()

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`/shop?search=${search}`)
  }

  return (
    <nav className="relative bg-white dark:bg-slate-900 transition-colors">
      <div className="mx-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto py-4  transition-all">

          <Link to="/" className="relative text-4xl font-semibold text-slate-700 dark:text-slate-100">
            <span className="text-green-600">vastra</span>cart<span className="text-green-600 text-5xl leading-0">.</span>
            <p className="absolute text-xs font-semibold -top-1 -right-8 px-3 p-0.5 rounded-full flex items-center gap-2 text-white bg-green-500">
              plus
            </p>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center gap-4 lg:gap-8 text-slate-600 dark:text-slate-300">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            {/* <Link to="/">About</Link> */}
            <Link to="/contact">Contact</Link>

            <form onSubmit={handleSearch} className="hidden xl:flex items-center w-xs text-sm gap-2 bg-slate-100 dark:bg-slate-800 px-4 py-3 rounded-full">
              <Search size={18} className="text-slate-600 dark:text-slate-300" />
              <input className="w-full bg-transparent outline-none placeholder-slate-600 dark:placeholder-slate-400 dark:text-slate-200" type="text" placeholder="Search products" value={search} onChange={(e) => setSearch(e.target.value)} required />
            </form>

            {/* <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition text-slate-600 dark:text-slate-300"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button> */}

            <Link to="/cart" className="relative flex items-center gap-2 text-slate-600 dark:text-slate-300">
              <ShoppingCart size={18} />
              Cart
              <button className="absolute -top-1 left-3 text-[8px] text-white bg-slate-600 size-3.5 rounded-full">{cartCount}</button>
            </Link>

            {/* <button className="px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full">
              Login
            </button> */}

          </div>

          {/* Mobile Menu */}
          {/* <div className="flex items-center gap-3 sm:hidden">
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle dark mode"
                            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition text-slate-600 dark:text-slate-300"
                        >
                            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                        <button className="px-7 py-1.5 bg-indigo-500 hover:bg-indigo-600 text-sm transition text-white rounded-full">
                            Login
                        </button>
                    </div> */}
        </div>
      </div>
      <hr className="border-gray-300 dark:border-slate-700" />
    </nav>
  )
}

export default Header;