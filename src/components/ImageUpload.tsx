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
          <img src={image.preview} alt="dummy" width="300" height="300" />
        ) : (
          <>
            <Box
              className="flex flex-wrap items-center px-12 w-40 h-20 text-white text-center 
              text-base "
              style={{ backgroundColor: '#c4c4c4' }}
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
