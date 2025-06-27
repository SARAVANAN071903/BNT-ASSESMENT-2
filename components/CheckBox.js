import React, { useState } from 'react';

const Checkbox= () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <input type="checkbox" id="myCheckbox" onChange={handleChange} />
      <label htmlFor="myCheckbox">Check me</label>
      {isChecked && <p style={{ color: 'green' }}>You checked the box!</p>}
    </div>
  );
};

export default Checkbox;
