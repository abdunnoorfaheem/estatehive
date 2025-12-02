import { FaLongArrowAltLeft } from "react-icons/fa";

const PrevArrow = (props) => {
    const { onClick } = props;
  return (
    <>

    <div className="text-2xl z-10 absolute top-1/2 left-5 bg-[#FF5A3C] text-white" onClick={onClick}>
                    <FaLongArrowAltLeft/>
                </div>
      
    </>
  )
}

export default PrevArrow
