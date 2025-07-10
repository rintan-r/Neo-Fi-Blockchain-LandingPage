
export default function SectionLabel({ label, section }) {

    return (
        <div className='flex flex-row px-5 p-3 gap-2 border border-gradient-1 rounded-3xl items-center'>
            {section === "Hero" && (
                <div className="w-[9px] h-[9px] bg-green rounded-full"></div>
            )}
            <p className='p-small text-green'>{label}</p>
        </div>
    );
}
