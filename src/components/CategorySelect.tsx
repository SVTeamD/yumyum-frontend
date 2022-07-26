import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function CategorySelect() {
  const [open, setOpen] = React.useState(false);
  const [category, setCategory] = React.useState<number | string>('');

  const handleChange = (event: SelectChangeEvent<typeof category>) => {
    setCategory(Number(event.target.value) || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event: React.SyntheticEvent<unknown>, reason?: string) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>Select the Category of the Store</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, minWidth: 300 }}>
              <InputLabel htmlFor="demo-dialog-native">Category</InputLabel>
              <Select
                native
                value={category}
                onChange={handleChange}
                input={<OutlinedInput label="Category" id="demo-dialog-native" />}
                >
                <option value={'식당'}>식당</option>
                <option value={'정육점'}>정육점</option>
                <option value={'생선가게'}>생선가게</option>
                <option value={'과일가게'}>과일가게</option>
                <option value={'반찬가게'}>반찬가게</option>
                <option value={'옷가게'}>옷가게</option>
                <option value={'기타'}>기타</option>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
