import React from 'react';
import styled from 'styled-components';
import Header from './header';
import Events from '../Events';

const Layout = styled.div``;

const Content = styled.div``;

const App = () => {
  return (
    <Layout>
      <Header />
      <Content>
        <Events />
      </Content>
    </Layout>
  );
};

export default App;
