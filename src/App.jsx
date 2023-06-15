import { BrowserRouter as Router } from "react-router-dom"
import { Footer, Header } from "./components"
import AppRoutes from "./routes/AppRoutes"

function App() {

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
