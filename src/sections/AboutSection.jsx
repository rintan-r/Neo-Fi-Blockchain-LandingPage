import SectionLabel from "../components/SectionLabel";
import EllipseBackground from "../decorations/EllipseBackground";

function AboutSection() {

    return (
        <div className="relative w-full">
            <div className="relative z-2 flex flex-col px-5 py-10 xl:px-[120px] xl:py-[120px] gap-8 xl:gap-[72px] text-center justify-center items-center bg-gray-4 w-full">
                <EllipseBackground
                    top="7.7%"
                    centerX={true}
                    width={606}
                    height={425}
                />
                <div className="flex flex-col gap-5 text-center justify-center items-center">
                    <SectionLabel label="Statistics" />
                    <h2>Completely Leverage product</h2>
                    <p className="p-subtitle-about text-gray-1 xl:w-[600px]">Leading the way in blockchain innovation, we are redefining how the world connects, secures, and transacts, bringing a new era of decentralized technology.</p>
                </div>

                <div className="flex flex-col xl:flex-row gap-6 xl:gap-[72px]">
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="xl:flex-1 h2-large text-green">2M+</h2>
                        <h4 className="text-gray-1">users</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="xl:flex-1 h2-large text-green">500k+</h2>
                        <h4 className="text-gray-1">Transactions</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="xl:flex-1 h2-large text-green">35+</h2>
                        <h4 className="text-gray-1">Countries</h4>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default AboutSection;