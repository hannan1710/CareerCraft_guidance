import * as React from "react"

interface SliderProps {
  defaultValue?: number[]
  max?: number
  step?: number
  onValueChange?: (value: number[]) => void
  className?: string
}

const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      defaultValue = [50],
      max = 100,
      step = 1,
      onValueChange,
      className = "",
    },
    ref
  ) => {
    const initialValue = defaultValue[0] ?? Math.ceil(max / 2)

    const [value, setValue] = React.useState<number>(initialValue)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e.target.value)
      setValue(newValue)
      onValueChange?.([newValue])
    }

    return (
      <div ref={ref} className={`relative flex items-center ${className}`}>
        <input
          type="range"
          min="1"
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600 dark:accent-blue-400"
        />
        <span className="ml-4 text-sm font-medium min-w-[2rem] text-center text-gray-900 dark:text-white">
          {value}
        </span>
      </div>
    )
  }
)

Slider.displayName = "Slider"

export { Slider }