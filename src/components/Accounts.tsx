import styled from "styled-components";
import { Wallet } from "./Wallet";
import { AccountType } from '../types';
import Loader from "../components/shared/Loader";

const AccountsWrapper = styled.div`
    padding-left: 65px;

    @media (max-width: 950px) {
        padding-left: 20px;
    }

    @media (max-width: 768px) {
        padding-left: 0px;
    }
`;

const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 32px;
    font-weight: 700;
    margin-top: 0px;
    margin-bottom: 0px;
`;

const AddWallet = styled.p`
    margin-top: 0px;
    margin-bottom: 0px;
`;

const Divider = styled.hr`
    border: 0.5px solid #D3D5D880;
    margin-bottom: 24px;
`;

const CardsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    
    @media (max-width: 1350px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 640px) {
        grid-template-columns: repeat(2, 1fr);
        place-items: center;
    }

    @media (max-width: 530px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const Container = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ErrorMessage = styled.p`
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    color: #3E4C59;
    margin-top: 26px;
`;

const Button = styled.button`
    background-color: #000000;
    color: #ffffff;
    font-size: 18px;
    font-weight: 400;
    border-radius: 40px;
    cursor: pointer;
    padding: 18px 54px;
    margin-top: 42px;

    @media (max-width: 480px) {
        margin-top: 22px;
        padding: 14px 34px;
    }
`;

export const Accounts = ({ accounts, errorMessage, loading, refetch }: { accounts: AccountType[], errorMessage: string, loading: boolean, refetch: () => void }) => {

    return (
        <AccountsWrapper>
            <TitleWrapper>
                <Title>Wallets</Title>
                {(!loading && !errorMessage) && <AddWallet>+ Add new wallet</AddWallet>}
            </TitleWrapper>
            <Divider />

            {errorMessage ?
                <Container>
                    <img src="/error.svg" alt="error" />
                    <ErrorMessage>{errorMessage}</ErrorMessage>
                    <Button onClick={() => refetch()}>Try Again</Button>
                </Container> :
                loading ? 
                    <Container>
                        <Loader size={83.37} width={8} />
                    </Container> : 
                    <CardsWrapper>
                        {accounts.map((account) => <Wallet key={account.id} account={account} />)}
                    </CardsWrapper>
                }

        </AccountsWrapper>
    )
}
