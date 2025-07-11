import styled from "styled-components";
import { AccountType } from '../types';

export const Wallet = ({ account }: { account: AccountType }) => {

    const WalletWrapper = styled.div`
        width: 240px;
        height: 150px;
        background-color: #111111;
        border-radius: 10px;
        background-image: url("/card-decor.svg");
        background-size: cover;
        background-repeat: no-repeat;

         @media (max-width: 1350px) {
            width: 100%;
            max-width: 300px;
            height: 180px;
        }
    `;

    return (
        <WalletWrapper>

        </WalletWrapper>
    )
}