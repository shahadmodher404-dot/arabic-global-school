import { cva, VariantProps } from "class-variance-authority";
import React, { PropsWithChildren } from "react";

const sectionVariants = cva("flex flex-col flex-1", {
    variants: {
        size: {
            default: "max-w-8xl w-full mx-auto py-16 px-4 md:px-8",
            screen: "w-full p-0 [&>div]:py-16 [&>div]:px-4 [&>div]:md:px-8 [&>div]:max-w-8xl [&>div]:mx-auto [&>div]:w-full [&>div]:flex [&>div]:flex-col [&>div]:flex-1",
        },
    },
    defaultVariants: {
        size: "default",
    },
});

interface Props extends PropsWithChildren, VariantProps<typeof sectionVariants> {
    className?: string;
}

function Section({ children, size, className }: Props) {
    return <section className={sectionVariants({ className, size })}>{children}</section>;
}

export default Section;
