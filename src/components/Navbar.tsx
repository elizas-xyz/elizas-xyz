import React from 'react';
import { Link } from 'react-router-dom';
import { ConnectWallet } from './ConnectWallet';

export const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-[#1C1C1C] border-b border-[#2D2D2D]">
      <div className="container mx-auto px-4">
        <div className="flex-1">
          <Link to="/" className="text-[#FF6B00] text-2xl font-bold">
            Elizas.xyz
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/marketplace" className="text-white hover:text-[#FF6B00]">
                Marketplace
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="text-white hover:text-[#FF6B00]">
                Dashboard
              </Link>
            </li>
          </ul>
          <div className="ml-4">
            <ConnectWallet />
          </div>
        </div>
      </div>
    </div>
  );
};