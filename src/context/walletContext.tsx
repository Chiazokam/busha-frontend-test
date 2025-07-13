import { createContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { WalletSaveType, WalletType } from '../types';
import { useMount } from '../hooks/useMount';

export const WalletsContext = createContext({ 
    wallets: { data: [] as WalletType[], loading: false, error: '', refetch: () => {}, saveWallet: (wallet: WalletSaveType) => {} },
    wallet: { data: {} as WalletType | undefined, error: '', setError: (err: string) => {}, clearError: () => {} }
});

export const WalletsContextProvider = ({ children }: { children: ReactNode }) => {
    const [data, setData] = useState<WalletType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [createError, setCreateError] = useState('');
    const [savedData, setSavedData] = useState<WalletType | undefined>();
    const isMounted = useMount();

    const fetchWallets = useCallback(async () => {
        try {
            setLoading(true)
            setError('')
            const wallets = await fetch('http://localhost:3090/wallets', {
                method: 'GET'
            })

            if (isMounted) {
                const data = await wallets.json()
                setLoading(false)
                setData(data)
            }
        } catch (error) {
            if (isMounted) {
                setLoading(false)
                setError('Network Error')
            }
        }
    }, [isMounted])

     useEffect(() => {
        fetchWallets()
    }, [fetchWallets])


    const saveWallet = async (wallet: WalletSaveType) => {
        try {
            setCreateError('')
            const created = await fetch('http://localhost:3090/accounts', {
                method: 'POST',
                body: JSON.stringify(wallet)
            })

            if (created.ok) {
                const data = await created.json()
                setCreateError('')
                setSavedData(data)
            } else {
                setCreateError('Network Error')
            }
        } catch (error) {
            setCreateError('Network Error')
        }
    }

    const clearError = () => {
        setCreateError('');
    }

    return (
      <WalletsContext.Provider value={{ wallets: { data, loading, error, refetch: fetchWallets, saveWallet }, wallet: { data: savedData, error: createError, setError: setCreateError, clearError }}}>
        {children}
      </WalletsContext.Provider>
    );
  };
