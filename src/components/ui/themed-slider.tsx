
import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cn } from "@/lib/utils"

interface ThemedSliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  themeColor: string;
  isNeutral?: boolean;
}

const ThemedSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  ThemedSliderProps
>(({ className, themeColor, isNeutral = false, ...props }, ref) => {
  const value = props.value?.[0] || 0;
  const maxValue = props.max || 10;
  const percentage = (value / maxValue) * 100;
  
  // Use neutral colors when isNeutral is true
  const trackStyle = isNeutral 
    ? { backgroundColor: '#e5e7eb' } // Light gray for neutral
    : { backgroundColor: `${themeColor}20` }; // Light shade of theme color
    
  const rangeStyle = isNeutral
    ? { 
        backgroundColor: '#6b7280', // Medium gray for neutral range
        width: `${percentage}%`
      }
    : { 
        backgroundColor: `${themeColor}80`, // Semi-transparent theme color
        width: `${percentage}%`
      };
    
  const thumbStyle = isNeutral
    ? { borderColor: '#6b7280', backgroundColor: '#ffffff' }
    : { borderColor: themeColor, backgroundColor: '#ffffff' };

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track 
        className="relative h-2 w-full grow overflow-hidden rounded-full transition-all duration-200"
        style={trackStyle}
      >
        <SliderPrimitive.Range 
          className="absolute h-full rounded-full transition-all duration-200"
          style={rangeStyle}
        />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb 
        className="block h-5 w-5 rounded-full border-2 ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:scale-110 shadow-md"
        style={thumbStyle}
      />
    </SliderPrimitive.Root>
  )
})
ThemedSlider.displayName = SliderPrimitive.Root.displayName

export { ThemedSlider }
