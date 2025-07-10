import styled from "styled-components";

type Item = {
    id: number
    title: string
}

interface Props { item: Item, activeId: number, setActiveId: (id: number) => void }
export const NavItem = ({ item, activeId, setActiveId  }: Props) => {

    const NavItemWrapper = styled.button`
        background-color: ${activeId === item.id ? '#F5F7FA' : '#ffffff'};
        border-radius: 3px;
        border: none;
        text-align: left;
        padding: 17px;
        font-weight: ${activeId === item.id ? '500' : '400'};
        color: ${activeId === item.id ? '#000000' : '#3E4C59'};
        font-size: 16px;

        @media (max-width: 768px) {
            text-align: center;
        }
    `;

    return (
        <NavItemWrapper onClick={() => setActiveId(item.id)}>
            {item.title}
        </NavItemWrapper>
    )
}
