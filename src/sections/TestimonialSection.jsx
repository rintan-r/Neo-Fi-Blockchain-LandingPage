import Carousel from "../components/Carousel";
import SectionLabel from "../components/SectionLabel";
import useMediaQuery from "../hooks/useMediaQuery";

function TestimonialSection() {
    const isDesktop = useMediaQuery("(min-width: 1024px)"); // Tailwind lg: breakpoint
    return (
        <div className="flex flex-col gap-8 xl:gap-[72px] px-5 py-10 xl:py-20 bg-gray-4 w-full">
            <div className="flex xl:w-full items-center justify-center">
                <div className="flex flex-col xl:w-[644px] text-center gap-4 items-center">
                    <SectionLabel label="Testimonial" />
                    <h2>Trusted by Innovators</h2>
                    <p className="p-subtitle text-gray-1">Secure your digital assets with the peace of mind that comes from knowing you are protected by the best technology in the blockchain space.</p>
                </div>
            </div>
            {isDesktop ? (
                <>
                    <div className="flex flex-col gap-5">
                        <Carousel centerOnLoad={true} cardItems={9} />
                        <Carousel centerOnLoad={false} cardItems={10} />
                    </div>
                </>
            ) : (
                <Carousel centerOnLoad={true} />
            )}
        </div>
    )

}

export default TestimonialSection;