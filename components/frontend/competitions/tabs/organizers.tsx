import { useCallback } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

// Define Organizer type
type Organizer = {
  id: number
  name: string
  logo: string
  hackathonsOrganized: number
  projectsSubmitted: number
  prizeWorth: number
}

// Sample data
const ORGANIZERS_DATA: Organizer[] = [
  {
    id: 1,
    name: "CoDesk Innovations",
    logo: "/placeholder.svg?height=100&width=100",
    hackathonsOrganized: 10,
    projectsSubmitted: 250,
    prizeWorth: 1500,
  },
  {
    id: 2,
    name: "Tech Kids Nepal",
    logo: "/placeholder.svg?height=100&width=100",
    hackathonsOrganized: 8,
    projectsSubmitted: 180,
    prizeWorth: 1200,
  },
]

export default function OrganizersTab() {
  const router = useRouter()

  const onScrollBannerButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='bodyContainer']")
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" })
    }
  }, [])

  return (
    <div className="w-full">
      {/* Banner Section */}
      <div className="self-stretch rounded-mini bg-blue-600 flex flex-row items-center justify-between py-8 px-[15px] z-[2] lg:flex-col md:flex-col sm:pl-[5px] sm:pr-[5px] sm:box-border">
        <div className="flex-1 flex flex-col items-center justify-center p-[15px] gap-[34px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="self-stretch relative leading-[120%] font-semibold text-3xl md:text-xl sm:text-lg text-center">
              Our Organizers
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start text-md">
            <div className="self-stretch relative leading-[150%] text-center">
              Organizations are entities such as schools, coding clubs, non-profits, or companies that organize
              hackathons, provide coding resources, or support the coding community for kids. They may host hackathons
              on the platform, offer coding workshops or courses, and provide opportunities for kids to engage with
              coding education and technology initiatives.
            </div>
          </div>
          <button
            className="cursor-pointer py-[9px] px-5 bg-[#FF6347] self-stretch rounded box-border h-[38px] flex flex-row items-center justify-center border-[1px] border-solid border-nero"
            onClick={onScrollBannerButtonClick}
          >
            <div className="relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-nero text-center inline-block max-h-[58px]">
              View Organizers
            </div>
          </button>
        </div>
        <Image
          className="flex-1 relative max-w-full overflow-hidden h-[500px] object-cover lg:order-[1] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch sm:h-[300px]"
          alt="Organizers illustration"
          src="/placeholder.svg?height=500&width=500"
          width={500}
          height={500}
        />
      </div>

      {/* Organizers List Section */}
      <div className="self-stretch flex flex-row items-start justify-center gap-[20px] relative z-[1] text-md text-black1 lg:flex-col md:flex-col mt-8">
        <div className="w-full flex flex-col items-start justify-start gap-[20px] z-[1] lg:self-stretch lg:w-auto md:w-full">
          <div className="self-stretch flex flex-row items-center justify-center p-2.5 z-[2] text-center text-sm">
            <div className="flex-1 relative leading-[120%] font-semibold sm:text-3xl">
              All organizers who organize the hackathons and help to shape the future of children
            </div>
          </div>
          <div className="self-stretch rounded-2xl bg-whitesmoke-100 flex flex-row flex-wrap items-center justify-start py-4 px-10 gap-[0px_16px] z-[1] text-darkslategray-200 border-[2px] border-solid border-whitesmoke-300 sm:pl-0 sm:pr-0 sm:box-border">
            <div className="w-[168px] h-8 flex flex-col items-center justify-center">
              <div className="self-stretch relative leading-[150%]">Sort organizers by</div>
            </div>
            <button className="cursor-pointer py-[9px] px-5 bg-[#E8F4F0] flex-1 rounded flex flex-row items-center justify-center border-[1px] border-solid border-black1 md:w-full sm:pl-0 sm:pr-0 sm:box-border">
              <div className="flex-1 relative text-lg leading-[150%] font-body-large-600 text-black1 text-center inline-block max-h-[58px] sm:text-xs">
                Most Hackathons Organized
              </div>
            </button>
          </div>
          <div className="self-stretch bg-nero flex flex-col gap-[20px]">
            {ORGANIZERS_DATA.map((organizer, index) => (
              <div
                key={organizer.id}
                className="self-stretch bg-nero flex flex-row flex-wrap items-center justify-start"
              >
                <div className="rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg bg-whitesmoke-300 flex flex-row items-start justify-start p-4">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <b className="relative leading-[24px]">#</b>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-2xl">
                    <div className="relative leading-[28px] font-extrabold">{index + 1}</div>
                  </div>
                </div>
                <div className="flex-1 rounded bg-nero flex flex-row flex-wrap items-center justify-start gap-[10px]">
                  <div className="flex-1 rounded-2xl bg-nero flex flex-row items-center justify-start gap-[10px]">
                    <Image
                      className="w-[100px] rounded h-[100px] overflow-hidden shrink-0 object-cover"
                      alt={organizer.name}
                      src={organizer.logo || "/placeholder.svg"}
                      width={100}
                      height={100}
                    />
                    <div className="flex-1 relative leading-[150%] font-semibold">{organizer.name}</div>
                  </div>
                  <div className="w-[200px] rounded-2xl bg-nero flex flex-row items-center justify-start p-2 box-border gap-[5px]">
                    <div className="rounded-xl bg-blue-600 flex flex-row items-start justify-start p-5">
                      <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <b className="self-stretch relative tracking-[-0.12px] leading-[28px]">
                          {organizer.hackathonsOrganized}
                        </b>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start text-xs text-gray-500 font-body-large-600">
                        <div className="self-stretch relative leading-[130%]">hackathons</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[200px] rounded-2xl bg-nero flex flex-row items-center justify-start p-2 box-border gap-[5px]">
                    <div className="rounded-xl bg-[#3A9679] flex flex-row items-start justify-start p-5">
                      <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <b className="self-stretch relative tracking-[-0.12px] leading-[28px]">
                          {organizer.projectsSubmitted}
                        </b>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start text-xs text-gray-500 font-body-large-600">
                        <div className="self-stretch relative leading-[130%]">Projects</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[200px] rounded-2xl bg-nero flex flex-row items-center justify-start p-2 box-border gap-[5px]">
                    <div className="rounded-xl bg-[#006D77] flex flex-row items-start justify-start p-5">
                      <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <b className="self-stretch relative tracking-[-0.12px] leading-[28px]">
                          {organizer.prizeWorth}$
                        </b>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start text-xs text-gray-500 font-body-large-600">
                        <div className="self-stretch relative leading-[130%]">Prize worth</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute left-[0] top-[-140px]" data-scroll-to="bodyContainer" />
      </div>
    </div>
  )
}
