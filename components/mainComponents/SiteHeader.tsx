"use client";
import { cn } from "@/lib/utils";
import {
  ClipboardCopy,
  Copy,
  CopyIcon,
  Github,
  Radio,
  Send,
  SendHorizonal,
  Share,
  Unlink,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { MainNav } from "./main-nav";
import { ModeToggle } from "../Toggle";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";

import CryptoJS from "crypto-js";
import DemoData from "../DemoDataButton";

export function SiteHeader() {
  const mainData = useSelector((state: RootState) => state.heyRudra.userData);
  // console.log("Rudra", mainData);

  // Convert data to string before encryption
  const dataString = JSON.stringify(mainData);

  const secretKey = "RudraNarayanBoitei";
  const encryptedData = CryptoJS.AES.encrypt(dataString, secretKey).toString();

  // Decrypt the data
  const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
  const decryptedDataString = decryptedBytes.toString(CryptoJS.enc.Utf8);
  const decryptedData = JSON.parse(decryptedDataString);

  // console.log("Encrypted data:", encryptedData);
  // console.log("Decrypted data:", decryptedData);

  return (
    <header className="w-full flex relative justify-between px-4 py-1 border mt-1 bg-transparent rounded-full transition duration-200   backdrop-blur-sm">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        {/* <MobileNav /> */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-4">
            <DemoData />
            {/* <Button
              className="flex justify-center items-center space-x-4"
              variant={"outline"}
            >
              <ClipboardCopy
                className="w-4 h-4"
                onClick={() => {
                  navigator.clipboard.writeText(
                    `https://localhost:3000/1${encryptedData}`
                  );
                  toast({
                    title: "Link Copied",
                    description: "The link has been copied to your clipboard.",
                  });
                }}
              />
              copy url
            </Button> */}
          </nav>
          <nav className="flex items-center space-x-4">
            <Link
              href={`/1/${encodeURIComponent(String(encryptedData))}`}
              target="_blank"
            >
              <Button
                size={"sm"}
                variant={"outline"}
                className="flex justify-center items-center space-x-2 rounded-full"
              >
                <SendHorizonal className="w-4 h-4" />
                <span>Share</span>
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
