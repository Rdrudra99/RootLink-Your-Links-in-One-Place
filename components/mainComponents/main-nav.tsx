"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CopyIcon, GitGraph, Radio } from "lucide-react";
import { cn } from "@/lib/utils";
import DemoData from "../DemoDataButton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";

import CryptoJS from "crypto-js";

export function MainNav() {
  const pathname = usePathname();
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
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <GitGraph className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">Root Link</span>
      </Link>
      <nav className="flex items-center space-x-4">
          <Link href={"/doc"} target="_blank" className="text-muted-foreground">
              Documents
          </Link>
      </nav>
    </div>
  );
}
