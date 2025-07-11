import styled from "styled-components";
import { Wallet } from "./Wallet";
import { AccountType } from '../types';
import Loader from "../components/shared/Loader";

export const Accounts = ({ accounts }: { accounts: AccountType[] }) => {

    const AccountsWrapper = styled.div`
        padding-left: 65px;

        @media (max-width: 885px) {
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
            gap: 20px;
        }

        @media (max-width: 950px) {
            gap: 15px;
        }
        @media (max-width: 640px) {
            grid-template-columns: repeat(2, 1fr);
            place-items: center;
        }

        @media (max-width: 530px) {
            grid-template-columns: repeat(1, 1fr);
        }
    `;


    return (
        <AccountsWrapper>
            <TitleWrapper>
                <Title>Wallets</Title>
                {accounts.length > 0 && <AddWallet>+ Add new wallet</AddWallet>}
            </TitleWrapper>
            <Divider />

            {accounts.length === 0 ? <Loader /> : 
            <CardsWrapper>
                {[...accounts, ...accounts].map((account) => <Wallet account={account} />)}
            </CardsWrapper>}
        </AccountsWrapper>
    )
}
