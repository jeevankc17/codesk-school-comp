// components/frontend/competitions/four-pillars.tsx
"use client";

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function FourPillars() {
  const router = useRouter();
  
  const onTryAHackathonsButtonClick = useCallback(() => {
    router.push('/coming-soon');
  }, [router]);
  
  return (
    <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-nero flex flex-col items-center justify-center p-5 gap-[20px] relative z-[3] text-17xl sm:pl-[5px] sm:pr-[5px] sm:box-border">
      <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[30px]">
        <div className="self-stretch bg-nero flex flex-col items-center justify-center py-0 px-[5px]">
          <div className="self-stretch flex flex-row items-center justify-center p-2.5">
            <div className="flex-1 relative leading-[120%] font-semibold">
              CodeskLab is ..
            </div>
          </div>
        </div>
        <div className="self-stretch bg-nero flex flex-col items-center justify-center p-[15px] gap-[40px] text-center text-2xl text-aqua-deep">
          <FeatureItem 
            imageUrl="/featureshowcasebrowser89355ef99806d9f83a789939c3f0a482svg@2x.png"
            number="Number 1"
            title={<><p className="m-0">Your digital up-to-</p><p className="m-0">date resumé</p></>}
            description={<><p className="m-0">Showcase to the world your skills, links to your social</p>
                        <p className="m-0">profile, where you have worked and what you have worked</p>
                        <p className="m-0">on and the projects you have built.</p></>}
            imageFirst={true}
          />
          
          <FeatureItem 
            imageUrl="/featureshowcasebrowser89355ef99806d9f83a789939c3f0a482svg1@2x.png"
            number="Number 2"
            title={<><p className="m-0">A showcase of all your</p><p className="m-0">projects</p></>}
            description={<><p className="m-0">Give your weekend projects, side projects, hobby projects,</p>
                        <p className="m-0">serious ventures a place to breathe, invite collaborators and</p>
                        <p className="m-0">inspire other builders.</p></>}
            imageFirst={false}
          />
          
          <FeatureItem 
            imageUrl="/featurehackathonbrowser5a044ca6908b6e62ac5be7426689d29bsvg@2x.png"
            number="Number 3"
            title={<><p className="m-0">Your portal to the best</p><p className="m-0">hackathons</p></>}
            description={<><p className="m-0">Applying to hackathons on CoDeskLab is as simple as a click of</p>
                        <p className="m-0">a button. We save all the required info so that you don&apos;t</p>
                        <p className="m-0">have to fill them over and over again.</p></>}
            imageFirst={true}
          />
          
          <FeatureItem 
            imageUrl="/featureskillbrowser050977059a23d0d942236d6e8d48c6edsvg@2x.png"
            number="Number 4"
            title={<><p className="m-0">Your skill assessment</p><p className="m-0">playground</p></>}
            description={<><p className="m-0">Take our quiz, earn a badge and see where you stand</p>
                        <p className="m-0">among the rest of the builders.</p></>}
            imageFirst={false}
          />
        </div>
      </div>
      <section className="self-stretch bg-nero flex flex-row flex-wrap items-start justify-center p-[15px]">
        <button
          className="cursor-pointer py-[9px] px-5 bg-aqua-deep rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero"
          autoFocus={true}
          onClick={onTryAHackathonsButtonClick}
        >
          <div className="relative text-lg leading-[150%] font-semibold font-body-large-600 text-nero text-center inline-block max-h-[58px]">
            Try A Hackathons
          </div>
        </button>
      </section>
      <div
        className="absolute left-[0] top-[-140px]"
        data-scroll-to="stepsContainer"
      />
    </div>
  );
}

interface FeatureItemProps {
  imageUrl: string;
  number: string;
  title: React.ReactNode;
  description: React.ReactNode;
  imageFirst: boolean;
}

function FeatureItem({ imageUrl, number, title, description, imageFirst }: FeatureItemProps) {
  const isEven = parseInt(number.replace('Number ', '')) % 2 === 0;
  return (
    <div className={`self-stretch bg-nero flex flex-row items-center justify-center gap-[40px] ${isEven ? 'flex-row-reverse' : ''} lg:flex-row md:flex-col sm:flex-col`}>
      {isEven ? (
        <Image
          className="w-[500px] relative h-[500px] overflow-hidden shrink-0 object-cover md:w-[300px] md:h-[300px] sm:w-[300px] sm:h-[300px]"
          alt="Feature showcase"
          src={imageUrl}
          width={500}
          height={500}
        />
      ) : null}
      
      <div className={`flex-1 flex flex-col items-center justify-center py-8 px-0 ${isEven ? 'lg:order-[2]' : ''} lg:flex-[unset] md:flex-[unset] md:self-stretch`}>
        <div className="self-stretch flex flex-col items-center justify-center">
          <div className="self-stretch flex flex-col items-center justify-center">
            <div className="self-stretch relative leading-[150%] font-semibold">
              {number}
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-center text-4xl text-black1">
            <div className="self-stretch relative leading-[120%] font-semibold">
              {title}
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-center text-lg text-black1">
          <div className="self-stretch relative leading-[150%]">
            {description}
          </div>
        </div>
      </div>

      {!isEven ? (
        <Image
          className="w-[500px] relative h-[500px] overflow-hidden shrink-0 object-cover md:w-[300px] md:h-[300px] sm:w-[300px] sm:h-[300px]"
          alt="Feature showcase"
          src={imageUrl}
          width={500}
          height={500}
        />
      ) : null}
    </div>
  );
}