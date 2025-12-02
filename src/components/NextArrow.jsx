import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <>
            <div className="text-2xl z-10 absolute top-1/2 right-5 bg-[#FF5A3C] text-white" onClick={onClick}>
                <FaLongArrowAltRight/>
            </div>
        </>
    )
}

export default NextArrow
