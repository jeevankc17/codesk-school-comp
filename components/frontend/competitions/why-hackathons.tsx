// components/frontend/competitions/why-hackathons.tsx
"use client";

export default function WhyHackathons() {
  return (
    <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-nero flex flex-col items-start justify-start p-5 gap-[20px] z-[2] sm:pl-[5px] sm:pr-[5px] sm:box-border">
      <div className="self-stretch flex flex-col items-center justify-start pt-0 px-[58px] pb-[0.5px]">
        <div className="w-full relative leading-[120%] font-semibold inline-block max-w-[1128px]">
          Why children should be involved in hackathons?
        </div>
      </div>
      <div className="self-stretch bg-nero flex flex-row flex-wrap items-center justify-center p-[15px] gap-[15px] text-base md:flex-row md:flex-wrap">
        <ReasonCard 
          title="Skill Development"
          description="Hackathons offer children a chance to sharpen their coding skills by tackling real-world problems. They get to apply programming languages and techniques they've learned in a practical setting, which deepens their understanding and proficiency."
        />
        
        <ReasonCard 
          title="Teamwork & Collaboration"
          description="Participating in hackathons teaches children how to work effectively in teams. They learn to communicate ideas, delegate tasks, resolve conflicts, and combine their strengths to achieve common goals."
        />
        
        <ReasonCard 
          title="Creative Problem-Solving"
          description="Hackathons present unique challenges that require innovative solutions. Children learn to think outside the box, approach problems from different angles, and develop creative solutions that address user needs."
        />
        
        <ReasonCard 
          title="Building Confidence"
          description="Successfully completing a project in a hackathon gives children a sense of accomplishment and boosts their confidence. It shows them they can create something valuable and meaningful with their skills."
        />
        
        <ReasonCard 
          title="Real-World Experience"
          description="Hackathons simulate professional environments where teams work under time constraints to deliver projects. This gives children a taste of what it's like to work in tech-related fields and prepares them for future careers."
        />
        
        <ReasonCard 
          title="Networking Opportunities"
          description="Hackathons bring together like-minded individuals who share similar interests. Children get to meet peers, mentors, and industry professionals who can inspire them and potentially open doors for future opportunities."
        />
        
        <ReasonCard 
          title="Learning New Technologies"
          description="To solve hackathon challenges, children often need to explore and learn new tools, libraries, or technologies. This expands their technical toolkit and teaches them how to quickly adapt to new learning environments."
        />
        
        <ReasonCard 
          title="Career Exploration"
          description="Through hackathons, children get exposure to various aspects of technology and can discover areas they're passionate about. This helps them make more informed decisions about educational and career paths."
        />
        
        <ReasonCard 
          title="Fun Learning Experience"
          description="Hackathons make learning fun and engaging. The excitement of competition, the thrill of creating something new, and the joy of collaborating with others creates a positive association with learning technical skills."
        />
      </div>
    </div>
  );
}

interface ReasonCardProps {
  title: string;
  description: string;
}

function ReasonCard({ title, description }: ReasonCardProps) {
  return (
    <div className="w-[350px] rounded-3xs bg-footer-header flex flex-col items-center justify-center p-5 box-border shadow-md">
      <div className="w-12 h-12 mb-4 rounded-full bg-tomato flex items-center justify-center text-nero font-bold text-xl">
        {title.charAt(0)}
      </div>
      <div className="self-stretch bg-transparent flex flex-col items-center justify-center">
        <div className="self-stretch flex flex-col items-center justify-center py-4 px-0">
          <div className="self-stretch relative leading-[120%] font-semibold">
            {title}
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-center text-sm">
          <div className="w-full relative leading-[150%] inline-block max-w-[448px]">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}