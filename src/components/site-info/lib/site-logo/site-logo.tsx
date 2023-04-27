import {FC} from "react";
import {Image} from 'antd';
import {useNavigate} from "react-router-dom";
import {imageStyle} from "./style";

const SiteLogo: FC = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return (
     <Image
         src="/images/main_icon.svg"
         style={imageStyle}
         alt={"⇈"}
         preview={false}
         onClick={handleClick}
     />
    )
}

export default SiteLogo;