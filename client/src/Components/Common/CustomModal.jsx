import { Modal } from "antd";
import React from "react";

const CustomModal = ({
  open,
  onClose,
  width,
  centered,
  classNames,
  showCloseButton = false,
  className,
  children,
}) => {
  return (
    <Modal
      title={showTitle ? title : null}
      open={open}
      onCancel={onClose}
      width={width}
      centered={centered}
      className={classNames}
      closeIcon={showCloseButton} // Hide close icon
    >
      <div className={`${className}`}>{children}</div>
    </Modal>
  );
};

export default CustomModal;
