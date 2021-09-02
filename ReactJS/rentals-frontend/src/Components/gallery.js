import React from "react";
import "./gallery.scss";
import gal1 from "../assets/gal-1.jpeg";
import gal2 from "../assets/gal-2.jpeg";
import gal3 from "../assets/gal-3.jpeg";
import gal4 from "../assets/gal-4.jpeg";
import gal5 from "../assets/gal-5.jpeg";
import gal6 from "../assets/gal-6.jpeg";
import gal7 from "../assets/gal-7.jpeg";
import gal8 from "../assets/gal-8.jpeg";
import gal9 from "../assets/gal-9.jpeg";
import gal10 from "../assets/gal-10.jpeg";
import gal11 from "../assets/gal-11.jpeg";
import gal12 from "../assets/gal-12.jpeg";
import gal13 from "../assets/gal-13.jpeg";
import gal14 from "../assets/gal-14.jpeg";
function Gallery() {
  return (
    <div className="gallery">
      <figure className="gallery__item gallery__item--1">
        <img src={gal1} alt="1" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--2">
        <img src={gal2} alt="2" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--3">
        <img src={gal3} alt="3" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--4">
        <img src={gal4} alt="4" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--5">
        <img src={gal5} alt="5" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--6">
        <img src={gal6} alt="6" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--7">
        <img src={gal7} alt="7" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--8">
        <img src={gal8} alt="8" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--9">
        <img src={gal9} alt="9" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--10">
        <img src={gal10} alt="10" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--11">
        <img src={gal11} alt="11" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--12">
        <img src={gal12} alt="12" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--13">
        <img src={gal13} alt="13" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--14">
        <img src={gal14} alt="14" className="gallery__img" />
      </figure>
    </div>
  );
}

export default Gallery;
