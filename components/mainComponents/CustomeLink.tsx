'use client'
import { useDispatch, useSelector } from 'react-redux';
import { Plus, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { removeLink, updateLinks } from '@/lib/features/UserSlice/userDataSlice';
import { RootState } from '@/lib/store/store';


// Define the Zod schema for a single link item
const linkItemSchema = z.object({
  id: z.number(),
  icon: z.string().optional(),
  label: z.string().min(1, "Label is required"),
  url: z.string().url("Invalid URL")
});

// Define the schema for the entire form
const formSchema = z.object({
  links: z.array(linkItemSchema).min(1, "At least one link is required")
});

type FormData = z.infer<typeof formSchema>;

export default function Component() {
  const dispatch = useDispatch();
  const customeLinkData = useSelector((state: RootState) => state.heyRudra.userData.links); // Assuming 'heyRudra' is the name of your slice

  const { control, register, formState: { errors }, getValues } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { links: customeLinkData }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "links"
  });

  // This function handles the live updates to Redux as inputs change
  const updateFormDataAndSend = (index: number, key: string, value: string) => {
    const updatedLinks = [...getValues("links")];
    updatedLinks[index] = { ...updatedLinks[index], [key]: value };
    dispatch(updateLinks(updatedLinks.map(link => ({ ...link, icon: link.icon || '' }))));
  };

  return (
    <form className="w-full max-w-full mx-auto p-4 space-y-4 pb-40">
      {fields.map((field, index) => (
        <Card key={field.id} className="relative group">
          <CardContent className="p-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor={`links.${index}.icon`}>Icon Key (optional)</Label>
                <Input
                  id={`links.${index}.icon`}
                  {...register(`links.${index}.icon`)}
                  placeholder="ph:globe-duotone"
                  onChange={(e) => updateFormDataAndSend(index, 'icon', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor={`links.${index}.label`}>Label</Label>
                <Input
                  id={`links.${index}.label`}
                  {...register(`links.${index}.label`)}
                  placeholder="My Website"
                  onChange={(e) => updateFormDataAndSend(index, 'label', e.target.value)}
                />
                {errors.links?.[index]?.label && (
                  <p className="text-sm text-red-500 mt-1">{errors.links[index]?.label?.message}</p>
                )}
              </div>
            </div>
            <div className="mt-4">
              <Label htmlFor={`links.${index}.url`}>URL</Label>
              <Input
                id={`links.${index}.url`}
                {...register(`links.${index}.url`)}
                placeholder="https://example.com"
                onChange={(e) => updateFormDataAndSend(index, 'url', e.target.value)}
              />
              {errors.links?.[index]?.url && (
                <p className="text-sm text-red-500 mt-1">{errors.links[index]?.url?.message}</p>
              )}
            </div>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => {
                remove(index);
                dispatch(removeLink(index)); // Remove link from Redux state
              }}
            >
              <X className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      ))}
      <Button
        type="button"
        onClick={() => append({ id: Date.now(), icon: '', label: '', url: '' })}
        className="w-full"
      >
        <Plus className="mr-2 h-4 w-4" /> Add Link
      </Button>
    </form>
  );
}
