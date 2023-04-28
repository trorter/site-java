import {Meta, StoryObj} from "@storybook/react";
import {withRouter} from 'storybook-addon-react-router-v6';
import {CopyRight} from "../components/copy-right/lib/copy-right";

const meta = {
    title: 'Example/CopyRight',
    component: CopyRight,
    tags: ['autodocs'],
    decorators: [withRouter],
} satisfies Meta<typeof CopyRight>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        extended: false,
    },
};

export const Secondary: Story = {
    args: {
        extended: true,
    },
};