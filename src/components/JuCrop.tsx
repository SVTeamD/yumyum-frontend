// npm i react-image-crop --save
// 터미널에 입력하고 실행하기

import React, { useState } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

const defaultSrc = ' ';

export const JuCrop: React.FC = () => {
  const [image, setImage] = useState(defaultSrc);
  const [cropData, setCropData] = useState('#');
  const [cropper, setCropper] = useState<any>();
  const onChange = (e: any) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as any);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (typeof cropper !== 'undefined') {
      setCropData(cropper.getCroppedCanvas().toDataURL());
    }
  };
  return (
    <div>
      <div className="relative">
        <label
          className="flex flex-col items-center rounded text-base font-bold text-white text-center"
          htmlFor="input-file"
          style={{ backgroundColor: '#435ca5' }}
        >
          업로드
        </label>
        <input
          type="file"
          id="input-file"
          style={{ display: 'none' }}
          onChange={onChange}
        />
      </div>
      <Cropper
        style={{ width: '100%' }}
        zoomTo={0.5}
        initialAspectRatio={1}
        src={image}
        viewMode={1}
        minCropBoxHeight={10}
        minCropBoxWidth={10}
        background={false}
        responsive={true}
        autoCropArea={1}
        checkOrientation={false}
        onInitialized={(instance) => {
          setCropper(instance);
        }}
        guides={true}
      />
      <div>
        <div className="box" style={{ width: '100%', height: '300px' }}>
          <h1>
            <label
              className="flex flex-col items-center rounded text-base font-bold text-white text-center"
              style={{ backgroundColor: '#435ca5' }}
              onClick={getCropData}
            >
              이미지 자르기
            </label>
          </h1>
          <img style={{ width: '100%' }} src={cropData} />
        </div>
      </div>
      <br style={{ clear: 'both' }} />
    </div>
  );
};

export default JuCrop;
