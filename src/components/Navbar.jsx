function Navbar() {
  return (
    <header className="h-16 flex items-center gap-16 px-10 border-b border-slate-200">
      <h1 className="text-xl font-bold tracking-tight">Mini CRM</h1>
      <nav className="flex items-center gap-4">
        <a className="text-slate-500 text-sm font-medium hover:text-slate-700 transition-colors" href="">Dashboard</a>
        <a className="text-sm text-slate-800 font-semibold" href="">Products</a>
        <a className="text-slate-500 text-sm font-medium hover:text-slate-700 transition-colors" href="">Customers</a>
        <a className="text-slate-500 text-sm font-medium hover:text-slate-700 transition-colors" href="">Sales</a>
      </nav>
    </header>
  )
}

export default Navbar
