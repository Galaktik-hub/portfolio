import React, { useState, useMemo } from "react";
import { getAllProjects } from "../../data/projects";
import ProjectCard from "../../components/SkillsPages/ProjectCard";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import StickyBackArrow from "../../components/SkillsPages/StickyBackArrow";

type SortMode = "alpha-asc" | "alpha-desc" | "year-desc" | "year-asc";

const ProjectsListPage: React.FC = () => {
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState<SortMode>("alpha-asc");

    const allProjects = getAllProjects();

    const filtered = useMemo(() => {
        let result = allProjects.filter((p) =>
            p.title.toLowerCase().includes(search.toLowerCase())
        );

        switch (sort) {
            case "alpha-asc":
                result.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case "alpha-desc":
                result.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case "year-desc":
                result.sort((a, b) => b.year - a.year);
                break;
            case "year-asc":
                result.sort((a, b) => a.year - b.year);
                break;
        }

        return result;
    }, [allProjects, search, sort]);

    return (
        <div>
            <Header />
            <div className="projects-list-hero">
                <h1>Mes Projets</h1>
                <p>Découvrez l'ensemble de mes réalisations</p>
            </div>
            <div className="container">
                <div className="projects-list-controls">
                    <div className="projects-search-wrapper">
                        <input
                            type="text"
                            placeholder="Rechercher un projet..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="projects-search"
                            id="project-search"
                        />
                    </div>
                    <div className="projects-sort-wrapper">
                        <label htmlFor="project-sort">Trier par :</label>
                        <select
                            id="project-sort"
                            value={sort}
                            onChange={(e) => setSort(e.target.value as SortMode)}
                            className="projects-sort"
                        >
                            <option value="alpha-asc">Nom (A → Z)</option>
                            <option value="alpha-desc">Nom (Z → A)</option>
                            <option value="year-desc">Année (récent)</option>
                            <option value="year-asc">Année (ancien)</option>
                        </select>
                    </div>
                </div>

                <div className="projects-list-counter">
                    {filtered.length} projet{filtered.length !== 1 ? "s" : ""} trouvé
                    {filtered.length !== 1 ? "s" : ""}
                </div>

                <div className="project-cards projects-list-grid">
                    {filtered.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="projects-empty">
                        <p>Aucun projet ne correspond à votre recherche.</p>
                    </div>
                )}
            </div>
            <StickyBackArrow />
            <Footer />
        </div>
    );
};

export default ProjectsListPage;
