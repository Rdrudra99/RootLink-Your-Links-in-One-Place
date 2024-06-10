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
import { Textarea } from "../ui/textarea";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store/store";
import BalaData from "@/lib/USerDataSchema";
import {
  updateProfile,
  updateSocialLinks,
} from "@/lib/features/UserSlice/userDataSlice";
import { Input } from "../ui/input";
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
import { Button } from "../ui/button";

const formSchema = z.object({
  facebook: z.string().url({ message: "Please enter a valid URL" }),
  twitter: z.string().url({ message: "Please enter a valid URL" }),
  instagram: z.string().url({ message: "Please enter a valid URL" }),
  github: z.string().url({ message: "Please enter a valid URL" }),
  telegram: z.string().url({ message: "Please enter a valid URL" }),
  linkedin: z.string().url({ message: "Please enter a valid URL" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  youtube: z.string().url({ message: "Please enter a valid URL" }),
  whatsapp: z.string().url({ message: "Please enter a valid URL" }),
});

const Social = () => {
  const [formData, setFormData] = useState<BalaData>();

  const dispatch = useDispatch();
  const socialLinks = useSelector(
    (state: RootState) => state.heyRudra.userData.socialLinks
  );

  const form = useForm<BalaData>({
    resolver: zodResolver(formSchema),
    // @ts-ignore
    defaultValues: socialLinks,
  });

  const updateFormDataAndSend = (
    fieldName: keyof BalaData["socialLinks"],
    value: string
  ) => {
    const newSocialLinksData = { ...socialLinks, [fieldName]: value };
    dispatch(updateSocialLinks(newSocialLinksData));
  };

  return (
    <section aria-labelledby="social-links-header" className="px-4">
      <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
      Manage Your Social Profiles
    </h3>
    {/* <blockquote className="mt-6 border-l-2 pl-6 italic">
        "Enter your social links"
    </blockquote> */}
      <div className="pt-4 space-y-4">
        <Form {...form}>
          <form className="space-y-4">
            <div className="grid grid-cols-3 gap-6">
              <FormField
                control={form.control}
                name="socialLinks.facebook"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Facebook</FormLabel> */}
                    <FormControl>
                      <div className="flex w-full max-w-sm items-center space-x-2">
                        <Button variant="outline" size="icon">
                          <Facebook className="h-4 w-4" />
                        </Button>
                        <Input
                          placeholder="https://facebook.com"
                          {...field}
                          value={field.value as string} // Update the value prop to be of type string
                          defaultValue={
                            socialLinks.facebook as string
                          }
                          onChange={(e) => {
                            field.onChange(e);
                            updateFormDataAndSend("facebook", e.target.value);
                          }}
                        />
                      </div>
                    </FormControl>
                    {/* <FormDescription>Your Facebook profile URL</FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="socialLinks.twitter"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Twitter</FormLabel> */}
                    <FormControl>
                      <div className="flex w-full max-w-sm items-center space-x-2">
                        <Button variant="outline" size="icon">
                          <Twitter className="h-4 w-4" />
                        </Button>
                        <Input
                          placeholder="https://twitter.com"
                          defaultValue={
                            socialLinks.twitter as string
                          }
                          {...field}
                          value={field.value as string} // Update the value prop to be of type string
                          onChange={(e) => {
                            field.onChange(e);
                            updateFormDataAndSend("twitter", e.target.value);
                          }}
                        />
                      </div>
                    </FormControl>
                    {/* <FormDescription>Your Twitter profile URL</FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="socialLinks.instagram"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Instagram</FormLabel> */}
                    <FormControl>
                      <div className="flex w-full max-w-sm items-center space-x-2">
                        <Button variant="outline" size="icon">
                          <Instagram className="h-4 w-4" />
                        </Button>
                        <Input
                          placeholder="https://instagram.com"
                          {...field}
                          defaultValue={
                            socialLinks.instagram as string
                          }
                          value={field.value as string} // Update the value prop to be of type string
                          onChange={(e) => {
                            field.onChange(e);
                            updateFormDataAndSend("instagram", e.target.value);
                          }}
                        />
                      </div>
                    </FormControl>
                    {/* <FormDescription>Your Instagram profile URL</FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="socialLinks.github"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Github</FormLabel> */}
                    <FormControl>
                      <div className="flex w-full max-w-sm items-center space-x-2">
                        <Button variant="outline" size="icon">
                          <Github className="h-4 w-4" />
                        </Button>
                        <Input
                          placeholder="https://github.com"
                          {...field}
                          defaultValue={
                            socialLinks.github as string
                          }
                          value={field.value as string} // Update the value prop to be of type string
                          onChange={(e) => {
                            field.onChange(e);
                            updateFormDataAndSend("github", e.target.value);
                          }}
                        />
                      </div>
                    </FormControl>
                    {/* <FormDescription>Your Github profile URL</FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="socialLinks.telegram"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex w-full max-w-sm items-center space-x-2">
                        <Button variant="outline" size="icon">
                          <Send className="h-4 w-4" />
                        </Button>
                        <Input
                          placeholder="https://telegram.com"
                          {...field}
                          value={field.value as string} // Update the value prop to be of type string
                          defaultValue={
                            socialLinks.telegram as string
                          }
                          onChange={(e) => {
                            field.onChange(e);
                            updateFormDataAndSend("telegram", e.target.value);
                          }}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="socialLinks.linkedin"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>LinkedIn</FormLabel> */}
                    <FormControl>
                      <div className="flex w-full max-w-sm items-center space-x-2">
                        <Button variant="outline" size="icon">
                          <Linkedin className="h-4 w-4" />
                        </Button>
                        <Input
                          placeholder="https://linkedin.com"
                          {...field}
                          value={field.value as string} // Update the value prop to be of type string
                          defaultValue={
                            socialLinks.linkedin as string
                          }
                          onChange={(e) => {
                            field.onChange(e);
                            updateFormDataAndSend("linkedin", e.target.value);
                          }}
                        />
                      </div>
                    </FormControl>
                    {/* <FormDescription>Your LinkedIn profile URL</FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="socialLinks.email"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Email</FormLabel> */}
                    <FormControl>
                      <div className="flex w-full max-w-sm items-center space-x-2">
                        <Button variant="outline" size="icon">
                          <Mail className="h-4 w-4" />
                        </Button>
                        <Input
                          placeholder="test@gmail.com"
                          {...field}
                          value={field.value as string} // Update the value prop to be of type string
                          defaultValue={
                            socialLinks.email as string
                          }
                          onChange={(e) => {
                            field.onChange(e);
                            updateFormDataAndSend("email", e.target.value);
                          }}
                        />
                      </div>
                    </FormControl>
                    {/* <FormDescription>Your Email address</FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="socialLinks.youtube"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>YouTube</FormLabel> */}
                    <FormControl>
                      <div className="flex w-full max-w-sm items-center space-x-2">
                        <Button variant="outline" size="icon">
                          <Youtube className="h-4 w-4" />
                        </Button>
                        <Input
                          placeholder="https://youtube.com"
                          {...field}
                          value={field.value as string} // Update the value prop to be of type string
                          defaultValue={
                            socialLinks.youtube as string
                          }
                          onChange={(e) => {
                            field.onChange(e);
                            updateFormDataAndSend("youtube", e.target.value);
                          }}
                        />
                      </div>
                    </FormControl>
                    {/* <FormDescription>Your YouTube profile URL</FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="socialLinks.whatsapp"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>WhatsApp</FormLabel> */}
                    <FormControl>
                      <div className="flex w-full max-w-sm items-center space-x-2">
                        <Button variant="outline" size="icon">
                          <MonitorSmartphone className="h-4 w-4" />
                        </Button>
                        <Input
                          placeholder="https://whatsapp.com"
                          {...field}
                          value={field.value as string} // Update the value prop to be of type string
                          onChange={(e) => {
                            field.onChange(e);
                            updateFormDataAndSend("whatsapp", e.target.value);
                          }}
                          defaultValue={
                            socialLinks.whatsapp as string
                          }
                        />
                      </div>
                    </FormControl>
                    {/* <FormDescription>Your WhatsApp profile URL</FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default Social;
