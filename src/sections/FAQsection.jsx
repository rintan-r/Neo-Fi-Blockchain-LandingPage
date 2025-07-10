import Accordion from "../components/Accordion";
import SectionLabel from "../components/SectionLabel";
import EllipseBackground from "../decorations/EllipseBackground";

function FAQsection() {
    return (
        <div className="relative">
            <EllipseBackground
                top="7.7%"
                centerX={true}
                width={606}
                height={425}
            />
            <div className="relative z-10 flex flex-col mx-5 xl:mx-[75.5px] xl:px-[217px] my-10 gap-8 text-center">
                <div className="flex flex-col gap-5 items-center">
                    <SectionLabel label="FAQ" />
                    <h2>Get Answers To Common Questions</h2>
                    <p className="p-subtitle text-gray-1 xl:w-[600px]">From basics to advanced topics, find everything you need to know right here. Let us help you simplify the process and find the clarity you're looking</p>
                </div>
                <div className="flex flex-col gap-4 xl:gap-[30px]">
                    <Accordion title="What is NexoFi, and how does it work?" />
                    <Accordion title="How is blockchain related to cryptocurrency?" />
                    <Accordion title="Is Blockchain technology secure?" />
                    <Accordion title="How does blockchain enhance security?" />
                    <Accordion title="Can blockchain be hacked?" />
                    <Accordion title="How can i implement blockchain in my industry" />
                </div>
            </div>
        </div>

    )
}

export default FAQsection;