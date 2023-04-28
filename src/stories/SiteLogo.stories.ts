import {Meta, StoryObj} from "@storybook/react";
import {withRouter} from 'storybook-addon-react-router-v6';
import {SiteLogo} from "../components/site-info/lib/site-logo/site-logo";

const meta = {
    title: 'Example/SiteLogo',
    component: SiteLogo,
    tags: ['autodocs'],
    decorators: [withRouter],
} satisfies Meta<typeof SiteLogo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        preview: false,
    },
};

export const Secondary: Story = {
    args: {
        preview: true,
        alt: "||"
    },
};