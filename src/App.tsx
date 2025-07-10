import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import styled from "styled-components";
import { NavMenu } from "./components/NavMenu";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

const AppContainer = styled.div`
  height: 100vh;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-basis: 1;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const MainContentWrapper = styled.main`
    padding-left: 160px;
    padding-top: 60px;
    display: flex;

    @media (max-width: 1024px) {
      padding-left: 50px;
    }

    @media (max-width: 768px) {
      padding-left: 25px;
    }
`;

const NavWrapper = styled.div`
  width: 240px;

  @media (max-width: 768px) {
      display: none;
  }
`;

  return (
    <AppContainer>
        <Header
          openSidebar={() => setIsSidebarOpen(true)}
        />

        <MainWrapper>
          {isSidebarOpen && <Sidebar onClose={() => setIsSidebarOpen(false)} />}

            <MainContentWrapper>
              <NavWrapper>
                <NavMenu />
              </NavWrapper>

              Main Content
            </MainContentWrapper>
            
      </MainWrapper>
    </AppContainer>
  )
}

export default App;
