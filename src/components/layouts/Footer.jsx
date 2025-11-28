import Container from '../Container';
import { CiTwitter } from "react-icons/ci";
import { FaPinterestP, FaVimeoV, FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Image from '../Image';
import Logo from "/src/assets/logoTwo.png";
import { IoLocationOutline } from "react-icons/io5";
import Button from '../Button';

const Footer = () => {
  return (
    <>
      <section>

        <div className="bg-[#171B2A] py-[200px] text-white text-center md:text-left">
          <Container>
            <div className="md:flex md:justify-between ">
              <div className="">
                <h4 className='text-[20px] font-poppins font-bold'>About Us.</h4>
                <p className='m-auto font-nunito w-[308px] py-[25px]'>orporate clients and leisure travelers has
                  been relying on Groundlink for dependable
                  safe, and professional chauffeured car
                  service in major cities across World. Indeed
                  it has been more than one decade and five
                  years that Groundlink</p>
                <div className="flex gap-x-3 justify-center md:justify-start">
                  <div className="bg-white text-[#171B2A] hover:bg-[#FF5A3C] hover:text-white p-2 rounded-full">
                    <FaFacebookF />
                  </div>
                  <div className="bg-white text-[#171B2A] hover:bg-[#FF5A3C] hover:text-white p-2 rounded-full">
                    <CiTwitter />
                  </div>
                  <div className="bg-white text-[#171B2A] hover:bg-[#FF5A3C] hover:text-white p-2 rounded-full">
                    <FaVimeoV />
                  </div>
                  <div className="bg-white text-[#171B2A] hover:bg-[#FF5A3C] hover:text-white p-2 rounded-full">
                    <FaPinterestP />
                  </div>
                </div>
              </div>
              <div className="">
                <h4 className='text-[20px] font-poppins font-bold'>Useful Links</h4>
                <ul className='font-nunito mt-[25px]'>
                  <li><Link>About</Link></li>
                  <li><Link>News</Link></li>
                  <li><Link>Partners</Link></li>
                  <li><Link>Room Details</Link></li>
                  <li><Link>Gallery</Link></li>
                  <li><Link>Contacts</Link></li>
                </ul>
              </div>
              <div className="">
                <h4 className='text-[20px] font-poppins font-bold'>Help?</h4>
                <ul className='font-nunito mt-[25px]'>
                  <li><Link>FAQ</Link></li>
                  <li><Link>Term & conditions</Link></li>
                  <li><Link>Reporting</Link></li>
                  <li><Link>Documentation</Link></li>
                  <li><Link>Support Policy</Link></li>
                  <li><Link>Privacy</Link></li>
                </ul>
              </div>
              <div className="flex flex-col items-center md:block">
                <div className="">
                  <Image imgSrc={Logo} />
                </div>
                <p className='font-nunito w-[320px] pt-[17px] pb-[25px]'>We are a team of designers and developers
                  create high quality Magento, Prestashop, </p>
                <h5 className='flex items-center gap-x-3 font-nunito'><IoLocationOutline />254 Lillian Blvd, Holbrook</h5>
                <div className="flex border border-white rounded-md overflow-hidden w-fit mt-[31px] ">
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="bg-white text-[#42518B] w-[317px] py-[15px] pl-[17px] outline-0 placeholder:text-[#42518B]"
                  />

                  <Button className="px-[22px] py-2.5 bg-[#FF6347] text-white cursor-pointer">
                    Subscribe
                  </Button>
                </div>

              </div>
            </div>
          </Container>
        </div>
        <div className="bg-[#313444] md:py-7 text-white font-nunito text-center md:text-left md:px-0 py-3">
          <Container>
            <div className="md:flex justify-between">
              <h5>&copy; TunaThemes 2025 All rights reserved.</h5>
              <h5>Terms of Use | rivacy Policy</h5>
            </div>
          </Container>
        </div>

      </section>
    </>
  )
}

export default Footer
