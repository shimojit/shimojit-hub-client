import './App.css'

function App() {

  return (
    <div className="app">
      <header className="site-header">
        <div className="container">
          <div className="brand">Shimojit Hub</div>
          <nav className="site-nav">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="site-main container">
        {/* コンテンツをここに追加 */}
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p className="copyright">© 2025 Shimojit Hub</p>
          <nav className="footer-nav">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
