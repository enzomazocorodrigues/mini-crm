function Navbar() {
  return (
    <header className="h-16 flex items-center gap-16 px-10 border-b border-slate-200">
      <h1 className="text-xl font-bold tracking-tight">Mini CRM</h1>
      <nav className="flex items-center gap-4">
        <a className="text-slate-500 text-sm font-medium" href="">Dashboard</a>
        <a className="text-sm text-slate-800 font-semibold" href="">Products</a>
        <a className="text-slate-500 text-sm font-medium" href="">Customers</a>
        <a className="text-slate-500 text-sm font-medium" href="">Sales</a>
      </nav>
    </header>
  )
}

export default Navbar
