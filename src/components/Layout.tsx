import { useState } from "react";

function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#fdf6f0]">

      {/* 🔝 TOPBAR */}
      <header className="flex justify-between items-center px-6 py-4 bg-[#6f4e37] text-white shadow-md">

        <div className="flex items-center gap-4">
          <button onClick={() => setOpen(!open)} className="text-xl">
            ☰
          </button>

          <h1 className="text-lg font-semibold tracking-wide">
            Zelma’s Dashboard
          </h1>
        </div>

        <span className="text-sm">User</span>
      </header>

      {/* 🧱 BODY */}
      <div className="flex flex-1">

        {/* 📚 SIDEBAR */}
        <aside
          className={`fixed top-0 left-0 h-full w-64 bg-[#3b2f2f] text-white transform transition-transform duration-300 z-20
          ${open ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="p-6">
            <h2 className="text-xl font-bold mb-6 text-[#c4a484]">
              Menu
            </h2>

            <nav className="flex flex-col gap-4">
              <a className="hover:text-[#c4a484] cursor-pointer">Dashboard</a>
              <a className="hover:text-[#c4a484] cursor-pointer">Orders</a>
              <a className="hover:text-[#c4a484] cursor-pointer">Products</a>
              <a className="hover:text-[#c4a484] cursor-pointer">Customers</a>
              <a className="hover:text-[#c4a484] cursor-pointer">Reports</a>
            </nav>
          </div>
        </aside>

        {/* 🔲 OVERLAY */}
        {open && (
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/40 z-10"
          />
        )}

        {/* 📄 MAIN */}
        <main className="flex-1 p-8">
          {children}
        </main>

      </div>

      {/* 🔻 FOOTER (FIXED POSITION ISSUE) */}
      <footer className="bg-[#6f4e37] text-white text-center py-4 mt-auto">
        All rights reserved
      </footer>

    </div>
  );
}

export default Layout;