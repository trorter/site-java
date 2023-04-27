import {CSSProperties, FC} from "react";
import { Image } from 'antd';

const imageStyle: CSSProperties = {
    height: 52,
    marginBottom: 2,
}

const SiteLogo: FC = () => {
    return (
     <Image
         src={"./main_icon.svg"}
         style={imageStyle}
         alt={"⇈"}
         preview={false}
     />
    )
}

export default SiteLogo;