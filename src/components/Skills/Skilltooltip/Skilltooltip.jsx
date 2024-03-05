import React, { useState } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { MdDelete } from 'react-icons/md';

const SkillTooltip = () => {
  const [count, setCount] = useState(0);

  const handleDelete = () => {
    setCount(count + 1);
    // Perform other actions related to the delete functionality
  };

  return (
    <>
   
      <MdDelete />
    
    </>
  );
};

export default SkillTooltip;
