import React, {FC} from 'react';
import {ConfigProvider, ThemeConfig} from "antd";
import {MainPage} from "./pages/main";

const theme: ThemeConfig = {
    token: {
        fontFamily: 'Helvetica',
        fontSize: 12,
    },
};

const App: FC = () => {
    return (
        <ConfigProvider
            theme={theme}>

            <MainPage />
        </ConfigProvider>
    );
}

export default App;
