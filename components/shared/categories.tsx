"use client";

import React, { FC } from "react";
import { useCategoryStore } from "@/store/category";

import { cn } from "@/lib/utils";

interface Props {
    className?: string;
}

const cats: { id: number; name: string }[] = [
    { id: 1, name: "Пицца" },
    { id: 2, name: "Комбо" },
    { id: 3, name: "Салаты" },
    { id: 4, name: "Десерты" },
    { id: 5, name: "Напитки" },
    { id: 6, name: "Закуски" },
    { id: 7, name: "Гарниры" },
];

const Categories: FC<Props> = ({ className }): React.JSX.Element => {
    const activeId = useCategoryStore((state) => state.activeId);
    return (
        <div
            className={cn(
                /*default->*/ "inline-flex gap-1 bg-gray-50 p-1 rounded-2xl overflow-auto",
                className
            )}
        >
            {cats.map(({ name, id }) => (
                <a
                    href={`#${name}`}
                    key={id}
                    className={cn(
                        "flex items-center font-semibold h-11 px-5 rounded-2xl",
                        activeId === id &&
                            "bg-white shadow-md shadow-gray-200 text-primary"
                    )}
                >
                    <button type="button">{name}</button>
                </a>
            ))}
        </div>
    );
};

export { Categories };
