import Button from "../components/Button";
import SectionLabel from "../components/SectionLabel";

function CTASection() {
    return (
        <div className="flex flex-col px-5 xl:px-[120px] xl:py-[80px] py-10 bg-gray-4 w-full justify-center items-center">
            <div className="flex flex-col gap-5 text-center items-center xl:w-[800px]">
                <SectionLabel label="Revolutionary" />
                <h2>Enhance Your Design Workflow with Seamless Landing Pages </h2>
                <p className="p-subtitle text-gray-1 xl:w-[600px]">Join a thriving community committed to safeguarding digital assets, empowering your financial journey with trust, innovation, and security</p>
                <Button variant="square">Get Started</Button>
            </div>
        </div>
    )
}

export default CTASection;