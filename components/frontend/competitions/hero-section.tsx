import Image from "next/image"

export default function HeroSection() {
  return (
    <div className="w-full mt-6">
      <div className="w-full bg-blue-600 rounded-xl overflow-hidden">
        <div className="container mx-auto py-16 px-8 relative">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              We care about organizer's hackathons and builder's projects
            </h1>
            <p className="text-white/90 mb-8">
              No more creating Google Forms and managing participants in an Excel sheet.
              <br />
              You focus on your people, leave the rest to us.
            </p>

            <button className="w-full max-w-md bg-[#FF6347] text-white rounded-md py-3 px-4 text-center font-medium">
              Our Four Pillars
            </button>
          </div>

          <div className="absolute right-0 bottom-0 hidden md:block">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Children with trophy"
              width={500}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
