import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-4 bg-white rounded-lg shadow-md", className)}
      classNames={{
        months: "w-full grid grid-cols-1",
        month: "w-full space-y-4",
        caption: "flex justify-between items-center px-2",
        caption_label: "text-base font-semibold",
        nav: "flex items-center space-x-2",
        nav_button: cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 text-gray-600 hover:bg-gray-100"
        ),
        table: "w-full border-collapse",
        head_row: "flex w-full",
        head_cell: "text-xs text-gray-500 w-full text-center",
        row: "flex w-full",
        cell: cn(
          "relative text-center w-full p-1 focus-within:z-20",
          props.mode === "range"
            ? "[&:has(.day-range-end)]:rounded-r-md [&:has(.day-range-start)]:rounded-l-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "w-full h-10 p-0 text-sm font-normal text-gray-800 aria-selected:bg-primary aria-selected:text-white"
        ),
        day_today: "border border-primary text-primary",
        day_selected:
          "bg-primary text-white hover:bg-primary/90 focus:bg-primary/90",
        day_outside:
          "text-muted-foreground opacity-40 aria-selected:bg-primary/50 aria-selected:text-white",
        day_disabled: "opacity-30 text-gray-400",
        day_range_start: "bg-primary text-white rounded-l-md",
        day_range_end: "bg-primary text-white rounded-r-md",
        day_range_middle: "bg-primary/40 text-white",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("h-4 w-4", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn("h-4 w-4", className)} {...props} />
        ),
      }}
      {...props}
    />
  );
}

Calendar.displayName = "Calendar";

export { Calendar };
