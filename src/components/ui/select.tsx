import * as React from "react"

interface SelectProps {
  children: React.ReactNode;
}

const Select = ({ children }: SelectProps) => {
  return <div className="relative">{children}</div>
}

const SelectTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className = "", children, ...props }, ref) => (
    <button
      ref={ref}
      className={`flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
)
SelectTrigger.displayName = "SelectTrigger"

const SelectValue = ({ placeholder }: { placeholder?: string }) => {
  return <span className="text-gray-500">{placeholder}</span>
}

const SelectContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="mt-2 rounded-md border border-gray-200 bg-white p-1 shadow-md">{children}</div>
}

const SelectItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-gray-100">
      {children}
    </div>
  )
}

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem }
