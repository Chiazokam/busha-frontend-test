import { createContext, useState, useEffect, ReactNode, useCallback } from 'react';

export const Context = createContext({ data: [], loading: false, error: '', refetch: () => {}  });

export const ContextProvider = ({ children }: { children: ReactNode }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [triggerRefetch, setTriggerRefetch] = useState(false)

    const refetch = useCallback(() => {
        setTriggerRefetch(true);
    }, []);

     useEffect(() => {
        const fetchAccounts = async () => {
            try {
                const accounts = await fetch('https://my-json-server.typicode.com/bushaHQ/busha-frontend-test/accounts', {
                    method: 'GET'
                })

                if (!accounts.ok) {
                    setLoading(false)
                    setError('Accounts Could not be fetched')
                    setTriggerRefetch(false)
                }
                const data = await accounts.json()
                setLoading(false)
                setData(data)
                setTriggerRefetch(false)
            } catch (error) {
                setLoading(false)
                setError('Network Error')
                setTriggerRefetch(false)
            }
            }
        fetchAccounts()
    }, [triggerRefetch])

    return (
      <Context.Provider value={{ data, loading, error, refetch}}>
        {children}
      </Context.Provider>
    );
  };