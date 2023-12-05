"use client";
import ContainerAOS from "@/app/commons/components/elements/ContainerAOS";
import React from "react";
import ProjectDetail from "./../components/ProjectDetails";

const ProjectDetailPage = () => {
  return (
    <div className="select-none">
      <ContainerAOS>
        <ProjectDetail/>
      </ContainerAOS>
    </div>
  );
};
export default ProjectDetailPage;