import Image from "next/image";
import React, { useState,useEffect } from "react";
import style from './styles.module.css';

const embedID = "0RKpf3rK57I";

const Page = () => {
  const [imageClicked, setImageClicked] = useState(false);
  const onThumbnailClick = () => {
    setImageClicked(true);
  };

  useEffect(()=>{
    const playImg = document.querySelector("#play-button");
    
    playImg.addEventListener("click",onThumbnailClick,{once:true});
  },[])
  return (
    <div className={style.container}>
    <div className={style.video}>
      {!imageClicked ? (
        <>
          <Image
            src={`https://img.youtube.com/vi/${embedID}/sddefault.jpg`}
            layout="fill"
            objectFit="cover"
            alt="yt thumbnail"
            priority
          />
          <img id="play-button" className={style.play} src="http://addplaybuttontoimage.way4info.net/Images/Icons/7.png" alt="play button" />
        </>
      ) : (
        <iframe
          frameBorder="1"
          allowFullScreen
          src={
            imageClicked
              ? `https://www.youtube.com/embed/${embedID}?rel=0&showinfo=0&autoplay=1`
              : ""
          }
          title="youtube video"
        />
      )}
    </div>
    </div>
  );
};
export default Page;
