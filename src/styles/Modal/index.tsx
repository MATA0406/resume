/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useEffect } from 'react';
import Portal from './Portal';
// Icons
import { ReactComponent as X } from 'assets/svgs/x.svg';

const Modal = ({ onClose, children, isOpen, ...props }: any) => {
  const ModalOverlay = css({
    boxSizing: 'border-box',
    // display: isOpen ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: isOpen ? 999 : -1,
    opacity: isOpen ? 1 : 0,
    transition: 'all 300ms',
  });

  const modalWrapper = css({
    boxSizing: 'border-box',
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: 'auto',
    outline: 0,
    zIndex: isOpen ? 999 : -1,
    opacity: isOpen ? 1 : 0,
    transition: 'all 300ms',
  });

  const ModalInner = css({
    boxSizing: 'border-box',
    position: 'relative',
    boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.5)',
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: '0 auto',
    padding: '20px 10px',
    width: 480,
    maxWidth: 480,
    top: isOpen ? '50%' : -100,
    transform: 'translateY(-50%)',
    zIndex: isOpen ? 999 : -1,
    opacity: isOpen ? 1 : 0,
    transition: 'all 300ms ease-in-out',
  });

  // 스크롤 막기
  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: "";`;
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, []);

  return (
    <Portal elementId="modal-root">
      <div css={ModalOverlay} />
      <div
        css={modalWrapper}
        tabIndex={-1}
        onClick={(e) => e.target === e.currentTarget && onClose()}
        {...props}
      >
        <div css={ModalInner}>
          <div
            css={{
              position: 'absolute',
              top: 10,
              right: 10,
              padding: 5,
              cursor: 'pointer',
            }}
            onClick={onClose}
          >
            <X
              css={{
                width: 20,
                height: 20,
              }}
            />
          </div>

          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
