
import AlbumCard from '../AlbumCard/AlbumCard';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import leftArrow from '../../assets/leftarrow.png';
import rightArrow from '../../assets/rightarrow.png';
import styles from './Carousel.module.css';



const Carousel = ({ data }) => {
    return (
      <div className={styles.carouselContainer}>
        <div className={styles.navigationPrev} id="swiper-button-prev">
          <img src={leftArrow} alt="Previous" />
        </div>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '#swiper-button-next',
            prevEl: '#swiper-button-prev',
          }}
          spaceBetween={2}
          slidesPerView={8}
          slidesPerGroup={2}
          loop
          //loop
        breakpoints={{
          640: {
            slidesPerView: 5,
            slidesPerGroup: 2,
            spaceBetween: 1,
          },
          768: {
            slidesPerView: 6,
            slidesPerGroup: 2,
            spaceBetween: 1,
          },
          1024: {
            slidesPerView: 7,
            slidesPerGroup: 2,
            spaceBetween: 1,
          },
          1440: {
            slidesPerView: 8,
            slidesPerGroup: 2,
            spaceBetween: 1,
          },
        }}
        >
          {
          data.songs ? (data.map((album) => (
            <SwiperSlide key={album.id}>
              <AlbumCard data={album} type={'album'}></AlbumCard>
            </SwiperSlide>
          ))):(data.map((album) => (
            <SwiperSlide key={album.id}>
              <AlbumCard data={album} type={'song'}></AlbumCard>
            </SwiperSlide>
          ))

          )
          }
        </Swiper>
        <div className={styles.navigationNext} id="swiper-button-next">
          <img src={rightArrow} alt="Next" />
        </div>
      </div>
    );
  };

export default Carousel;
