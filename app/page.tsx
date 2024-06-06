'use client'
import { AvatarImage, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

import Profile from "@/components/mainComponents/Profile";
import Social from "@/components/mainComponents/Social";
import CustomeLink from "@/components/mainComponents/CustomeLink";
import Preview from "@/components/mainComponents/Preview";
import { useState } from "react";






export default function Home() {

  const [formData, setFormData] = useState({
    username: '',
    description: '',
    profileImage: '',
  });

  // Function to receive form data and pass it to other components
  const sendFormDataToOtherComponent = (data: any) => {
    console.log(data, "Rd");
  };




  return (
    <div className="flex flex-col h-screen lg:flex-row lg:space-x-8 max-w-[1800px] mx-auto p-6">
      <div className="flex-1 space-y-6 h-full overflow-y-auto">
        <Profile  />
        <Social />
      </div>
      <div className="flex-1 max-w-md h-full flex justify-center items-center ">
        <Preview  />
      </div>
    </div>
  )
}
