import { createContext, useState, useEffect, ReactNode } from 'react';
import { AccountType } from '../types';

export const AccountsContext = createContext({ accounts: { data: [] as AccountType[], loading: false, error: '', refetch: () => {}, updateAccounts: (account: AccountType) => {}  }});

export const AccountsContextProvider = ({ children }: { children: ReactNode }) => {
    const [data, setData] = useState<AccountType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

     useEffect(() => {
        const controller = new AbortController();
        fetchAccounts()

        return () => {
            controller.abort();
        };
    }, [])

    const fetchAccounts = async () => {
        try {
            const accounts = await fetch('https://my-json-server.typicode.com/bushaHQ/busha-frontend-test/accounts', {
                method: 'GET'
            })

            if (!accounts.ok) {
                setLoading(false)
                setError('Accounts Could not be fetched')
            }
            const data = await accounts.json()
            setLoading(false)
            setData(data)
        } catch (error) {
            setLoading(false)
            setError('Network Error')
        }
    }

    const updateAccounts = (account: AccountType) => {
        setData(prev => [account, ...prev])
    }
 
    return (
      <AccountsContext.Provider value={{ accounts: { data, loading, error, refetch: fetchAccounts, updateAccounts }}}>
        {children}
      </AccountsContext.Provider>
    );
  };