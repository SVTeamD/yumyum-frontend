import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function CategorySelect() {
  const [category, setCategory] = React.useState<string | number>('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: SelectChangeEvent<typeof category>) => {
    setCategory(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen}>
        Choose the category
      </Button>
      <FormControl sx={{ m: 1, minWidth: 270 }}>
        <InputLabel id="demo-controlled-open-select-label">Category</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={category}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Reset</em>
          </MenuItem>
          <MenuItem value={'식당'}>식당</MenuItem>
          <MenuItem value={'정육점'}>정육점</MenuItem>
          <MenuItem value={'생선가게'}>생선 가게</MenuItem>
          <MenuItem value={'과일가게'}>과일 가게</MenuItem>
          <MenuItem value={'반찬가게'}>반찬 가게</MenuItem>
          <MenuItem value={'옷가게'}>옷 가게</MenuItem>
          <MenuItem value={'기타'}>기타</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

