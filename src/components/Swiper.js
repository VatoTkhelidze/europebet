import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "styled-components";

const array = [
  {
    id: 1,
    src: "./assets/hundred.png",
  },
  {
    id: 2,
    src: "./assets/jackpot.png",
  },
  {
    id: 3,
    src: "./assets/hundred.png",
  },
  {
    id: 4,
    src: "./assets/jackpot.png",
  },
  {
    id: 5,
    src: "./assets/hundred.png",
  },
  {
    id: 6,
    src: "./assets/jackpot.png",
  },
];

const SwiperComponent = () => {
  return (
    <Swiper
      scrollbar={{ draggable: true }}
      spaceBetween={16}
      width={154}
      breakpoints={{
        1024: {
          width: 300
        }
      }}
      style={{ marginTop: "20px" }}
    >
      {array.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <SliderImg src={item.src} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

const SliderImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export default SwiperComponent;
