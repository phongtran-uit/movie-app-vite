import { last } from 'lodash';
import * as React from 'react';
import { Modal, ModalBody, ModalProps } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxs';
import { getGlobalData } from '../../reducer/selectors/globalSelectors';
import { closeModal } from '../../reducer/slices/globalSlice';
import loadingGif from '../../assets/giphy.gif';
interface ITrailerModalProps {}

const TrailerModal: React.FunctionComponent<ITrailerModalProps> = (props) => {
    const { isOpenModal, trailerData, type } = useAppSelector(getGlobalData);
    const dispatch = useAppDispatch();
    const embedUrl = `https://www.youtube.com/embed/${last(
        trailerData.split('/')
    )}`;
    return (
        <Modal
            onHide={() => {
                dispatch(closeModal());
            }}
            size={'lg'}
            centered
            show={isOpenModal && type === 'trailer'}
        >
            <Modal.Header closeButton></Modal.Header>
            <ModalBody style={{ width: '100%', height: '500px' }}>
                <iframe
                    loading="lazy"
                    style={{
                        background: `url(${loadingGif}) center center no-repeat`,
                    }}
                    id="ytplayer"
                    width="100%"
                    height="100%"
                    src={embedUrl}
                    frameBorder="0"
                ></iframe>
            </ModalBody>
        </Modal>
    );
};

export default TrailerModal;
