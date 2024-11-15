
import Portfolio from './pages/PortfolioV2'
import Enhance from './pages/enhanced-portfolio'
import { Analytics } from '@vercel/analytics/react';


function App() {

  return (
    <div>
      <Analytics />
      <Enhance />
    </div>
    
  )
}

export default App
