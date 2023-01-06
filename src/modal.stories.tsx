import { ComponentMeta, Story } from '@storybook/react';
import Modal, { ModalType } from './Modal';

export default {
    title: 'Common/Modal',
    component: Modal,
};

const Template: Story<ModalType> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
    type: 'a',
    open: true,
};
