import { setUserData } from "@/lib/features/UserSlice/userDataSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "./ui/button";
import { BetweenHorizontalStart, DatabaseIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { toast } from "./ui/use-toast";
import { ToastAction } from "./ui/toast";

const demoData = {
  profile: {
    username: "Rudra N Boitei",
    description: "Software Developer Executive | Next.js | MongoDB | Devops",
    profileImage: "https://avatars.githubusercontent.com/u/95564961?v=4",
  },
  socialLinks: {
    facebook: "https://facebook.com/demo",
    twitter: "https://twitter.com/demo",
    instagram: "https://instagram.com/demo",
    github: "https://github.com/demo",
    telegram: "https://telegram.com/demo",
    linkedin: "https://linkedin.com/demo",
    email: "demo@example.com",
    youtube: "https://youtube.com/demo",
    whatsapp: "https://whatsapp.com/demo",
  },
  links: [
    {
      icon: "https://simpleicons.org/icons/blogger.svg",
      label: "My Blog",
      url: "https://yourblog.com",
    },
    {
      icon: "https://simpleicons.org/icons/meetup.svg",
      label: "My Meetup",
      url: "https://meetup.com/yourmeetup",
    },
    {
      icon: "https://simpleicons.org/icons/eventbrite.svg",
      label: "My Event",
      url: "https://eventbrite.com/myevent",
    },
  ],
};

const DemoData = () => {
  const dispatch = useDispatch();

  const handleEnterDemoData = () => {
    dispatch(setUserData(demoData));
    toast({
      title: "Demo Data Entered",
      description: "You have successfully entered the demo data.",
      action: (
        <p>
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              dispatch(
                setUserData({
                  profile: {
                    username: "",
                    description: "",
                    profileImage: "",
                  },
                  socialLinks: {
                    facebook: "",
                    twitter: "",
                    instagram: "",
                    github: "",
                    telegram: "",
                    linkedin: "",
                    email: "",
                    youtube: "",
                    whatsapp: "",
                  },
                  links: [],
                })
              );
              toast({
                title: "Demo Data Removed",
                description: "You have successfully removed the demo data.",
              });
            }}
          >
            Remove
          </Button>
        </p>
      ),
    });
  };

  return (
    <>
      <Button
        onClick={handleEnterDemoData}
        variant={"outline"}
        className="space-x-2 rounded-full"
      >
        <span>Demo Data</span>
        <DatabaseIcon className="h-4 w-4" />
      </Button>
    </>
  );
};

export default DemoData;
