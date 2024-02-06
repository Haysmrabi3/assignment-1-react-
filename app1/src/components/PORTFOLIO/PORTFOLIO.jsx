import React, { useState } from 'react'
import styel from './Portfolio.module.css'
import img1 from '../../Asets/ss2.png'
import img2 from '../../Asets/ss4.png'
import img3 from '../../Asets/ss3.png'


export default function PORTFOLIO() {
  const [selectedImageSrc, setSelectedImageSrc] = useState(null);

  const handleImageClick = (imageSrc) => {
    if (selectedImageSrc === imageSrc) {
      setSelectedImageSrc(null);
    } else {
      setSelectedImageSrc(imageSrc);
    }
  };

  return (
    <>
      <div className={`container ${styel.height}`}>
        <div className={`${styel.margine}`}>
          <h2>PORTFOLIO COMPONENT</h2>
        </div>
        <div className={`${styel.line} `}>
          <i className={`fa-solid fa-star `}></i>
        </div>
        <div className="row">
          {[
            { src: img1, key: 1 },
            { src: img2, key: 2 },
            { src: img3, key: 3 },
            { src: img2, key: 4 },
            { src: img3, key: 5 },
            { src: img1, key: 6 },
          ].map((image, index) => (
            <div key={index} className={`col-4 mt-5`} onClick={() => handleImageClick(image.src)}>
              <div>
                <div className={`${styel.w} ${styel.card}`}>
                  <img src={image.src} className={`position-relative w-100`} alt="" />
                  <div className={`${styel.layer} d-flex justify-content-center align-items-center fs-1 text-light `}>
                    <i className="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImageSrc && (
        <div className={`${styel.mainLayer}`} onClick={() => setSelectedImageSrc(null)}>
          <div>
            <img src={selectedImageSrc} className="w-100" alt="" />
          </div>
        </div>
      )}
    </>
  );
}



































