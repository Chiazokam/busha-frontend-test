import { createContext, useState, useEffect, ReactNode } from 'react';
import { WalletSaveType, WalletType } from '../types';

export const WalletsContext = createContext({ 
    wallets: { data: [] as WalletType[], loading: false, error: '', refetch: () => {}, saveWallet: (wallet: WalletSaveType) => {} },
    wallet: { saveError: '', isSaving: false, clearError: () => {} }
});

export const WalletsContextProvider = ({ children }: { children: ReactNode }) => {
    const [data, setData] = useState<WalletType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [isSaving, setIsSaving] = useState(false);
    const [saveError, setSaveError] = useState('');

     useEffect(() => {
        let isMounted = true;

        if (isMounted) {
            fetchWallets()
        }

        return () => {
            isMounted = false; 
        };
    }, [])

    const fetchWallets = async () => {
        try {
            const wallets = await fetch('http://localhost:3090/wallets', {
                method: 'GET'
            })

            if (!wallets.ok) {
                setLoading(false)
                setError('Wallets could not be fetched')
            } else {
                const data = await wallets.json()
                setLoading(false)
                setData(data)
            }
        } catch (error) {
            setLoading(false)
            setError('Network Error')
        }
    }

    const saveWallet = async (wallet: WalletSaveType) => {
        try {
            const created = await fetch('http://localhost:3090/accounts', {
                method: 'POST',
                body: JSON.stringify(wallet)
            })

            if (!created.ok) {
                setIsSaving(false)
                setSaveError('Wallet could not be created')
            }
            setIsSaving(false)
        } catch (error) {
            setIsSaving(false)
            setSaveError('Network Error')
        }
    }

    const clearError = () => {
        setSaveError('');
    }

    return (
      <WalletsContext.Provider value={{ wallets: { data, loading, error, refetch: fetchWallets, saveWallet }, wallet: { saveError, isSaving, clearError }}}>
        {children}
      </WalletsContext.Provider>
    );
  };
