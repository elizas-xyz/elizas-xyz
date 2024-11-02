import React from 'react';
import { ConnectButton } from '@particle-network/connectkit';
import '@particle-network/connectkit/dist/index.css';

export const ConnectWallet: React.FC = () => {
  return (
    <ConnectButton.Custom>
      {({ account, isConnecting, show }) => (
        <button
          onClick={show}
          disabled={isConnecting}
          className="btn bg-ai16z-orange hover:bg-[#E65000] text-white border-none"
        >
          {isConnecting ? 'Connecting...' : account ? `${account.slice(0, 6)}...${account.slice(-4)}` : 'Connect Wallet'}
        </button>
      )}
    </ConnectButton.Custom>
  );
};