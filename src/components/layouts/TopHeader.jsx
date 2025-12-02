import Button from '../Button';
import Container from '../Container';
import { FaFacebookF,FaTwitter,FaVimeoV   } from "react-icons/fa";

const TopHeader = () => {
    return (
        <>
            <section className='bg-[#0A2C3D] text-white'>
                <Container>
                    <div className="flex items-center justify-between">
                        <div className="flex gap-x-5">
                        <h5>254 Lillian Blvd, Holbrook</h5>
                        <h6>info@santizex-site.com</h6>
                    </div>
                    <div className="flex gap-x-4  items-center">
                        <FaFacebookF/> 
                        <FaTwitter/>
                        <FaVimeoV />
                      <Button className={"px-[26px] py-[12px]"}>Add Listings</Button>
                    </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default TopHeader
