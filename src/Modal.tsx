import { Button, ConfigProvider, Modal as AntModal, ModalProps } from 'antd';
import './styles/modal.css';

export type ModalType = {
    type: 'web' | 'mobile';
    buttonType: 'one' | 'two';
    colorPrimary?: string;
} & ModalProps;

export default function Modal({
    type,
    buttonType,
    colorPrimary = '#FB5C30',
    children = 'helloworld',
    okText = '확인',
    cancelText = '취소',
    onOk,
    onCancel,
    ...props
}: ModalType) {
    const size = type === 'web' ? 'large' : 'middle';

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary,
                },
            }}
        >
            <AntModal className={`${type}-modal`} closeIcon={<></>} closable={false} footer={<></>} {...props}>
                <div style={{ textAlign: 'center' }}>
                    {children}

                    <div style={{ marginTop: 24 }}>
                        {buttonType === 'one' && (
                            // @ts-ignore
                            <Button type="primary" size={size} onClick={onOk}>
                                {okText}
                            </Button>
                        )}

                        {buttonType === 'two' && (
                            <div className="modal-footer">
                                {/* @ts-ignore */}
                                <Button size={size} onClick={onCancel}>
                                    {cancelText}
                                </Button>
                                {/* @ts-ignore */}
                                <Button type="primary" size={size} onClick={onOk}>
                                    {okText}
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </AntModal>
        </ConfigProvider>
    );
}
