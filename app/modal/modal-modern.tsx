import { Modal, ModalProps } from 'react-native'


interface Props extends ModalProps{
    visible: boolean,

}

const ModalScreenModern = ({visible, children}:Props) => {
    return (
        <Modal visible={visible} transparent animationType="fade">
            {children}
        </Modal>
    )
}

export default ModalScreenModern