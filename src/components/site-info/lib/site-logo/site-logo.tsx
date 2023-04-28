import {FC} from "react";
import {Image} from 'antd';
import {useNavigate} from "react-router-dom";
import {imageStyle} from "./style";

interface SiteLogoProps {
    /**
     * The image placeholder in case of upload errors of network throttling
     */
    alt?: string

    /**
     * Should the logo be previewed?
     * If 'true' redirection to the main page in case of click is off.
     */
    preview?: boolean
}

/**
 * Component that responsible for showing the site logo.
 * And it also resolves the click on itself as a redirection to the main page (redirect to the root "/")
 */
export const SiteLogo: FC<SiteLogoProps> = ({alt, preview}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return (
        <Image
            src="/images/main_icon.svg"
            style={imageStyle}
            alt={alt}
            preview={preview}
            onClick={preview ?
                undefined :
                handleClick}
            data-testid="SiteLogoTest"
        />
    )
}

export default SiteLogo;

SiteLogo.defaultProps = {
    alt: "⇈",
    preview: false,
};