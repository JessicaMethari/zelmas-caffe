function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      
      {/* Logo */}
      <h1 className="text-xl font-bold text-gray-800">
        Zelma’s ☕
      </h1>

      {/* Links */}
      <div className="space-x-6 text-gray-600">
        <a href="#" className="hover:text-black">Home</a>
        <a href="#" className="hover:text-black">Menu</a>
        <a href="#" className="hover:text-black">About</a>
        <a href="#" className="hover:text-black">Contact</a>
      </div>

    </nav>
  );
}

export default Navbar;