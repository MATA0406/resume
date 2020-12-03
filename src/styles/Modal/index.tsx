/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useEffect } from 'react';
import Portal from './Portal';
// Icons
import { ReactComponent as Close } from 'assets/svgs/ic_close.svg';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  isCloseBtn?: boolean;
  [key: string]: any;
}

const Modal = ({
  isOpen,
  onClose,
  isCloseBtn = true,
  children,
  ...props
}: Props) => {
  const ModalOverlay = css({
    boxSizing: 'border-box',
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: isOpen ? 998 : -1,
    opacity: isOpen ? 0.55 : 0,
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
    zIndex: isOpen ? 998 : -1,
    opacity: isOpen ? 1 : 0,
    transition: 'all 300ms',
  });

  const ModalInner = css({
    boxSizing: 'border-box',
    position: 'relative',
    boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.19)',
    backgroundColor: '#fff',
    borderRadius: 5,
    margin: '0 auto',
    padding: '20px 10px',
    top: isOpen ? '50%' : -100,
    transform: 'translateY(-50%)',
    zIndex: isOpen ? 999 : -1,
    opacity: 1,
    transition: 'all 300ms ease-in-out',
  });

  // 스크롤 막기
  useEffect(() => {
    if (isOpen) {
      document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
    }
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: "";`;
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, [isOpen]);

  return (
    <Portal elementId="modal-root">
      <div css={ModalOverlay} />
      <div
        css={modalWrapper}
        tabIndex={-1}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <div css={ModalInner} {...props}>
          <div
            css={{
              position: 'absolute',
              top: 20,
              right: 20,
              padding: 5,
              cursor: 'pointer',
            }}
            onClick={onClose}
          >
            {isCloseBtn && (
              <Close
                css={{
                  width: 20,
                  height: 20,
                }}
              />
            )}
          </div>

          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
