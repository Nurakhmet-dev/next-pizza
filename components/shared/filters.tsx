import React, { FC } from "react";
import { cn } from "@/lib/utils";

import { Input } from "@/components/ui";
import {
    Title,
    FilterCheckbox,
    RangeSlider,
    CheckboxFiltersGroup,
} from "@/components/shared";

interface props {
    className?: string;
}
const Filters: FC<props> = ({ className }) => {
    return (
        <div className={cn("", className)}>
            <Title
                text="Фильтрация"
                size="sm"
                className="mb-5 font-bold pb-4 border-b border-b-neutral-100"
            />

            {/* Top Checkboxes */}
            <div className="flex flex-col gap-4">
                <FilterCheckbox text="Можно собирать" value="1" />
                <FilterCheckbox text="Новинки" value="2" />
            </div>

            {/* Filter price */}
            <div className="mt-10 pb-7">
                <p className="font-bold mb-3">Цена от и до:</p>
                <div className="flex gap-3 mb-5">
                    <Input
                        type="number"
                        placeholder="0"
                        min={0}
                        max={30000}
                        /* onChange={(e) => set("priceFrom", e.target.value)}
                        value={String(filters.priceFrom || 0)} */
                    />
                    <Input
                        type="number"
                        min={100}
                        max={30000}
                        placeholder="30000"
                        /* onChange={(e) => set("priceTo", e.target.value)}
                        value={String(filters.priceTo || 0)} */
                    />
                </div>
                <RangeSlider
                    min={0}
                    max={3000}
                    step={10}
                    value={[0, 3000]}
                    /* onValueChange={([priceFrom, priceTo]) => {
						set("priceFrom", String(priceFrom || 0));
						set("priceTo", String(priceTo || 0));
					}} */
                />
            </div>
            <CheckboxFiltersGroup
                className="mt-5"
                title="Ингредиенты"
                limit={6}
                defaultItems={[
                    { text: "Ингредиент 1", value: "1" },
                    { text: "Ингредиент 2", value: "2" },
                    { text: "Ингредиент 3", value: "3" },
                    { text: "Ингредиент 1", value: "4" },
                    { text: "Ингредиент 2", value: "5" },
                    { text: "Ингредиент 3", value: "6" },
                ]}
                items={[
                    { text: "Ингредиент 1", value: "1" },
                    { text: "Ингредиент 2", value: "2" },
                    { text: "Ингредиент 3", value: "3" },
                    { text: "Ингредиент 1", value: "4" },
                    { text: "Ингредиент 2", value: "5" },
                    { text: "Ингредиент 3", value: "6" },
                    { text: "Ингредиент 1", value: "1" },
                    { text: "Ингредиент 2", value: "2" },
                    { text: "Ингредиент 3", value: "3" },
                    { text: "Ингредиент 1", value: "4" },
                    { text: "Ингредиент 2", value: "5" },
                    { text: "Ингредиент 3", value: "6" },
                ]}
            />
        </div>
    );
};

export { Filters };
