/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Fragment } from 'react';

const Modal = ({ onClose, children, isOpen, ...props }: any) => {
  const ModalOverlay = css({
    boxSizing: 'border-box',
    display: isOpen ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 999,
  });

  const modalWrapper = css({
    boxSizing: 'border-box',
    display: isOpen ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1000,
    overflow: 'auto',
    outline: 0,
  });

  const ModalInner = css({
    boxSizing: 'border-box',
    position: 'relative',
    boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.5)',
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 480,
    maxWidth: 480,
    top: '50%',
    transform: 'translateY(-50%)',
    margin: '0 auto',
    padding: '20px 20px',
  });

  return (
    <Fragment>
      <div css={ModalOverlay} />
      <div css={modalWrapper} tabIndex={-1} onClick={onClose} {...props}>
        <div css={ModalInner}>{children}</div>
      </div>
    </Fragment>
  );
};

export default Modal;
