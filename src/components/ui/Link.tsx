import React from "react";
import Link, { LinkProps } from "next/link";
import { buttonVariants } from "./button";
import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";

interface Props extends LinkProps, VariantProps<typeof buttonVariants> {
    href: string;
    className?: string;
    children: React.ReactNode;
    style?: React.CSSProperties;
}

function CustomLink({ href, className, variant, shadow, size, style, ...props }: Props) {
    return <Link href={href} style={style} className={cn(buttonVariants({ className, variant, shadow, size }))} {...props} />;
}

export default CustomLink;
