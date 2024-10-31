import React from 'react'
import "./Banner.css"
function Banner() {

  const bannerdata = [
    "../Assets/wallpaperflare.com_wallpaper\ \(1\).jpg",
    "../Assets/wallpaperflare.com_wallpaper\ \(2\).jpg",
    "../Assets/wallpaperflare.com_wallpaper\ \(3\).jpg",
  ]

  return (
    <div>
      {
        bannerdata.map((a,i) => (
          <img src={a}></img>
        ))
      }
    </div>
  )
}

export default Banner