import React, {FC} from "react";
import {Space, Typography} from "antd";

const {Paragraph} = Typography;

const textStyle: React.CSSProperties = {
    color: 'inherit',
};

const mainTextStyle: React.CSSProperties = {
    textAlign: "left",
};

const contentTextStyle: React.CSSProperties = {
    textAlign: "justify",
};

const CopyRight: FC = () => {
    return (
        <Space direction={"vertical"}>
            <Paragraph
                style={{...textStyle, ...mainTextStyle}}>

                Copyright © 2023 by Andrei Ledovskikh (an.y.ledov@gmail.com)
            </Paragraph>
            <Paragraph
                style={{...textStyle, ...contentTextStyle}}>

                All rights reserved. No part of this publication may be reproduced, distributed,
                or transmitted in any form or by any means, including photocopying,
                recording, or other electronic or mechanical methods, without the prior
                written permission of the publisher, except in the case of brief quotations embodied
                in critical reviews and certain other noncommercial uses permitted by copyright law.
            </Paragraph>
        </Space>
    )
};

export default CopyRight;


