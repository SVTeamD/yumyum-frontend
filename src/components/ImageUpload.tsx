import { Box } from '@mui/system';
import React, { useState } from 'react';

export default function ImageUpload() {
  const [image, setImage] = useState({ preview: '', raw: '' });

  const handleChange = (e: any) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      });
    }
  };

  return (
    <div>
      <label htmlFor="upload-button">
        {image.preview ? (
          <img src={image.preview} alt="dummy" width="390" height="390" />
        ) : (
          <>
            <Box
              className="items-center rounded text-base text-center py-10"
              style={{ backgroundColor: '#EAEAEA' }}
            >
              Upload
            </Box>
          </>
        )}
      </label>
      <input
        type="file"
        id="upload-button"
        style={{ display: 'none' }}
        onChange={handleChange}
      />
    </div>
  );
}
