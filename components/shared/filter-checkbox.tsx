import React /*ButtonHTMLAttributes*/ from "react";
import { Checkbox } from "../ui/checkbox";

interface FilterChecboxProps {
    text: string;
    value: string;
    endAdornment?: React.ReactNode;
    onCheckedChange?: (checked: boolean) => void;
    checked?: boolean;
    name?: string;
}

const FilterCheckbox: React.FC<FilterChecboxProps> = ({
    text,
    value,
    endAdornment,
    onCheckedChange,
    checked,
    name,
}) => {
    return (
        <div className="flex items-center space-x-2">
            <Checkbox
                onCheckedChange={onCheckedChange}
                checked={checked}
                value={value}
                className="rounded-[8px] w-6 h-6"
                id={`checkbox-${name}-${String(value)}`}
            />
            <label
                htmlFor={`checkbox-${name}-${String(value)}`}
                className="leading-none cursor-pointer flex-1"
            >
                {text}
            </label>
            {endAdornment}
        </div>
    );
};

export { FilterCheckbox };
export type { FilterChecboxProps };
