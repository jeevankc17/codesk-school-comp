"use client"

import { type FunctionComponent, useMemo, type CSSProperties } from "react"
import { useRouter } from "next/navigation"

export type CodewarTabsType = {
  className?: string

  /** Style props */
  organizersTabBackgroundColor?: CSSProperties["backgroundColor"]
  buildersTabBackgroundColor?: CSSProperties["backgroundColor"]
  hackathonsTabBackgroundColor?: CSSProperties["backgroundColor"]
  projectsTabBackgroundColor?: CSSProperties["backgroundColor"]

  /** Action props */
  onHackathonsTabClick?: () => void
  onProjectsTabClick?: () => void
  onBuildersTabClick?: () => void
  onOrganizersTabClick?: () => void
}

const CodewarTabs: FunctionComponent<CodewarTabsType> = ({
  className = "",
  organizersTabBackgroundColor,
  buildersTabBackgroundColor,
  hackathonsTabBackgroundColor,
  projectsTabBackgroundColor,
  onHackathonsTabClick,
  onProjectsTabClick,
  onBuildersTabClick,
  onOrganizersTabClick,
}) => {
  const router = useRouter()

  const organizersTabStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: organizersTabBackgroundColor,
    }
  }, [organizersTabBackgroundColor])

  const buildersTabStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: buildersTabBackgroundColor,
    }
  }, [buildersTabBackgroundColor])

  const hackathonsTabStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: hackathonsTabBackgroundColor,
    }
  }, [hackathonsTabBackgroundColor])

  const projectsTabStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: projectsTabBackgroundColor,
    }
  }, [projectsTabBackgroundColor])

  return (
    <div
      className={`self-stretch h-[45px] rounded-lg bg-blue-600 flex flex-row flex-wrap items-start justify-center py-2.5 px-0 box-border gap-[5px] fixed top-[50px] left-0 right-0 z-[98] text-center text-lg text-[#FF6347] font-body-large-600 sm:pl-0 sm:pr-0 sm:box-border sm:h-[45px]`}
    >
      <div className="w-full max-w-[1240px] mx-auto flex flex-row flex-wrap items-start justify-center gap-[5px]">
        <button
          className="cursor-pointer py-[12px] px-5 bg-white w-[130px] rounded box-border h-[45px] flex flex-row items-center justify-center border-[1px] border-solid border-white md:w-20 md:pl-2.5 md:pr-2.5 md:box-border sm:w-20 sm:h-[35px] sm:py-[8px]"
          onClick={onHackathonsTabClick}
          style={hackathonsTabStyle}
        >
          <div className="relative text-lg leading-[150%] font-semibold font-body-large-600 text-[#FF6347] text-center inline-block max-h-[58px] md:text-xs sm:text-xs">
            Hackathons
          </div>
        </button>
        <button
          className="cursor-pointer py-[12px] px-5 bg-white w-[130px] rounded box-border h-[45px] flex flex-row items-center justify-center border-[1px] border-solid border-white md:w-20 md:pl-2.5 md:pr-2.5 md:box-border sm:w-20 sm:h-[35px] sm:py-[8px]"
          onClick={onProjectsTabClick}
          style={projectsTabStyle}
        >
          <div className="relative text-lg leading-[150%] font-semibold font-body-large-600 text-[#FF6347] text-center inline-block max-h-[58px] md:text-xs sm:text-xs">
            Projects
          </div>
        </button>
        <button
          className="cursor-pointer py-[12px] px-5 bg-white w-[130px] rounded box-border h-[45px] flex flex-row items-center justify-center border-[1px] border-solid border-white md:w-20 md:pl-2.5 md:pr-2.5 md:box-border sm:w-20 sm:h-[35px] sm:py-[8px]"
          onClick={onBuildersTabClick}
          style={buildersTabStyle}
        >
          <div className="relative text-lg leading-[150%] font-semibold font-body-large-600 text-[#FF6347] text-center inline-block max-h-[58px] md:text-xs sm:text-xs">
            Builders
          </div>
        </button>
        <button
          className="cursor-pointer py-[12px] px-5 bg-white w-[130px] rounded box-border h-[45px] flex flex-row items-center justify-center border-[1px] border-solid border-white md:w-20 md:pl-2.5 md:pr-2.5 md:box-border sm:w-20 sm:h-[35px] sm:py-[8px]"
          onClick={onOrganizersTabClick}
          style={organizersTabStyle}
        >
          <div className="relative text-lg leading-[150%] font-semibold font-body-large-600 text-[#FF6347] text-center inline-block max-h-[58px] md:text-xs sm:text-xs">
            Organizers
          </div>
        </button>
      </div>
    </div>
  )
}

export default CodewarTabs
