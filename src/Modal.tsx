import React from 'react';
import { Button, ConfigProvider, Modal as AntModal, ModalProps } from 'antd';
import style from './styles/modal.module.css';

export type ModalType = {
    type: 'a' | 'b' | 'c';
    colorPrimary?: string;
} & ModalProps;

export default function Modal({
    colorPrimary = '#FB5C30',
    children,
    okText,
    cancelText,
    onOk,
    onCancel,
    ...props
}: ModalType) {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary,
                },
            }}
        >
            <div>
                <AntModal closeIcon={<></>} closable={false} {...props} footer={<></>}>
                    {children}
                    <div className={`${style.footer}`}>
                        <Button>{cancelText}</Button>
                        <Button type="primary">{okText}</Button>
                    </div>
                </AntModal>
            </div>
        </ConfigProvider>
    );
}
