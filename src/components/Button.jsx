import { tv } from "tailwind-variants";
import arrowright from "../assets/icons/arrow-right.svg";
import play from "../assets/icons/play.svg";

const button = tv({
  base: "flex flex-row px-6 py-[14px] gap-6 rounded-full p-regular button-text justify-center items-center",
  variants: {
    variant: {
      primary: "bg-green text-black text-black",
      primarySmall: "bg-green button-text-small text-black text-black",
      secondary: "flex flex-row text-gray-1 gap-1.5 border border-gradient-1 rounded-full",
      circle: "flex w-10 h-10 p-0 bg-green items-center justify-center",
      square: "flex flex-row p-4 gap-6 bg-green rounded-none text-black w-fit",
      text: "text-white py-2 button-text-small"
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export default function Button({ variant,  children, className, ...props }) {
  return (
    <button className={button({ variant })} {...props}>
      {variant === "circle" && (
        <img src={arrowright} className="w-4.5 h-4.5"></img>
      )}
      {variant === "secondary" && (
        <img src={play}></img>
      )}
      {children}
    </button>
  );
}
