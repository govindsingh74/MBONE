  'use client';
  
  import { ConnectButton } from '@rainbow-me/rainbowkit';
  
  export default function WalletConnect() {
    return (
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted,
        }) => {
          const ready = mounted && authenticationStatus !== 'loading';
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus ||
              authenticationStatus === 'authenticated');
  
          return (
            <div
              {...(!ready && {
                'aria-hidden': true,
                'style': {
                  opacity: 0,
                  pointerEvents: 'none',
                  userSelect: 'none',
                },
              })}
            >
              {(() => {
                if (!connected) {
                  return (
                    <button
                      onClick={openConnectModal}
                      type="button"
                      className="bg-brand-accent text-white px-6 py-2 rounded-full font-bold hover:bg-opacity-90 transition-colors flex items-center space-x-2"
                    >
                      <span>Connect Wallet</span>
                    </button>
                  );
                }
  
                if (chain.unsupported) {
                  return (
                    <button
                      onClick={openChainModal}
                      type="button"
                      className="bg-red-500 text-white px-6 py-2 rounded-full font-bold hover:bg-opacity-90 transition-colors"
                    >
                      Wrong network
                    </button>
                  );
                }
  
                return (
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={openChainModal}
                      className="bg-brand-primary text-white px-4 py-2 rounded-full font-bold hover:bg-opacity-90 transition-colors"
                      type="button"
                    >
                      {chain.hasIcon && (
                        <div
                          style={{
                            background: chain.iconBackground,
                            width: 12,
                            height: 12,
                            borderRadius: 999,
                            overflow: 'hidden',
                            marginRight: 4,
                          }}
                        >
                          {chain.iconUrl && (
                            <img
                              alt={chain.name ?? 'Chain icon'}
                              src={chain.iconUrl}
                              style={{ width: 12, height: 12 }}
                            />
                          )}
                        </div>
                      )}
                      {chain.name}
                    </button>
  
                    <button
                      onClick={openAccountModal}
                      type="button"
                      className="bg-brand-accent text-white px-6 py-2 rounded-full font-bold hover:bg-opacity-90 transition-colors"
                    >
                      {account.displayName}
                      {account.displayBalance
                        ? ` (${account.displayBalance})`
                        : ''}
                    </button>
                  </div>
                );
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>
    );
  }