import React, { useState } from 'react';

const DropDown = ({ Trigger, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div onBlur={() => setVisible(false)}>
      <div onClick={() => setVisible((prev) => !prev)}>
        <Trigger />
      </div>
      {visible && (
        <div>
          {<div onClick={() => setVisible(false)} className="drop-down__close"></div>}
          {children}
        </div>
      )}
    </div>
  );
};

export default DropDown;
