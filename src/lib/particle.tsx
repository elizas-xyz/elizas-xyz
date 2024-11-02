import React from 'react';
import { ConnectKitProvider, createConfig } from '@particle-network/connectkit';
import { Ethereum } from '@particle-network/connectkit/chains';
import { evmWalletConnectors } from '@particle-network/connectkit/evm';
import { authWalletConnectors } from '@particle-network/connectkit/auth';
import { wallet, EntryPosition } from '@particle-network/connectkit/wallet';

const config = createConfig({
  projectId: import.meta.env.VITE_PARTICLE_PROJECT_ID as string,
  clientKey: import.meta.env.VITE_PARTICLE_CLIENT_KEY as string,
  appId: import.meta.env.VITE_PARTICLE_APP_ID as string,
  chains: [Ethereum],
  walletConnectors: [
    evmWalletConnectors({
      metadata: {
        name: 'Elizas.xyz',
        description: 'AI Agent Marketplace',
        url: 'https://elizas.xyz',
        icons: ['https://elizas.xyz/logo.png']
      }
    }),
    authWalletConnectors({
      authTypes: ['email', 'google', 'twitter', 'github'],
      fiatCoin: 'USD',
      promptSettingConfig: {
        promptMasterPasswordSettingWhenLogin: 1,
        promptPaymentPasswordSettingWhenSign: 1,
      },
    }),
  ],
  appearance: {
    theme: {
      '--pcm-accent-color': '#FF6B00',
      '--pcm-primary-button-background': '#FF6B00',
      '--pcm-primary-button-hover-background': '#E65000',
    },
  },
  plugins: [
    wallet({
      visible: true,
      entryPosition: EntryPosition.BR,
    }),
  ],
});

export const ParticleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ConnectKitProvider config={config}>
      {children}
    </ConnectKitProvider>
  );
};