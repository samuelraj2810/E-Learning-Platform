import React from 'react'
import { Carousel } from 'antd';
import image1 from "../../Assets/wallpaperflare.com_wallpaper (1).jpg"
import image2 from "../../Assets/wallpaperflare.com_wallpaper (2).jpg"
import image3 from "../../Assets/wallpaperflare.com_wallpaper (3).jpg"
function Banner() {
  const bannerdata = [ image1
,image2,image3  ];

  return (
    <div className='mb-20 w-full '>
      <Carousel autoplay>
        {bannerdata.map((a, i) => (
          <div>
          <img src={a} alt={`Banner ${i}`} key={i} className='w-full object-cover h-[80vh]' />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Banner;
