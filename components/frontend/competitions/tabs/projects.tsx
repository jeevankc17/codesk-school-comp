import { useCallback } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

// Define Project type
type Project = {
  id: number
  title: string
  description: string
  image: string
  buildBy: string
  buildAt: string
  technologies: string[]
}

// Sample data
const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "Minecraft Platformer",
    description:
      "In this Minecraft platformer built by kids in a hackathon, players navigate through a series of challenging obstacles, jumping across gaps, dodging traps, and collecting power-ups to reach the end goal.",
    image: "/placeholder.svg?height=127&width=169",
    buildBy: "Team XYZ",
    buildAt: "Hackathon XYZ",
    technologies: ["Scratch", "IOT"],
  },
  {
    id: 2,
    title: "Smart Garden Monitor",
    description:
      "An IoT project that helps monitor plant health and automates watering based on soil moisture levels. Built using Arduino and basic programming concepts.",
    image: "/placeholder.svg?height=127&width=169",
    buildBy: "Green Coders",
    buildAt: "EcoTech Hackathon",
    technologies: ["Arduino", "Python"],
  },
]

export default function ProjectsTab() {
  const router = useRouter()

  const onScrollBannerButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='bodyContainer']")
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" })
    }
  }, [])

  const onViewProjectButtonClick = useCallback(() => {
    router.push("/coming-soon")
  }, [router])

  return (
    <div className="w-full">
      {/* Banner Section */}
      <header className="self-stretch rounded-[20px] bg-blue-600 flex flex-row items-center justify-between py-8 px-[10px] box-border gap-[5px] text-left text-4xl text-nero font-inter lg:flex-col lg:h-auto md:flex-col md:gap-[5px] md:p-2.5 md:box-border sm:gap-[5px] sm:p-[5px] sm:h-auto sm:min-h-[550px] sm:box-border">
        <div className="w-[775px] flex flex-col items-center justify-center h-full p-[10px] box-border gap-[10px] lg:order-[2] lg:w-full md:w-full sm:w-full">
          <div className="self-stretch flex flex-col items-center justify-start gap-[15px]">
            <div className="self-stretch relative leading-[120%] font-semibold text-3xl md:text-xl sm:text-lg text-center">
              Coding Projects By Kids
            </div>
            <div className="self-stretch relative leading-[150%] text-md sm:text-sm text-center">
              Projects showcase the creativity and technical skills of young coders. These projects range from simple
              games to innovative solutions for real-world problems, all built using various programming languages and
              tools. Each project represents a learning journey and demonstrates how kids can transform their ideas into
              working applications while developing valuable coding skills.
            </div>
          </div>
          <button
            className="cursor-pointer py-[9px] px-5 bg-[#FF6347] self-stretch rounded box-border h-[38px] flex flex-row items-center justify-center border-[1px] border-solid border-nero"
            onClick={onScrollBannerButtonClick}
          >
            <div className="relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-nero text-center inline-block max-h-[58px]">
              View Projects
            </div>
          </button>
        </div>
        <div className="flex-1 h-full flex items-center justify-center">
          <Image
            className="w-full h-full object-cover object-center"
            alt="Projects illustration"
            src="/placeholder.svg?height=500&width=500"
            width={500}
            height={500}
          />
        </div>
      </header>

      {/* Projects List Section */}
      <div className="self-stretch flex flex-row items-start justify-center gap-[20px] relative z-[0] text-center text-sm text-black1 lg:flex-col md:flex-col mt-8">
        <div className="w-full flex flex-col items-start justify-start gap-[20px] z-[1] lg:self-stretch lg:w-auto md:w-full">
          <div className="self-stretch flex flex-row items-center justify-center p-2.5 z-[2]">
            <div className="flex-1 relative leading-[120%] font-semibold sm:text-3xl">
              All projects build by builders and submitted to the hackathons hosted by organizers
            </div>
          </div>
          <div className="self-stretch rounded-2xl bg-whitesmoke-100 flex flex-row flex-wrap items-center justify-start py-4 px-[50px] gap-[0px_16px] z-[1] text-left text-md text-darkslategray-200 border-[2px] border-solid border-whitesmoke-300 sm:pl-0 sm:pr-0 sm:box-border">
            <div className="w-[143px] h-8 flex flex-col items-center justify-center">
              <div className="relative leading-[150%]">Sort projects by</div>
            </div>
            <button className="cursor-pointer py-[9px] px-5 bg-[#E8F4F0] flex-1 rounded flex flex-row items-center justify-center border-[1px] border-solid border-black1 md:w-full sm:pl-0 sm:pr-0 sm:box-border">
              <div className="flex-1 relative text-lg leading-[150%] font-body-large-600 text-black1 text-center inline-block max-h-[58px] sm:text-xs">
                Most viewed
              </div>
            </button>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[20px]">
            {PROJECTS_DATA.map((project) => (
              <div
                key={project.id}
                className="w-[350px] bg-nero flex flex-col items-center justify-center p-[15px] box-border gap-[10px]"
              >
                <div className="self-stretch flex flex-col items-center justify-start gap-[2px] md:flex-col">
                  <Image
                    className="w-[169.3px] relative rounded h-[127px] object-cover"
                    alt={project.title}
                    src={project.image || "/placeholder.svg"}
                    width={169}
                    height={127}
                  />
                  <div className="self-stretch flex flex-col items-center justify-center gap-[10px]">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                        <div className="self-stretch relative leading-[150%] font-semibold">{project.title}</div>
                        <summary className="self-stretch relative text-xs leading-[130%] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                          {project.description}
                        </summary>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start text-sm text-[#3A9679]">
                        <div className="flex-1 flex flex-col items-start justify-start">
                          <div className="self-stretch relative leading-[150%]">Build by:</div>
                          <div className="self-stretch relative leading-[120%] font-semibold">{project.buildBy}</div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start">
                          <div className="self-stretch relative leading-[150%]">Build at:</div>
                          <div className="self-stretch relative leading-[120%] font-semibold">{project.buildAt}</div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[10px]">
                      {project.technologies.map((tech) => (
                        <div
                          key={tech}
                          className="rounded-lg bg-[#6495ED] flex flex-col items-start justify-start p-[5px]"
                        >
                          <div className="relative leading-[130%]">{tech}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <button
                  className="cursor-pointer py-[9px] px-5 bg-[#3A9679] w-[230px] rounded"
                  onClick={onViewProjectButtonClick}
                >
                  <div className="relative text-lg leading-[150%] font-semibold text-white">View Project</div>
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute left-[0] top-[-140px]" data-scroll-to="bodyContainer" />
      </div>
    </div>
  )
}
