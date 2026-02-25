import * as React from "react"

interface ProgressProps {
  value?: number;
  className?: string;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ value = 0, className = "" }, ref) => {
    return (
      <div ref={ref} className={`relative h-4 w-full overflow-hidden rounded-full bg-gray-200 ${className}`}>
        <div
          className="h-full bg-blue-600 transition-all"
          style={{ width: `${value}%` }}
        />
      </div>
    )
  }
)
Progress.displayName = "Progress"

export { Progress }
