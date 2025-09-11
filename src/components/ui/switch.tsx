
import React, { forwardRef } from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & {
    themeColor?: string;
  }
>(({ className, style, themeColor, ...props }, ref) => {
  // Helper function to lighten color by 2 shades
  const lightenColor = (hex: string, amount: number = 0.2) => {
    const num = parseInt(hex.replace("#", ""), 16);
    const amt = Math.round(2.55 * amount * 100);
    const R = (num >> 16) + amt;
    const B = (num >> 8 & 0x00FF) + amt;
    const G = (num & 0x0000FF) + amt;
    return "#" + (G | B << 8 | R << 16 | 1 << 24).toString(16).slice(1);
  };

  const getBackgroundColor = () => {
    if (props.checked && themeColor) {
      // When ON: use theme color with 2 shades lighter
      return lightenColor(themeColor, 0.3);
    } else if (!props.checked && themeColor) {
      // When OFF: use exact same color shade as day button
      return themeColor;
    }
    // Fallback colors
    return props.checked ? '#3b82f6' : '#4b5563';
  };

  return (
    <SwitchPrimitives.Root
      className={cn(
        "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      style={{
        backgroundColor: getBackgroundColor(),
        opacity: props.checked ? 1 : 0.7,
        ...style
      }}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )}
      />
    </SwitchPrimitives.Root>
  )
})
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
