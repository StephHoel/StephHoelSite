import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'

export default function App() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />

      <Route path="StephHoelSite/" element={<Home />} />
    </Routes>
  )
}
