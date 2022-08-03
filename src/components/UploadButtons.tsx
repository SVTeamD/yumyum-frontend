import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { Box, FormControl, InputLabel } from '@mui/material';

//사진 업로드

export default function UploadButtons() {
  return (
    <FormControl sx={{ m: 1, minWidth: 350 }}>
      <Box
        component="span"
        sx={{
          p: 5,
          border: '1px solid grey',
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center'
        }}
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
          </IconButton>
          <Button variant="contained" component="label">
            Upload
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </Stack>
      </Box>
    </FormControl>
  );
}
