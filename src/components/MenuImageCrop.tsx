// npm i react-image-crop --save
// 터미널에 입력하고 실행하기

import React, { useState } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

const defaultSrc = ' ';

export const MenuImageCrop: React.FC = () => {
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
      <div className=" flex justify-between">
        <label
          className="flex flex-col items-center rounded text-base font-bold text-white text-center px-11 py-1"
          htmlFor="input-menu"
          style={{ backgroundColor: '#79A7C8' }}
        >
          사진 가져오기
        </label>
        <input
          type="file"
          id="input-menu"
          style={{ display: 'none' }}
          onChange={onChange}
        />
        {/* <div className="box">
          <h1> */}
        <label
          className="flex flex-col items-center rounded text-base font-bold text-white text-center px-11 py-1"
          style={{ backgroundColor: '#79A7C8' }}
          onClick={getCropData}
        >
          이미지 자르기
        </label>
        {/* </h1>
        </div> */}
      </div>
      <Cropper
        // style={{ objectFit: 'cover', height: '70%' }}
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
      {/* <div>
        <div className="box" style={{ height: '200px' }}>
          <h1>
            <label
              className="flex flex-col items-center rounded text-base font-bold text-white text-center"
              style={{ backgroundColor: '#435ca5' }}
              onClick={getCropData}
            >
              이미지 자르기
            </label>
          </h1>
          <img
            // style={{ objectFit: 'cover', width: '100%', height: '50%' }}
            style={{ objectFit: 'contain', width: '100%', height: '50%' }}
            src={cropData}
          />
        </div>
      </div> */}
      {/* <br style={{ clear: 'both' }} /> */}
      <img
        // style={{ objectFit: 'cover', width: '100%', height: '50%' }}
        style={{ objectFit: 'contain', width: '100%', height: '50%' }}
        src={cropData}
      />
    </div>
  );
};

export default MenuImageCrop;
