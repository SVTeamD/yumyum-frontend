import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import getWindowDimensions from '../hooks/WindowSize';

interface Props {
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  handleBarClose: () => void;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const names = [
  '식당',
  '생선가게',
  '정육점',
  '과일가게',
  '반찬가게',
  '옷가게',
  '기타'
]; // GET FROM STORES API

export default function MultipleSelectCheckmarks({
  setSelected,
  handleBarClose
}: Props) {
  const [category, setCategory] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof category>) => {
    const {
      target: { value }
    } = event;
    setCategory(typeof value === 'string' ? value.split(',') : value);
  };

  React.useEffect(() => {
    setSelected(category);
  });

  return (
    <div>
      <FormControl
        sx={{
          padding: '1rem',
          width: getWindowDimensions().width,
          background: '#fff'
        }}
      >
        <InputLabel id="demo-multiple-checkbox-label" sx={{ padding: '1rem' }}>
          어떤 상인을 알아볼깝쇼?
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          onClose={handleBarClose}
          multiple
          value={category}
          onChange={handleChange}
          input={<OutlinedInput label="어떤 상인을 알아볼깝쇼?" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={category.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
