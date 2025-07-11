import { useEffect, useState } from "react";
import { Accounts } from "../components/Accounts";
import { AccountType } from '../types';

export const AccountsPage = () => {
    const [accounts, setAccounts] = useState<AccountType[]>([]);

    useEffect(() => {
        const fetchAccounts = async () => {
            try {
                const accounts = await fetch('https://my-json-server.typicode.com/bushaHQ/busha-frontend-test/accounts', {
                    method: 'GET'
                })

                if (!accounts.ok) {
                    throw new Error(`HTTP error! status: ${accounts.status}`);
                  }
                const data = await accounts.json()
                setAccounts(data)
            } catch (error) {
                console.log(error, 'nnnnn')
            }
          }
        fetchAccounts()
    }, [])

    return (
        <Accounts accounts={accounts} />
    )
}
