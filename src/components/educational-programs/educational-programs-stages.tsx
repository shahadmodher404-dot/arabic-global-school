"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import AppImage from "../app-image";
import { Card, CardContent } from "../ui/card";
import Section from "../ui/section";

function EducationalProgramsStages() {
    const t = useTranslations("educational_programs.stages");

    return (
        <Section size={"screen"} className="bg-background-container">
            <Section.Inner></Section.Inner>
        </Section>
    );
}

export default EducationalProgramsStages;
