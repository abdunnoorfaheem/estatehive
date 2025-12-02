import Container from './Container';
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const HeroText = (props) => {
  return (
    <>
     <section className=''>
         <div className="bg-[url('/src/assets/heroText.png')]  bg-center bg-no-repeat text-center md:text-left">
       <Container className={"py-[110px]"}>
         <h3 className='text-[28px] md:text-[48px] font-bold font-poppins'>{props.text}</h3>
        <div className="flex gap-x-2 items-center justify-center md:justify-start">
            <FaHome className='text-[#FF5A3C]'/>
            <p className='text-[18px] font-nunito '>{props.pageType}</p>
            <IoIosArrowForward/>
            <h4 className='text-[18px] font-nunito '>{props.text}</h4>
        </div>
       </Container>
      </div>
     </section>
    </>
  )
}

export default HeroText
