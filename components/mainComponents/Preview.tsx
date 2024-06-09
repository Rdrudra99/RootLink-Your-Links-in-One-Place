"use client";
import { RootState } from "@/lib/store/store";
import { Trash, Unlink } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { AiTwotoneMail } from "react-icons/ai";
// import {
//   PiFacebookLogoDuotone,
//   PiTwitterLogoDuotone,
//   PiGithubLogoDuotone,
//   PiInstagramLogoDuotone,
//   PiTelegramLogoLight,
//   PiLinkedinLogoDuotone,
//   PiYoutubeLogoDuotone,
//   PiWhatsappLogoDuotone,
// } from "react-icons/pi";

import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MonitorSmartphone,
  Send,
  Twitter,
  Youtube,
} from "lucide-react";

import { useSelector } from "react-redux";
import { AvatarImage } from "../ui/avatar";
import Image from "next/image";

const LinkData = [
  {
    id: 1,
    title: "facebook",
    icon: <Facebook className="h-4 w-4" />,
  },
  {
    id: 2,
    title: "twitter",
    icon: <Twitter className="h-4 w-4" />,
  },
  {
    id: 3,
    title: "github",
    icon: <Github className="h-4 w-4" />,
  },
  {
    id: 4,
    title: "instagram",
    icon: <Instagram className="h-4 w-4" />,
  },
  {
    id: 5,
    title: "telegram",
    icon: <Send className="h-4 w-4" />,
  },
  {
    id: 6,
    title: "linkedin",
    icon: <Linkedin className="h-4 w-4" />,
  },
  {
    id: 7,
    title: "youtube",
    icon: <Youtube className="h-4 w-4" />,
  },
  {
    id: 8,
    title: "email",
    icon: <Mail className="h-4 w-4" />,
  },
  {
    id: 9,
    title: "whatsapp",
    icon: <MonitorSmartphone className="h-4 w-4" />,
  },
];

const Preview = () => {
  const profileData = useSelector(
    (state: RootState) => state.heyRudra.userData.profile
  );
  const socialLinksData = useSelector(
    (state: RootState) => state.heyRudra.userData.socialLinks
  );
  const customeLink = useSelector(
    (state: RootState) => state.heyRudra.userData.links || []
  );

  const mainData = useSelector(
    (state:RootState)=>state.heyRudra.userData
  )

  // console.log("MainData",mainData)



  return (
    <div className="h-[729px] w-[340px] overflow-y-auto rounded-[2rem] ring-4 ring-slate-800 dark:ring-white overflow-hidden">
      <main className="p-4  h-full w-full space-y-8 pt-12 max-w-lg mx-auto">
        <div className="text-center">
          <Image
            src={
              profileData?.profileImage
                ? profileData?.profileImage
                : "https://source.unsplash.com/random"
            }
            alt="Profile Image"
            className="w-24 h-24 rounded-full mx-auto"
          />
          {profileData?.username ? (
            <h1 className="text-2xl font-bold mt-4 text-slate-900 dark:text-white">
              {profileData?.username}
            </h1>
          ) : null}
          {profileData?.description ? (
            <p className="text-sm text-slate-500 mt-1 dark:text-white">
              {profileData?.description}
            </p>
          ) : null}
        </div>
        <div className="flex items-center justify-center flex-wrap">
          {Object.entries(socialLinksData).map(([key, value]) => {
            if (value) {
              return (
                <span className="p-1" key={key}>
                  <Link
                    href={value}
                    target="_blank"
                    rel="noopener | noreferrer"
                  >
                    {LinkData.map((item: any, index: number) => {
                      if (item.title === key) {
                        return item.icon;
                      }
                    })}
                  </Link>
                </span>
              );
            }
          })}
        </div>
        <ul className="space-y-2">
          {customeLink.map((items, index) => {
            // Check if items.url is defined and not null
            return (
              <li key={index}>
                <Link
                  href={items.url || "#"}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <dt className="flex items-center space-x-2 p-1 -m-1 rounded-xl hover:bg-slate-100 bg-slate-50">
                    <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg text-slate-500">
                      <Image
                        className="w-5 h-4"
                        src={items?.icon || "https://source.unsplash.com/random"}
                        alt={items?.label}
                      />
                    </div>
                    <div className="w-full flex-grow min-w-0">
                      <p className="font-medium text-sm leading-6 text-start text-gray-900">
                        {items.label}
                      </p>
                    </div>
                  </dt>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
};

export default Preview;
