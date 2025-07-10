import { useRef, useState, useEffect } from "react";
import CardReview from "./CardReview";

export default function Carousel({ centerOnLoad = false, cardItems = 9 }) {
    const carouselRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const dragSpeed = 2;

    /**
     * Center the middle card on initial render\
      * Carousel Component
      * @param {boolean} centerOnLoad - If true, center the middle card on initial load
     */
    useEffect(() => {
        if (!centerOnLoad) return; // skip if not requested

        const carousel = carouselRef.current;
        if (!carousel) return

        const cards = carousel.querySelectorAll("div > div");
        if (cards.length === 0) return;

        const middleIndex = Math.floor(cards.length / 2);
        const middleCard = cards[middleIndex];

        const scrollTarget =
            middleCard.offsetLeft -
            carousel.offsetWidth / 2 +
            middleCard.offsetWidth / 2;

        const maxScroll = carousel.scrollWidth - carousel.offsetWidth;
        carousel.scrollLeft = Math.min(scrollTarget, maxScroll);
    }, [centerOnLoad]);  // depend on centerOnLoad

    /**
     * Enable horizontal scroll with mouse wheel while preventing page scroll
     */
    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        const handleWheel = (e) => {
            e.preventDefault();
            carousel.scrollLeft += e.deltaY;
        };

        carousel.addEventListener("wheel", handleWheel, { passive: false });
        return () => {
            carousel.removeEventListener("wheel", handleWheel);
        };
    }, []);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - carouselRef.current.offsetLeft);
        setScrollLeft(carouselRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * dragSpeed;
        carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div className="relative left-0 right-0 -mx-5">
            <div
                ref={carouselRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                id="carousel"
                style={{ scrollBehavior: "smooth" }}
                className="w-full overflow-x-auto scrollbar-hide scroll-smooth"
            >
                <div className="flex gap-5">
                    {[...Array(cardItems)].map((_, index) => (
                        <CardReview key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}
