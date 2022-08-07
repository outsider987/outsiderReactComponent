import React from 'react';
import Modal from '../Modal';
import SvgICon from '../SvgIcon';

interface props extends React.HTMLAttributes<HTMLDivElement> {
  toggle: boolean;
  children?: React.ReactNode;
}
const ModalSpin: React.FC<props> = ({toggle, children}) => {
  return (
    <Modal toggle={toggle}>
      <div
        className=" inset-0 m-auto w-1/12 rounded-full
     bg-transparent  bg-opacity-75 transition-opacity"
      >
        <SvgICon name="spin"></SvgICon>
        {children}
      </div>
    </Modal>
  );
};
export default ModalSpin;
