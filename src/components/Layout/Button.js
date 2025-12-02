import { cn } from "../../utils/helpers/cn";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg hover:cursor-pointer",
  {
    variants: {
      variant: {
        purple:
          "bg-purple-700 text-white has-[>svg]:gap-2 hover:bg-purple-1000 active:bg-purple-800 border border-purple-800 hover:border-purple-900 active:shadow-[0_1px_2px_0_rgba(16,24,40,0.05),0_0_0_4px_#B8A3E1]",
        blue: "bg-light-blue-800 text-white has-[>svg]:gap-2 hover:bg-light-blue-1000 active:bg-light-blue-800 border border-light-blue-900 hover:border-light-blue-1000 active:shadow-[0_1px_2px_0_rgba(16,24,40,0.05),0_0_0_4px_#AEC9FF]",
      },
      size: {
        sm: "px-[14px] text-[14px] py-2",
        md: "px-4 py-[10px] text-[14px]",
        lg: "px-[18px] py-[10px] text-[16px]",
        smIcon: "p-2",
        mdIcon: "p-[10px]",
        lgIcon: "p-3",
      },
    },
    defaultVariants: {
      variant: "blue",
      size: "sm",
    },
  }
);

function Button({ className, variant, size, children, ...props }) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
}

export { Button, buttonVariants };
