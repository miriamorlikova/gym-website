import { twMerge } from "tailwind-merge";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

export const buttonStyles = cva(["transition-all"], {
  variants: {
    variant: {
      default: [
        "bg-gradient-to-r",
        "from-rose-light",
        "to-rose-dark",
        "hover:bg-gradient-to-l",
        "hover:from-rose-light",
        "hover:to-rose-dark",
        "font-exo",
        "uppercase",
        "tracking-wider",
        "hover:tracking-widest",
        "hover:ring-2",
        "hover:ring-rose-light",
        "hover:ring-opacity-50",
      ],
      secondary: [
        "text-gold-accent",
        "font-exo",
        "uppercase",
        "hover:text-yellow-400",
        "hover:underline",
        "hover:underline-offset-4",
      ],
      small: [
        "hover:border-gold-accent",
        "bg-opacity-20",
        "hover:text-gold-accent",
        "hover:border",
      ],
    },
    size: {
      default: [
        "px-6",
        "rounded-md",
        "text-xs",
        "py-3",
        "tracking-wider",
        "lg:text-sm",
      ],
      noxpadding: [
        "rounded-md",
        "text-xs",
        "py-3",
        "tracking-wider",
        "lg:text-sm",
      ],
      icon: [
        "rounded",
        "flex",
        "w-8",
        "h-8",
        "items-center",
        "justify-center",
        "p-0.5",
      ],
    },
  },

  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">;

export function Button({
  children,
  variant,
  className,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(buttonStyles({ variant, size }), className)}
    >
      {children}
    </button>
  );
}
