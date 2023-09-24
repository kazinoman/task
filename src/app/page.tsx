import { NavComponent, HeroSection, MultiplePlatformSection, SetGoal, CommunicationSection, Meetask, ManageSection, ManagementSection } from "@/components";

export default function Home() {
  return (
    <main className=" ">
      <HeroSection />
      <MultiplePlatformSection />
      <SetGoal />
      <CommunicationSection />
      <Meetask />
      <ManageSection />
      <ManagementSection />
    </main>
  );
}
