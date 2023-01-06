import { ComponentMeta, Story } from '@storybook/react';
import Modal, { ModalType } from './Modal';

export default {
    title: 'Common/Modal',
    component: Modal,
    argTypes: {
        colorPrimary: {
            description: '테마 컬러',
            control: { type: 'color' },
        },
    },
};

const Template: Story<ModalType> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
    type: 'web',
    buttonType: 'two',
    open: true,
    onOk: () => alert('ok'),
    onCancel: () => alert('cancel'),
};
