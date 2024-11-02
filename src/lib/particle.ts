import { ParticleNetwork } from '@particle-network/auth';
import { WalletEntryPosition } from '@particle-network/connect';
import { Ethereum } from '@particle-network/chains';

export const particle = new ParticleNetwork({
  projectId: import.meta.env.VITE_PARTICLE_PROJECT_ID,
  clientKey: import.meta.env.VITE_PARTICLE_CLIENT_KEY,
  appId: import.meta.env.VITE_PARTICLE_APP_ID,
  chainName: Ethereum.name,
  chainId: Ethereum.id,
  wallet: {
    displayWalletEntry: true,
    defaultWalletEntryPosition: WalletEntryPosition.BR,
    supportChains: [Ethereum],
  },
});