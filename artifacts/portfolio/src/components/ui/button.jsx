import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
const Button = React.forwardRef(({
  className,
  variant = "default",
  size = "default",
  isLoading,
  children,
  disabled,
  asChild = false,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : "button";
  const variants = {
    default: "bg-primary text-primary-foreground shadow hover:bg-primary/90 hover:shadow-primary/20 hover:shadow-lg",
    outline: "border border-border bg-transparent hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent/50 hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline"
  };
  const sizes = {
    default: "h-11 px-5 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-14 rounded-xl px-8 text-lg",
    icon: "h-11 w-11"
  };
  return <Comp ref={ref} disabled={!asChild && (isLoading || disabled)} className={cn("inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95", variants[variant], sizes[size], className)} {...props}>{asChild ? children : <>{isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}{children}</>}</Comp>;
});
Button.displayName = "Button";
export { Button };