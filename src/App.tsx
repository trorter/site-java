import React, {CSSProperties, FC} from 'react';
import {ConfigProvider, Layout, Space, ThemeConfig} from "antd";
import {Content, Footer, Header} from "antd/es/layout/layout";
import {CopyRight} from "./components/copy-right";
import {SiteInfo} from "./components/site-info";
import {TopMenu} from "./components/top-menu";

const theme: ThemeConfig = {
    token: {
        fontFamily: 'Helvetica',
        fontSize: 12,
    },
};

const headerStyle: CSSProperties = {
    textAlign: 'left',
    color: '#fff',
    minHeight: 64,
    backgroundColor: '#108ee9',
};

const contentStyle: CSSProperties = {
    textAlign: 'justify',
    backgroundColor: 'white',
    lineHeight: '20px',
    padding: 12,
};

const headerSpaceStyle: CSSProperties = {
    width: "100%",
};

const footerStyle: CSSProperties = {
    textAlign: 'center',
    verticalAlign: "middle",
    color: '#fff',
    backgroundColor: '#108ee9',
};

const App: FC = () => {
    return (
        <ConfigProvider
            theme={theme}>
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
                        distinctio eius est nemo quas ratione reprehenderit saepe vero. Assumenda aut dicta dolores
                        dolorum ducimus eos esse facilis id illo ipsa ipsum itaque libero molestias neque nobis
                        odit,
                        officia provident quibusdam reprehenderit rerum similique, temporibus totam voluptate? A
                        asperiores aut blanditiis corporis dolor eos est eveniet exercitationem explicabo ipsum iste
                        iure, iusto natus quis sequi velit vitae voluptatem? Eius esse eum illo iusto laudantium
                        minima
                        perferendis soluta veniam. Ad assumenda autem blanditiis culpa, deleniti dolore eaque
                        eligendi
                        fugit impedit itaque minima modi nisi quidem saepe sapiente soluta tempore, temporibus!
                        Commodi,
                        dicta iste nesciunt nihil numquam odio odit reiciendis tenetur? Atque corporis delectus
                        exercitationem laborum minima nobis quisquam ratione sed tempore voluptatem! Adipisci animi,
                        asperiores enim eos expedita molestiae nihil, omnis perferendis quaerat quasi, quis repellat
                        rerum saepe sit tempore ut voluptatibus. Dolor dolores, doloribus eaque eligendi eos ex,
                        explicabo hic molestias obcaecati quas suscipit unde vitae! Amet architecto corporis debitis
                        laborum necessitatibus nisi officia quaerat quam sint voluptatum? Adipisci atque consectetur
                        ducimus harum id incidunt odit, officia perspiciatis, porro praesentium quidem quod sed unde
                        veritatis voluptate! Dicta, nam, repellat. Amet cupiditate dolores esse est fugiat hic ipsam
                        magnam nesciunt, nihil quisquam repudiandae sunt suscipit tempore. Accusamus atque aut
                        commodi
                        consequuntur corporis culpa, delectus dicta dolorem eaque ex id in itaque iure laboriosam
                        laudantium maiores molestiae nemo neque nihil nisi non nostrum odio pariatur perspiciatis
                        possimus provident quaerat quam quia recusandae repellat sed suscipit vero voluptate? Ab
                        accusantium culpa delectus est expedita fuga inventore minus necessitatibus nihil omnis
                        perspiciatis quae quasi sunt temporibus velit, vero voluptate voluptatem? Ad aperiam,
                        cupiditate
                        distinctio facere ipsa ipsam iste nemo nulla perferendis placeat porro quae ullam voluptate!
                        Aliquid dignissimos dolorem ex minus, quos repellendus rerum vero. In maxime odio
                        perspiciatis
                        sequi! Ab accusantium aperiam asperiores delectus, dicta, dolor doloremque ea eligendi enim
                        eos
                        facilis, iusto libero minima natus neque quasi quis ratione suscipit veniam veritatis.
                        Accusantium adipisci aperiam blanditiis consequatur, dicta distinctio ea et facere fugit
                        illum
                        iusto, neque nesciunt non nulla odit officiis porro quos saepe vero voluptates. Adipisci
                        aperiam
                        architecto, autem commodi consectetur cupiditate debitis ducimus eligendi excepturi
                        explicabo
                        iure laborum laudantium minima molestiae molestias mollitia natus neque nesciunt nisi, nulla
                        obcaecati odit perspiciatis possimus quaerat quam qui quibusdam quis quisquam quo quod
                        sapiente
                        sunt suscipit tempora tempore voluptate voluptatem voluptatum. Aliquid, amet aperiam
                        asperiores
                        blanditiis deleniti distinctio dolor dolore ducimus esse et exercitationem explicabo illo
                        impedit labore nesciunt nobis numquam officiis placeat quisquam voluptatum. Consectetur
                        fugiat
                        id ipsam mollitia odio quidem quod quos repellendus rerum totam? Accusantium animi, aperiam
                        autem cumque deleniti dolor ea eos error est fugit ipsum labore libero magnam molestiae
                        optio
                        quia quod sapiente sunt vel, velit. Delectus dolorum facere itaque molestiae, obcaecati
                        omnis
                        rerum voluptas. Ab, laborum.
                    </Content>
                    <Footer
                        style={footerStyle}>
                        <CopyRight/>
                    </Footer>
                </Layout>
            </Space>
        </ConfigProvider>
    );
}

export default App;
