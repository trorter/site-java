import React, {FC} from "react";
import {Layout, Space} from "antd";
import {Content, Footer, Header} from "antd/es/layout/layout";
import {headerStyle, headerSpaceStyle, contentStyle, footerStyle} from "./style"
import {SiteInfo} from "../../../components/site-info";
import {TopMenu} from "../../../components/top-menu";
import {CopyRight} from "../../../components/copy-right";

export const MainPage: FC = () => {
    return (
        <Space
            direction="vertical">

            <Layout>
                <Header
                    style={headerStyle}>
                    <Space
                        direction={"vertical"}
                        style={headerSpaceStyle}>

                        <SiteInfo/>
                        <TopMenu/>
                    </Space>
                </Header>
                <Content
                    style={contentStyle}>

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad asperiores assumenda
                    at
                    aut consequatur culpa dicta distinctio, ducimus enim fuga fugit id illum laboriosam laborum
                    minima necessitatibus non nulla obcaecati odio pariatur perspiciatis porro quae quam quasi,
                    quos
                    saepe sint sunt suscipit tempora ullam vel veritatis voluptates? Asperiores aut blanditiis
                </Content>
                <Footer
                    style={footerStyle}>

                    <CopyRight
                        extended={true} />
                </Footer>
            </Layout>
        </Space>
    )
}

export default MainPage;