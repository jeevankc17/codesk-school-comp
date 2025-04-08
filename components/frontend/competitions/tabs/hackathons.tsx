"use client"

import { useState, useCallback, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

// Define Hackathon type
type Hackathon = {
  id: number
  title: string
  hostedBy: string
  teamSize: number
  label: string
  theme: string
  status: "open" | "upcoming" | "completed"
  image: string
}

// Sample data
const HACKATHONS_DATA: Hackathon[] = [
  {
    id: 1,
    title: "Nepal CodeWars 2024 Kid's Hackathon",
    hostedBy: "CoDesk Innovations",
    teamSize: 3,
    label: "Advanced",
    theme: "No Restrictions",
    status: "open",
    image: "/placeholder.svg?height=127&width=186",
  },
  {
    id: 2,
    title: "Code For Future 2024",
    hostedBy: "Tech Nepal",
    teamSize: 4,
    label: "Beginner",
    theme: "Education",
    status: "open",
    image: "/placeholder.svg?height=127&width=186",
  },
  {
    id: 3,
    title: "Young Innovators Hackathon 2024",
    hostedBy: "Tech Kids Nepal",
    teamSize: 4,
    label: "Intermediate",
    theme: "Education Technology",
    status: "upcoming",
    image: "/placeholder.svg?height=127&width=186",
  },
  {
    id: 4,
    title: "KidsCode Challenge 2024",
    hostedBy: "Code Academy Nepal",
    teamSize: 2,
    label: "Beginner",
    theme: "Game Development",
    status: "upcoming",
    image: "/placeholder.svg?height=127&width=186",
  },
  {
    id: 5,
    title: "Junior Developers Meetup 2024",
    hostedBy: "Code Academy Nepal",
    teamSize: 2,
    label: "Beginner",
    theme: "Game Development",
    status: "completed",
    image: "/placeholder.svg?height=127&width=186",
  },
]

// Define status type
type HackathonStatus = "open" | "upcoming" | "completed"

export default function HackathonsTab() {
  const router = useRouter()
  const [activeStatus, setActiveStatus] = useState<HackathonStatus>("open")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const bannerElement = document.getElementById("hackathon-banner")
      if (bannerElement) {
        const bannerBottom = bannerElement.getBoundingClientRect().bottom
        setIsScrolled(bannerBottom < 142) // 142px is header height
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const onScrollBannerButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='bodyContainer']")
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" })
    }
  }, [])

  const onApplyNowButtonClick = useCallback(() => {
    router.push("/coming-soon")
  }, [router])

  const renderHackathonSection = (status: HackathonStatus, title: string) => {
    const hackathons = HACKATHONS_DATA.filter((h) => h.status === status).slice(0, 10)

    return (
      <div className="self-stretch flex flex-col items-start justify-start mt-3 gap-[16px]">
        <div className="self-stretch relative leading-[30px] font-semibold">{title}</div>
        <div className="grid grid-cols-1 gap-4 w-full">
          {hackathons.map((hackathon) => (
            <div
              key={hackathon.id}
              className="bg-nero rounded-lg shadow-sm border border-gray-100/10 hover:shadow-md transition-shadow duration-300 overflow-hidden w-full"
            >
              <div className="flex flex-row flex-wrap items-center justify-between p-[15px] sm:p-3 text-center text-2xl text-[#006D77] font-body-large-600 w-full">
                <div className="flex-1 flex flex-row items-center justify-between gap-6 md:flex-col sm:gap-3">
                  <Image
                    className="w-[186px] rounded-lg h-[127px] overflow-hidden shrink-0 object-cover shadow-sm md:w-full sm:h-[100px]"
                    alt={hackathon.title}
                    src={hackathon.image || "/placeholder.svg"}
                    width={186}
                    height={127}
                  />
                  <div className="flex-1 flex flex-col items-start justify-center gap-[10px] md:flex-[unset] md:self-stretch sm:gap-2">
                    <div className="self-stretch flex flex-col items-start justify-start gap-2 sm:gap-1">
                      <div className="self-stretch flex flex-row items-start justify-start">
                        <div className="flex-1 relative leading-[150%] font-semibold sm:text-lg">{hackathon.title}</div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[10px] text-right text-md text-[#3A9679] sm:text-sm">
                        <div className="flex-1 relative leading-[150%]">Hosted by:</div>
                        <div className="flex-1 relative leading-[150%] text-left">{hackathon.hostedBy}</div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start text-right text-sm text-black1 gap-2 sm:text-xs sm:gap-1">
                      <div className="self-stretch flex flex-row items-center justify-start">
                        <div className="flex-1 relative leading-[120%] font-semibold">Team Size:</div>
                        <div className="flex-1 relative leading-[120%] font-semibold text-left">
                          {hackathon.teamSize}
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start">
                        <div className="flex-1 relative leading-[120%] font-semibold">Label:</div>
                        <div className="flex-1 relative leading-[120%] font-semibold text-left">{hackathon.label}</div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start">
                        <div className="flex-1 relative leading-[120%] font-semibold">Theme:</div>
                        <div className="flex-1 flex flex-row flex-wrap items-center justify-start text-left text-xs">
                          <div className="rounded-lg bg-[#E8F4F0] flex flex-col items-start justify-start p-[5px]">
                            <div className="relative leading-[130%]">{hackathon.theme}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className={`cursor-pointer py-[9px] px-5 w-[230px] rounded-lg box-border h-12 flex flex-row items-center justify-center border-[1px] border-solid md:w-full sm:py-2 sm:h-10 sm:text-sm ${
                    status === "open"
                      ? "bg-[#006D77] text-nero border-nero"
                      : status === "upcoming"
                        ? "bg-[#3A9679] text-nero border-nero"
                        : "bg-nero text-[#006D77] border-[#006D77]"
                  }`}
                  onClick={onApplyNowButtonClick}
                >
                  <div className="relative text-lg leading-[150%] font-semibold font-body-large-600 text-center inline-block max-h-[58px] sm:text-sm">
                    {status === "open" ? "Apply Now" : status === "upcoming" ? "Remind Me" : "View Projects"}
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      {/* Banner Section */}
      <div
        id="hackathon-banner"
        className="self-stretch rounded-mini bg-blue-600 flex flex-row items-center justify-between py-8 px-[15px] z-[99] lg:flex-col md:flex-col sm:pl-[5px] sm:pr-[5px] sm:box-border"
      >
        <div className="flex-1 flex flex-col items-center justify-center p-[15px] gap-[34px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="self-stretch relative leading-[120%] font-semibold text-3xl md:text-xl sm:text-lg text-center">
              Our Hackathons
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start text-sm">
            <div className="self-stretch relative leading-[150%] text-md text-center">
              These are organized coding events where kids can participate individually or in teams to work on coding
              challenges or projects within a specified time frame, usually ranging from a few hours to a few days.
              Hackathons foster creativity, collaboration, and problem-solving skills among kids while they develop
              projects using coding languages and tools.
            </div>
          </div>
          <button
            className="cursor-pointer py-[9px] px-5 bg-[#FF6347] self-stretch rounded box-border h-[38px] flex flex-row items-center justify-center border-[1px] border-solid border-nero"
            onClick={onScrollBannerButtonClick}
          >
            <div className="relative tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-nero text-center inline-block max-h-[58px] text-3xl md:text-xl sm:text-lg">
              View Hackathons
            </div>
          </button>
        </div>
        <Image
          className="flex-1 relative max-w-full overflow-hidden h-[500px] object-cover lg:order-[1] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch sm:h-[300px]"
          alt="Hackathons illustration"
          src="/placeholder.svg?height=500&width=500"
          width={500}
          height={500}
        />
      </div>

      {/* Status Tabs */}
      <div
        id="status-tabs"
        className={`transition-all duration-300 w-full mt-8 ${
          isScrolled ? "sticky top-[142px] z-[99] bg-white py-2" : "relative"
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-2">
          <div className="w-full max-w-[900px] bg-nero py-2.5 rounded-lg shadow-sm overflow-x-hidden">
            <div className="flex flex-row items-center gap-3 sm:gap-2 pl-2">
              <button
                className={`text-base font-semibold transition-colors relative px-5 py-[9px] rounded sm:px-3 sm:py-2 sm:text-sm ${
                  activeStatus === "open"
                    ? "bg-[#006D77] text-white"
                    : "text-gray-600 hover:text-[#006D77] border border-[#006D77]"
                }`}
                onClick={() => setActiveStatus("open")}
              >
                Ongoing
              </button>
              <button
                className={`text-base font-semibold transition-colors relative px-5 py-[9px] rounded sm:px-3 sm:py-2 sm:text-sm ${
                  activeStatus === "upcoming"
                    ? "bg-[#006D77] text-white"
                    : "text-gray-600 hover:text-[#006D77] border border-[#006D77]"
                }`}
                onClick={() => setActiveStatus("upcoming")}
              >
                Upcoming
              </button>
              <button
                className={`text-base font-semibold transition-colors relative px-5 py-[9px] rounded sm:px-3 sm:py-2 sm:text-sm ${
                  activeStatus === "completed"
                    ? "bg-[#006D77] text-white"
                    : "text-gray-600 hover:text-[#006D77] border border-[#006D77]"
                }`}
                onClick={() => setActiveStatus("completed")}
              >
                Completed
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hackathons List Section */}
      <div className="self-stretch flex flex-row items-start justify-center gap-[20px] relative z-[0] lg:flex-col md:flex-col mt-[5px] w-full">
        <div className="w-full max-w-[900px] flex flex-col items-start justify-start z-[1]">
          <div className="self-stretch flex flex-col items-start justify-start p-2 gap-[10px] z-[0] text-left text-xl font-segoe-ui">
            {activeStatus === "open" && renderHackathonSection("open", "Open Hackathons")}
            {activeStatus === "upcoming" && renderHackathonSection("upcoming", "Upcoming Hackathons")}
            {activeStatus === "completed" && renderHackathonSection("completed", "Completed Hackathons")}
          </div>
        </div>
        <div className="absolute left-[0] top-[-140px]" data-scroll-to="bodyContainer" />
      </div>
    </div>
  )
}

