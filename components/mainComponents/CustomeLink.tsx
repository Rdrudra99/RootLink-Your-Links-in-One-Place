"use client";
import React, { useState, useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm, FormProvider } from "react-hook-form";
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

import { ScrollArea } from "../ui/scroll-area";

const formSchema = z.object({
  links: z.array(
    z.object({
      label: z.string(),
      url: z.string().url(),
      icon: z.string(),
    })
  ),
});

const CustomeLink = () => {
  const dispatch = useDispatch();
  const customeLinkData = useSelector(
    (state: RootState) => state.heyRudra.userData.links
  );

  const formMethods = useForm<BalaData>({
    resolver: zodResolver(formSchema),
    defaultValues: { links: customeLinkData },
  });

  const { fields, append, remove } = useFieldArray({
    control: formMethods.control,
    name: "links",
  });

  const updateFormDataAndSend = (index: number, key: string, value: string) => {
    const updatedLinks = [...formMethods.getValues("links")];
    updatedLinks[index] = { ...updatedLinks[index], [key]: value };
    dispatch(updateLinks(updatedLinks));
  };

  useEffect(() => {
    formMethods.reset({ links: customeLinkData });
  }, [customeLinkData, formMethods]);

  return (
    <ScrollArea className="h-full pb-5">
      <CardForm
        fields={fields}
        formMethods={formMethods}
        updateFormDataAndSend={updateFormDataAndSend}
        remove={remove}
        append={append}
      />
      <div className="flex items-center gap-2">
        <Button
          type="button"
          className="w-full"
          variant="outline"
          onClick={() => append({ label: "", url: "", icon: "" })}
        >
          <Plus className="h-6 w-6" />
          Add Link
        </Button>
      </div>
    </ScrollArea>
  );
};

export const CardForm = ({
  fields,
  formMethods,
  updateFormDataAndSend,
  remove,
}: any) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-2 p-4 pt-0">
      <div className="flex flex-col gap-2 p-4 pt-0">
        <div className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent bg-muted">
          <div className="flex w-full flex-col gap-1">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="font-semibold">
                  {fields.length === 0 ? "No Links Added" : "Custom Links"}
                </div>
              </div>
              <div className="ml-auto text-xs text-foreground">
                8 months ago
              </div>
            </div>
          </div>
          <FormProvider {...formMethods}>
            <form className="space-y-4">
              {fields.map((field: any, index: number) => (
                <React.Fragment key={field.id}>
                  <FormField
                    control={formMethods.control}
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
                              );
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={formMethods.control}
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
                              updateFormDataAndSend(
                                index,
                                "url",
                                e.target.value
                              );
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={formMethods.control}
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
                              );
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="button"
                    variant="outline"
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
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default CustomeLink;
