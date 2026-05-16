"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Image from "next/image";
import aboutImg from "@/public/aboutImg.jpg";

export default function About() {
  return (
    <div className="relative">
      <SectionHeading>About</SectionHeading>
      <section
        className="mb-6 max-w-[45rem] lg:flex items-center text-center leading-7 sm:mb-12 scroll-mt-28 relative"
        id="about"
      >
        <div className="m-5 ml-2">
          <p className="mb-5 text-lg lg:text-left">
            Self-motivated Software Developer and Data Science graduate with a strong foundation in building scalable, testable applications. I transform complex data into actionable insights and enjoy solving real-world problems using AI, machine learning, and modern web technologies.
          </p>

          <p className="mb-5 text-lg lg:text-left">
            I have experience in containerization, performance optimization, and managing complex relational databases. I also build data pipelines and analytics dashboards that help teams make faster, smarter decisions.
          </p>

          <div className="mb-5 text-lg lg:text-left">
            <p className="font-semibold">Education</p>
            <ul className="list-disc ml-6 mt-2 text-base text-white/80">
              <li>Bachelor of Science in Data Science — GIKI (09/2021 – 06/2025)</li>
              <li>Higher Secondary School Certificate — Fazaia Model Inter College Mushaf (A1)</li>
              <li>Secondary School Certificate — Fazaia Inter College Minhas (A1)</li>
            </ul>
          </div>

          <div className="mb-6 text-lg lg:text-left">
            <p className="font-semibold">Core Skills</p>
            <p className="mt-2 text-base text-white/80">
              Python, SQL, C++, R, HTML/CSS, Power BI, Metabase, Superset, Docker, Apache Spark, Airflow, ETL, Data Mining
            </p>
          </div>

          <div className="mb-6 text-lg lg:text-left">
            <p className="font-semibold">CV</p>
            <p className="mt-2 text-base text-white/80">
              
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-3 justify-center sm:justify-start">
              <a
                href="/CV_Hamdan_Abdollah_Khan.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 bg-black px-5 py-2 text-sm font-semibold text-white transition hover:border-white"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center relative">
          <Image
            src={aboutImg}
            alt="Hamdan Abdollah Khan"
            quality={95}
            priority
            className="w-[200px] mb-20 lg:mb-0 lg:w-[500px] rounded-xl"
          />
        </div>
      </section>
    </div>
  );
}
