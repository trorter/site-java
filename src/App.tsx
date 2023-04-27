import React from 'react';
import {Layout, Space} from "antd";
import {Content, Footer, Header} from "antd/es/layout/layout";
import {CopyRight} from "./components/copy-right";

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    minHeight: 64,
    lineHeight: '64px',
    backgroundColor: '#108ee9',
};

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    backgroundColor: 'white',
};

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    verticalAlign: "middle",
    color: '#fff',
    backgroundColor: '#108ee9',
};

function App() {
  return (
      <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
          <Layout>
              <Header style={headerStyle} >Header</Header>
              <Content style={contentStyle} >Content</Content>
              <Footer style={footerStyle}>
                  <CopyRight />
              </Footer>
          </Layout>
      </Space>
  );
}

export default App;
