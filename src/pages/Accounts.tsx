import { useContext } from "react";
import { Accounts } from "../components/Accounts";
import { Context } from "../context";

export const AccountsPage = () => {
    const { data, loading, error, refetch } = useContext(Context);

    return (
        <Accounts accounts={data} errorMessage={error} loading={loading} refetch={refetch}  />
    )
}
