import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-2 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-300",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-accent via-accent-2 to-accent-3 text-white shadow-[0_10px_40px_-8px_var(--glow)] hover:shadow-[0_14px_50px_-6px_var(--glow)] hover:brightness-110",
        secondary:
          "glass text-foreground hover:bg-foreground/10 hover:border-foreground/20",
        ghost: "text-muted-foreground hover:bg-foreground/5 hover:text-foreground",
        outline:
          "border border-foreground/15 text-foreground hover:bg-foreground/5 hover:border-foreground/30",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        default: "h-11 px-6",
        lg: "h-13 px-8 text-base [&_svg]:size-5",
        icon: "size-10",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {variant === "primary" && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:animate-shine"
        />
      )}
      {children}
    </button>
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
