"use client";

import React, { useState } from "react";
import CodewarTabs from "@/components/frontend/competitions/codewar-tabs";
import HeroSection from "@/components/frontend/competitions/hero-section";
import FourPillars from "@/components/frontend/competitions/four-pillars";
import WhyHackathons from "@/components/frontend/competitions/why-hackathons";

import HackathonsTab from "@/components/frontend/competitions/tabs/hackathons"
import ProjectsTab from "@/components/frontend/competitions/tabs/projects"
import BuildersTab from "@/components/frontend/competitions/tabs/builders"
import OrganizersTab from "@/components/frontend/competitions/tabs/organizers"

// Define TabType
type TabType = "home" | "hackathons" | "projects" | "builders" | "organizers";

export default function CompetitionsPage() {
  const [activeTab, setActiveTab] = useState<TabType>("home")

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab)
  }

  const renderTabContent = () => {
    if (activeTab === "home") {
      return (
        <>
          <HeroSection />
          <FourPillars />
          <WhyHackathons />
        </>
      );
    }

    switch (activeTab) {
      case "hackathons":
        return (
          <>
            <HackathonsTab />
          </>
        )
      case "projects":
        return <ProjectsTab />
      case "builders":
        return <BuildersTab />
      case "organizers":
        return <OrganizersTab />
      default:
        return null;
    }
  }
  return (
    <main className="w-full relative bg-nero flex flex-col items-start justify-center p-4 box-border gap-[10px] text-center text-13xl text-black1 font-body-large-600 sm:py-[20px] sm:px-[5px] sm:box-border">
      <CodewarTabs
            hackathonsTabBackgroundColor={activeTab === "hackathons" ? "#0063B0" : "#ffffff"}
            projectsTabBackgroundColor={activeTab === "projects" ? "#0063B0" : "#ffffff"}
            buildersTabBackgroundColor={activeTab === "builders" ? "#0063B0" : "#ffffff"}
            organizersTabBackgroundColor={activeTab === "organizers" ? "#0063B0" : "#ffffff"}
            onHackathonsTabClick={() => handleTabChange("hackathons")}
            onProjectsTabClick={() => handleTabChange("projects")}
            onBuildersTabClick={() => handleTabChange("builders")}
            onOrganizersTabClick={() => handleTabChange("organizers")}
          />
          {/* Render the active tab content */}
        {renderTabContent()}
    </main>
  );
}