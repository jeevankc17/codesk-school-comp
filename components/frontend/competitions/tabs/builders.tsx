import { useCallback } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

// Define Builder type
type Builder = {
  id: number
  name: string
  avatar: string
  hackathonsAttended: number
  projectsCompleted: number
  prizesWon: number
}

// Sample data
const BUILDERS_DATA: Builder[] = [
  {
    id: 1,
    name: "Nisha KC",
    avatar: "/placeholder.svg?height=100&width=100",
    hackathonsAttended: 128,
    projectsCompleted: 32,
    prizesWon: 6,
  },
  {
    id: 2,
    name: "Aarav Sharma",
    avatar: "/placeholder.svg?height=100&width=100",
    hackathonsAttended: 98,
    projectsCompleted: 25,
    prizesWon: 4,
  },
  {
    id: 3,
    name: "Priya Patel",
    avatar: "/placeholder.svg?height=100&width=100",
    hackathonsAttended: 85,
    projectsCompleted: 20,
    prizesWon: 3,
  },
]

export default function BuildersTab() {
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
              Our Builders
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start text-md">
            <div className="self-stretch relative leading-[150%] text-center">
              Builders are the young coders or participants who engage in creating projects either during hackathons or
              independently. They use their coding skills and creativity to build innovative solutions to real-world
              problems or to express their ideas through technology. Builders can collaborate with others, explore
              coding resources, and showcase their projects to the community.
            </div>
          </div>
          <button
            className="cursor-pointer py-[9px] px-5 bg-[#FF6347] self-stretch rounded box-border h-[38px] flex flex-row items-center justify-center border-[1px] border-solid border-nero"
            onClick={onScrollBannerButtonClick}
          >
            <div className="relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-nero text-center inline-block max-h-[58px]">
              View Builders
            </div>
          </button>
        </div>
        <Image
          className="flex-1 relative max-w-full overflow-hidden h-[500px] object-cover lg:order-[1] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch sm:h-[300px]"
          alt="Builders illustration"
          src="/placeholder.svg?height=500&width=500"
          width={500}
          height={500}
        />
      </div>

      {/* Builders List Section */}
      <div className="self-stretch flex flex-row items-start justify-center gap-[20px] relative z-[1] text-md text-black1 lg:flex-col md:flex-col mt-8">
        <div className="w-full flex flex-col items-start justify-start gap-[20px] z-[1] lg:self-stretch lg:w-auto md:w-full">
          <div className="self-stretch flex flex-row items-center justify-center p-2.5 z-[2] text-center text-sm">
            <div className="flex-1 relative leading-[120%] font-semibold sm:text-3xl">
              All Builders who take part in hackathons and build the projects.
            </div>
          </div>
          <div className="self-stretch rounded-2xl bg-whitesmoke-100 flex flex-row flex-wrap items-center justify-start py-4 px-[50px] gap-[0px_16px] z-[1] text-darkslategray-200 border-[2px] border-solid border-whitesmoke-300 sm:pl-0 sm:pr-0 sm:box-border">
            <div className="w-[143px] h-8 flex flex-col items-center justify-center">
              <div className="relative leading-[150%]">Sort builders by</div>
            </div>
            <button className="cursor-pointer py-[9px] px-5 bg-[#E8F4F0] flex-1 rounded flex flex-row items-center justify-center border-[1px] border-solid border-black1 md:w-full sm:pl-0 sm:pr-0 sm:box-border">
              <div className="flex-1 relative text-lg leading-[150%] font-body-large-600 text-black1 text-center inline-block max-h-[58px] sm:text-xs">
                Most Hackathons Attended
              </div>
            </button>
          </div>
          <div className="self-stretch bg-nero flex flex-col gap-[20px]">
            {BUILDERS_DATA.map((builder, index) => (
              <div
                key={builder.id}
                className="self-stretch bg-nero flex flex-row flex-wrap items-center justify-start z-[0] text-gray-500 font-nunito-sans"
              >
                <div className="rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg bg-whitesmoke-300 flex flex-row items-start justify-start p-4">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <b className="relative leading-[24px]">#</b>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-2xl">
                    <div className="relative leading-[28px] font-extrabold">{index + 1}</div>
                  </div>
                </div>
                <div className="flex-1 rounded bg-nero flex flex-row flex-wrap items-center justify-start gap-[10px] text-2xl text-darkslategray-200 font-space-mono">
                  <div className="flex-1 rounded-2xl bg-nero flex flex-row items-center justify-start gap-[10px] text-black1 font-body-large-600">
                    <Image
                      className="w-[100px] relative rounded-full h-[100px] object-cover"
                      alt={builder.name}
                      src={builder.avatar || "/placeholder.svg"}
                      width={100}
                      height={100}
                    />
                    <div className="flex-1 relative leading-[150%] font-semibold">{builder.name}</div>
                  </div>
                  <div className="w-[200px] rounded-2xl bg-nero flex flex-row items-center justify-start p-2 box-border gap-[5px]">
                    <div className="rounded-xl bg-blue-600 flex flex-row items-start justify-start p-5">
                      <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <b className="self-stretch relative tracking-[-0.12px] leading-[28px]">
                        {builder.hackathonsAttended}
                      </b>
                      <div className="self-stretch relative leading-[130%] text-xs">hackathons</div>
                    </div>
                  </div>
                  <div className="w-[200px] rounded-2xl bg-nero flex flex-row items-center justify-start p-2 box-border gap-[5px]">
                    <div className="rounded-xl bg-[#3A9679] flex flex-row items-start justify-start p-5">
                      <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <b className="self-stretch relative tracking-[-0.12px] leading-[28px]">
                          {builder.projectsCompleted}
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
                        <b className="self-stretch relative tracking-[-0.12px] leading-[28px]">{builder.prizesWon}</b>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start text-xs text-gray-500 font-body-large-600">
                        <div className="self-stretch relative leading-[130%]">Prizes</div>
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
