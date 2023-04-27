import {CSSProperties, FC} from "react";
import {Space} from "antd";
import SiteLogo from "./site-logo/site-logo";

const siteInfoStyle: CSSProperties = {
}

const SiteInfo: FC = () => {
    return (
        <Space
            direction={"horizontal"}
            style={siteInfoStyle}
            align={"start"}>

            <SiteLogo />

        </Space>
    )
}

export default SiteInfo;