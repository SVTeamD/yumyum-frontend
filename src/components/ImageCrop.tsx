// npm i react-image-crop --save
// 터미널에 입력하고 실행하기

import React, { useState } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import empty from '../assets/images/empty.png';

interface Props {
  storeImage: string;
  setStoreImage: (data: string) => void;
}

export const ImageCrop: React.FC<Props> = (props: Props) => {
  const [cropData, setCropData] = React.useState('#');
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
      props.setStoreImage(reader.result as any);
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
          htmlFor="input-file"
          style={{ backgroundColor: '#79A7C8' }}
        >
          사진 가져오기
        </label>
        <input
          type="file"
          id="input-file"
          style={{ display: 'none' }}
          onChange={onChange}
        />
        <label
          className="flex flex-col items-center rounded text-base font-bold text-white text-center px-11 py-1"
          style={{ backgroundColor: '#79A7C8' }}
          onClick={getCropData}
        >
          이미지 자르기
        </label>
      </div>
      <Cropper
        zoomTo={0.5}
        initialAspectRatio={1}
        src={props.storeImage}
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
      <img
        style={{ objectFit: 'contain', width: '100%', height: '50%' }}
        src={cropData}
        alt="아직 이미지가 입력되지 않았어요!"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = empty;
        }}
      />
    </div>
  );
};

export default ImageCrop;
