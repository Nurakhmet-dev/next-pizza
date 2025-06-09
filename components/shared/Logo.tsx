import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import {Title} from '@/components/shared';

const Logo: FC = ({}) => {
    return (
        <Link href={"/"}>
            <div className="flex items-center gap-4 max-md:gap-2">
                <Image
                    src="/logo.png"
                    width={35}
                    height={35}
                    alt="Logo"
                    className="max-md:size-7"
                />

                <div>
                    <Title
                        text="Next Pizza"
                        size="sm"
                        className="text-2xl max-md:text-lg max-md:leading-5 uppercase font-black"
                    />
                    <p className="text-sm text-gray-400 leading-3">
                        вкусней уже некуда
                    </p>
                </div>
            </div>
        </Link>
    );
};

export { Logo };
