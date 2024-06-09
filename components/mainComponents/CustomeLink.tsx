"use client";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
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
import {
  removeLink,
  updateLinks,
} from "@/lib/features/UserSlice/userDataSlice";
import { Button } from "../ui/button";
import { Plus, X } from "lucide-react";

import { useEffect } from "react";

const formSchema = z.object({
  label: z.string(),
  url: z.string().url(),
  icon: z.string(),
});

const CustomeLink = () => {
  const [formData, setFormData] = useState<BalaData>({
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
    links: [
      {
        icon: "",
        label: "",
        url: "",
      },
    ],
  });

  const dispatch = useDispatch();
  const customeLinkData = useSelector(
    (state: RootState) => state.heyRudra.userData.links
  );

  const form = useForm<BalaData>({
    resolver: zodResolver(formSchema),
    defaultValues: { links: customeLinkData },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "links",
  });

  const updateFormDataAndSend = (index: number, key: string, value: string) => {
    const updatedLinks = [...formData.links]; // Create a copy of the links array
    updatedLinks[index] = { ...updatedLinks[index], [key]: value }; // Update the specific field
    setFormData((prev) => ({
      ...prev,
      links: updatedLinks, // Update the links array in formData
    }));
    dispatch(updateLinks(updatedLinks)); // Dispatch updatedLinks instead of formData.links
  };

  // console.log("BalaRudra", customeLinkData);






  return (
    <section aria-labelledby="profile-header" className="px-4 max-w-4xl">
      {/* this is the form section */}
      <div className="pt-4 space-y-4">
        <Form {...form}>
          <form className="space-y-4">
            {fields.map((field, index) => (
              <React.Fragment key={field.id}>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  {"Link " +
                    (index + 1) +
                    " : " +
                    (field.label ? field.label : "Add Link")}
                </h3>
                <FormField
                  control={form.control}
                  name={`links.${index}.label`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Label</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Label"
                          {...field}
                          value={field.value as string}
                          onChange={(e) => {
                            field.onChange(e);
                            updateFormDataAndSend(
                              index,
                              "label",
                              e.target.value
                            ); // Pass index as well
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`links.${index}.url`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        URL{" "}
                        <span className="text-xs text-muted-foreground">
                          (e.g. https://example.com)
                        </span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="URL"
                          {...field}
                          value={field.value as string}
                          onChange={(e) => {
                            field.onChange(e);
                            updateFormDataAndSend(index, "url", e.target.value); // Pass index as well
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`links.${index}.icon`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Icon{" "}
                        <span className="text-xs text-muted-foreground">
                          (e.g. https://simpleicons.org/icons/blogger.svg)
                        </span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="icon"
                          {...field}
                          value={field.value as string}
                          onChange={(e) => {
                            field.onChange(e);
                            updateFormDataAndSend(
                              index,
                              "icon",
                              e.target.value
                            ); // Pass index as well
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="button"
                  variant={"outline"}
                  onClick={() => {
                    remove(index);
                    dispatch(removeLink(index));
                  }}
                >
                  <X className="h-6 w-6" />
                  Remove Link
                </Button>
              </React.Fragment>
            ))}
          </form>
        </Form>
        <Button
          type="button"
          className="w-full"
          variant={"outline"}
          onClick={() => append({ label: "", url: "", icon: "" })}
        >
          <Plus className="h-6 w-6" />
          Add Link
        </Button>
      </div>
    </section>
  );
};

export default CustomeLink;
