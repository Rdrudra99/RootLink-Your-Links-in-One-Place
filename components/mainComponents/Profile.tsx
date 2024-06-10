"use client";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store/store";
import BalaData from "@/lib/USerDataSchema";
import { updateProfile } from "@/lib/features/UserSlice/userDataSlice";
import { Button } from "../ui/button";
import DemoData from "../DemoDataButton";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  profileImage: z.string().url({
    message: "Please enter a valid URL",
  }),
});

const Profile = () => {
  const [formData, setFormData] = useState<BalaData>();

  const dispatch = useDispatch();
  const profileData = useSelector(
    (state: RootState) => state.heyRudra.userData.profile
  );

  const form = useForm<BalaData>({
    resolver: zodResolver(formSchema),
    // @ts-ignore
    defaultValues: profileData,
  });

  const updateFormDataAndSend = (
    fieldName: keyof BalaData["profile"],
    value: string
  ) => {
    const newProfileData = { ...profileData, [fieldName]: value };
    dispatch(updateProfile(newProfileData));
  };

  return (
    <section aria-labelledby="profile-header" className="px-4">
<h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
    Your Profile Details
</h3>

      {/* <blockquote className="mt-6 border-l-2 pl-6 italic">
        "Enter your profile information"
      </blockquote> */}
      <div className="pt-4 space-y-4">
        <Form {...form}>
          <form className="space-y-4 max-w-4xl">
            <FormField
              control={form.control}
              name="profile.username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    username{" "}
                    <span className="text-xs text-muted-foreground">
                      (e.g. JohnDoe)
                    </span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Username"
                      defaultValue={profileData.username}
                      {...field}
                      value={field.value as string} // Update the value prop to be of type string
                      onChange={(e) => {
                        field.onChange(e);
                        updateFormDataAndSend("username", e.target.value);
                      }}
                    />
                  </FormControl>
                  {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="profile.description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Description{" "}
                    <span className="text-xs text-muted-foreground">
                      (e.g. I am a software engineer)
                    </span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Description"
                      defaultValue={profileData.description}
                      {...field}
                      value={field.value as string} // Update the value prop to be of type string
                      onChange={(e) => {
                        field.onChange(e);
                        updateFormDataAndSend("description", e.target.value);
                      }}
                    />
                  </FormControl>
                  {/* <FormDescription>
                    Enter a short description about yourself.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="profile.profileImage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Profile Image{" "}
                    <span className="text-xs text-muted-foreground">
                      (e.g.
                      https://avatars.githubusercontent.com/u/95564961?v=4)
                    </span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Profile Image"
                      {...field}
                      defaultValue={profileData.profileImage}
                      value={field.value as string} // Update the value prop to be of type string
                      onChange={(e) => {
                        field.onChange(e);
                        updateFormDataAndSend("profileImage", e.target.value);
                      }}
                    />
                  </FormControl>
                  {/* <FormDescription>
                    Enter a URL for your profile image.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </section>
  );
};

export default Profile;
