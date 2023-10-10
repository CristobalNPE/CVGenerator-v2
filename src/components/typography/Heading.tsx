import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const headingVariants = cva("scroll-m-20 tracking-tight", {
  variants: {
    variant: {
      h1: "text-4xl font-extrabold lg:text-5xl",
      h2: "border-b pb-2 text-3xl font-semibold  transition-colors first:mt-0",
      h3: "text-2xl font-semibold",
      h4: "text-xl font-semibold",
    },
  },
  defaultVariants: {
    variant: "h1",
  },
});

export interface HeadingProps extends VariantProps<typeof headingVariants> {
  children?: React.ReactNode;
  className?: string;
}

function Heading({ children, variant, className }: HeadingProps) {
  return (
    <h1 className={cn(headingVariants({ variant, className }))}>{children}</h1>
  );
}

export { Heading, headingVariants };
