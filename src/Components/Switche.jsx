import * as React from 'react';
import Switch from '@mui/material/Switch';


export default function Switche({ expanded, onChange }) {
  const [checked, setChecked] = React.useState(expanded);




  const handleChange = (event) => {
    setChecked(event.target.checked);
    onChange(event.target.checked);

  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />

    
  );
}
