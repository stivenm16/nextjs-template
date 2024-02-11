type LayoutProps = {
  children: React.ReactNode
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-indigo-950 ">
      <main className="flex-grow">{children}</main>
    </div>
  )
}

export default Layout
