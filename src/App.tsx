import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConnectProvider } from '@particle-network/connect-react-ui';
import { Ethereum } from '@particle-network/chains';
import { Navbar } from './components/Navbar';
import { Landing } from './pages/Landing';

function App() {
  return (
    <ConnectProvider
      options={{
        projectId: import.meta.env.VITE_PARTICLE_PROJECT_ID as string,
        clientKey: import.meta.env.VITE_PARTICLE_CLIENT_KEY as string,
        appId: import.meta.env.VITE_PARTICLE_APP_ID as string,
        chains: [Ethereum],
      }}
    >
      <Router>
        <div className="min-h-screen bg-[#1C1C1C] flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Landing />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ConnectProvider>
  );
}

export default App;