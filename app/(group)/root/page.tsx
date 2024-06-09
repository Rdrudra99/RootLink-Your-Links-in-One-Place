import { AvatarImage, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import Profile from "@/components/mainComponents/Profile";
import Social from "@/components/mainComponents/Social";
import CustomeLink from "@/components/mainComponents/CustomeLink";
import Preview from "@/components/mainComponents/Preview";
import { ModeToggle } from "@/components/Toggle";
import { SiteHeader } from "@/components/mainComponents/SiteHeader";

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-screen lg:flex-row lg:space-x-8 max-w-[1800px] mx-auto overflow-hidden">
        <div className="flex-1 space-y-6 h-full overflow-y-auto custom-scrollbar pb-60 pt-10">
          <Profile />
          <Social />
          <CustomeLink />
        </div>
        <div className="flex-1 max-w-xl h-full flex justify-center items-center pb-20">
          <Preview />
        </div>
      </div>
    </>
  );
}
