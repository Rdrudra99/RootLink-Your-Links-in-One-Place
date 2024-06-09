"use client";
import React, { useState } from "react";
import CryptoJS from "crypto-js";
import { usePathname } from "next/navigation";
import Link from "next/link";
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
import Image from "next/image";
export default function Page() {
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

  const route = usePathname();
  const encryptedDataFromUrl = route.split("/")[2];
  const secretKey = "RudraNarayanBoitei";

  // console.log(encryptedDataFromUrl, "encrypted data from URL");

  try {
    // URL-decode the encrypted data
    const decodedEncryptedData = decodeURIComponent(encryptedDataFromUrl);

    // Decrypt the data
    const decryptedBytes = CryptoJS.AES.decrypt(
      decodedEncryptedData,
      secretKey
    );

    // Convert decrypted bytes to a string
    const decryptedDataString = decryptedBytes.toString(CryptoJS.enc.Utf8);
    // console.log(decryptedDataString, "decryptedDataString");

    // Parse the decrypted string to JSON
    const decryptedData = JSON.parse(decryptedDataString);
    const { profile, socialLinks, links } = decryptedData;

    return (
      <>
        <main className="p-4 h-full w-full space-y-8 pt-12 max-w-lg mx-auto">
          <div className="text-center">
            <Image
              src={
                profile?.profileImage || "https://source.unsplash.com/random"
              }
              alt="Profile Image"
              className="w-24 h-24 rounded-full mx-auto"
            />
            {profile?.username && (
              <h1 className="text-2xl font-bold mt-4 text-slate-900 dark:text-white">
                {profile.username}
              </h1>
            )}
            {profile?.description && (
              <p className="text-sm text-slate-500 mt-1 dark:text-white">
                {profile.description}
              </p>
            )}
          </div>
          <div className="flex items-center justify-center flex-wrap">
            {/* {socialLinks &&
              Object.entries(socialLinks).map(
                ([key, value]) =>
                  value && (
                    <span className="p-1" key={key}>
                      <Link
                        href={value}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={`https://simpleicons.org/icons/${key}.svg`}
                          alt={key}
                          className="w-5 h-5"
                        />
                      </Link>
                    </span>
                  )
              )} */}
            {Object.entries(socialLinks).map(([key, value]) => {
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
            {links &&
              links.map((item:any, index:number) => (
                <li key={index}>
                  <Link
                    href={item.url || "#"}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <dt className="flex items-center space-x-2 p-1 -m-1 rounded-xl hover:bg-slate-100 bg-slate-50">
                      <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg text-slate-500">
                        <Image
                          className="w-5 h-4"
                          src={
                            item.icon || "https://source.unsplash.com/random"
                          }
                          alt={item.label}
                        />
                      </div>
                      <div className="w-full flex-grow min-w-0">
                        <p className="font-medium text-sm leading-6 text-start text-gray-900">
                          {item.label}
                        </p>
                      </div>
                    </dt>
                  </Link>
                </li>
              ))}
          </ul>
        </main>
      </>
    );
  } catch (error: any) {
    console.error("Decryption failed:", error.message);
    return (
      <div>
        <div>Error decrypting data</div>
      </div>
    );
  }
}
