import { FC } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpDown } from "lucide-react";

interface Props {
    className?: string;
}

const SortPopup: FC<Props> = ({ className }) => {
    return (
        <div
            className={cn(
                "inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer",
                className
            )}
        >
            <ArrowUpDown className="w-4 h-4" />
            <b className="max-md:hidden">Сортировка</b>
            <b>:</b>
            <b className="text-primary">популярное</b>
        </div>
    );
};

export { SortPopup };
