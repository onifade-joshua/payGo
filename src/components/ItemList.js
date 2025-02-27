import React from "react";
import Item from "./Item"; 
import Data from "./Data"; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./ItemList.css";

const ItemList = () => {
    return (
        <div className="container">
            <Swiper spaceBetween={20} slidesPerView={1} breakpoints={{
                768: { slidesPerView: 2 }, 
                1024: { slidesPerView: 3 }
            }}>
                {Data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Item 
                            id={item.id}
                            imageUrl={item.imageUrl}
                            productName={item.productName}
                            price={item.price}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ItemList;
