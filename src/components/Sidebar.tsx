import styled from "styled-components";

interface Props {
    onClose: () => void
}

const SidebarContainer = styled.div`
    

    @media (max-width: 768px) {
        top: 0;
        left: 0;
        background-color: #ffffff;
        height: 100%;
        position: absolute;
        width: 50%;
    }

    @media (min-width: 768px) {
        display: none;
    }
`;

const SidebarHeader = styled.div`
    display: flex;
    justify-content: right;
    padding-top: 15px;
    padding-right: 15px;
`;

const CloseButton = styled.button`
    font-weight: 100;
    cursor: pointer;
    width: 30px;
    height: 30px;
    font-size: 18px;
    color: $color-dark;
    border: 0.5px solid #383838;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
        display: none;
    }
`;


export const Sidebar = ({ onClose }: Props) => {
    return (
        <SidebarContainer>
            <SidebarHeader>
                <CloseButton onClick={onClose}>x</CloseButton>
            </SidebarHeader>
        </SidebarContainer>
    )
}