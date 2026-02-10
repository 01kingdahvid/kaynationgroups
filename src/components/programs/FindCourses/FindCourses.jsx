"use client";

import { useState } from "react";
import programs from "@/data/programs.json";
import styles from "@/styles/pages/FindCourses.module.css";


import CourseFilters from "./CourseFilters";
import CourseSearch from "./CourseSearch";
import Pagination from "./Pagination";
import CourseCard from "./CourseCard";
import { FilterOutlined } from "@ant-design/icons";
import FilterDrawer from "./FilterDrawer";

export default function FindCoursesPage() {
    const [search, setSearch] = useState("");
    const [filters, setFilters] = useState({
        studyLevel: [],
        destination: [],
        studyMode: [],
        city: [],
        institution: [],
        tuitionMin: 7000,
        tuitionMax: 23500
    });

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [page, setPage] = useState(1);
    const perPage = 6;

    const filtered = programs.filter(course => {
        const matchSearch =
            course.title.toLowerCase().includes(search.toLowerCase()) ||
            course.university.toLowerCase().includes(search.toLowerCase());

        const matchLevel =
            filters.studyLevel.length === 0 ||
            filters.studyLevel.includes(course.studyLevel);

        const matchCity =
            filters.city.length === 0 || filters.city.includes(course.city);

        const matchTuition =
            course.tuition >= filters.tuitionMin &&
            course.tuition <= filters.tuitionMax;

        return matchSearch && matchLevel && matchCity && matchTuition;
    });

    const totalPages = Math.ceil(filtered.length / perPage);
    const paginated = filtered.slice(
        (page - 1) * perPage,
        page * perPage
    );

    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                {/* LEFT */}
                <div className={styles.left}>
                    <div className={styles.intro}>
                        <h2>KAYNATION EDUCATIONAL SERVICES: YOUR GATEWAY TO UK EDUCATION</h2>
                        <div className={styles.wave} />

                        <p>
                            It can be hard to find your way around the confusing world of UK education, but KNES is there to help. As the top experts on the UK’s education system, we’ve found a way to help foreign students who want to take advantage of the UK’s unbeatable education system.
                            <br />
                            <br />
                            From the ancient halls of Oxford and Cambridge to the modern campuses of London’s busy institutions, we have helped hundreds of ambitious students find their way through schools, colleges, and top universities. Every student we work with is more than just a client; they are also ambitious thinkers who are ready to jump onto the world stage.
                            <br />
                            <br />
                            Don’t stay on the sidelines if you want to take advantage of the UK’s long history of academic excellence and its reputation around the world. Reach out to KNES and start on a road to academic excellence in the UK that will change your life. Your dream of going to school in a different country is only a talk away.
                        </p>
                    </div>

                    <CourseSearch value={search} onChange={setSearch} />



                    <div className={styles.mobileFilterBar}>
                        <button onClick={() => setDrawerOpen(true)}><FilterOutlined /> Filter</button>
                    </div>


                    <div className={styles.grid}>
                        {paginated.map(course => (
                            <div
                                key={course.id}
                                style={{
                                    padding: "0.3rem",
                                    background: "#eeeeee",
                                    borderRadius: "8px",
                                    height: "auto"
                                }}
                            >
                                <CourseCard course={course} />
                            </div>
                        ))}
                    </div>


                    <Pagination
                        page={page}
                        totalPages={totalPages}
                        onChange={setPage}
                    />
                </div>

                {/* RIGHT */}
                <div className={styles.right}>
                    <CourseFilters filters={filters} setFilters={setFilters} />
                </div>
            </div>

            {/* Drawer (Mobile / Small Tablet) */}
            <FilterDrawer
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                filters={filters}
                setFilters={setFilters}
            />
        </section>
    );
}
