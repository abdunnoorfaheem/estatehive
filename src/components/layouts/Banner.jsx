import Container from '../Container';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from '../Image';
import BannerImg from "/src/assets/banner.png"
import NextArrow from '../NextArrow';
import PrevArrow from '../PrevArrow';

const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    return (
        <>
            <section>

                <Slider {...settings}>
                    <div>
                        <Image imgSrc={BannerImg} />
                    </div>
                    <div>
                        <Image imgSrc={BannerImg} />
                    </div>
                    <div>
                        <Image imgSrc={BannerImg} />
                    </div>
                    <div>
                        <Image imgSrc={BannerImg} />
                    </div>
                    <div>
                        <Image imgSrc={BannerImg} />
                    </div>
                    <div>
                        <Image imgSrc={BannerImg} />
                    </div>

                </Slider>

            </section>
        </>
    )
}

export default Banner
