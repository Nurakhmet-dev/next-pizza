"use client";

import React /* ReactNode */ from "react";

import { FilterCheckbox, FilterChecboxProps } from "./";
import { Input } from "../ui/input";

type Item = FilterChecboxProps;

interface Props {
    title: string;
    items: Item[];
    defaultItems: Item[];
    limit?: number;
    searchInputPlaceholder?: string;
    className?: string;
    selectedIds?: Set<string>;
    onClickCheckbox?: (value: string) => void;
    loading?: boolean;
    name?: string;
}

const CheckboxFiltersGroup: React.FC<Props> = ({
    title,
    items,
    defaultItems,
    limit = 5,
    searchInputPlaceholder = "Поиск...",
    className,
    selectedIds,
    onClickCheckbox,
    loading,
    name,
}) => {
    const [showAll, setShowAll] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState("");

    const list = showAll
	? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase()))
	: defaultItems?.slice(0, limit);
	/* const filtredItems = items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase())
    ); */

    return (
        <div className={className}>
            <p className="font-bold mb-3">{title}</p>
            <div className="mb-5">
                {showAll && (
                    <Input
                        placeholder={searchInputPlaceholder}
                        className="bg-gray-50 border-none"
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                )}
            </div>
            <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
                {list.map((item, index) => (
                    <FilterCheckbox
                        key={index}
                        text={item.text}
                        value={item.value}
                        onCheckedChange={() => item.value}
                        endAdornment={item.endAdornment}
                        checked={false}
                        name={name}
                    />
                ))}
            </div>
            {items.length > limit && (
                <div
                    className={
                        showAll ? "border-t border-t-neutral-100 mt-4" : ""
                    }
                >
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="text-primary mt-3"
                    >
                        {showAll ? "- Скрыть" : "+ Показать все"}
                    </button>
                </div>
            )}
        </div>
    );
};
export { CheckboxFiltersGroup };

/*

            <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
			{(showAll ? filtredItems : defaultItems || filtredItems).map(
				item => (
					<FilterCheckbox
						onCheckedChange={() =>
							onClickCheckbox?.(item.value)
						}
						checked={selectedIds?.has(item.value)}
						key={String(item.value)}
						value={item.value}
						children={item.text}
						endAdornment={item.endAdornment}
						name={name}
					/>
                    )
                )}
            </div>

            {items.length > limit && (
                <div
                    className={
                        showAll ? "border-t border-t-neutral-100 mt-4" : ""
                    }
                >
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="text-primary mt-3"
                    >
                        {showAll ? "Скрыть" : "+ Показать все"}
                    </button>
                </div>
            )}
			*/
