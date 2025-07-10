import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import styled from "styled-components";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

const AppContainer = styled.div`
  height: 100vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-basis: 1;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

  return (
    <AppContainer>
        <Header
          isSidebarOpen={isSidebarOpen}
          openSidebar={() => setIsSidebarOpen(true)}
        />
      <ContentWrapper>
      {isSidebarOpen && <Sidebar onClose={() => setIsSidebarOpen(false)} />}
        <div className='flex w-full justify-center overflow-y-auto'>
          <div className='flex flex-col lg:max-w-4xl w-full mt-8'>
            <div>Main Content</div>
          </div>
        </div>
      </ContentWrapper>
    </AppContainer>
  )
}

export default App;
