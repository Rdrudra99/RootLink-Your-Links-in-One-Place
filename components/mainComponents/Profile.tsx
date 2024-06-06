import React, { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import UserData from '@/lib/USerDataSchema';

// interface ProfileProps {
//   sendFormData: (data: UserData) => void;
// }

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  description: z.string().min(10, {
    message: 'Description must be at least 10 characters.',
  }),
  profileImage: z.string().url({
    message: 'Please enter a valid URL',
  }),
});

const Profile = () => {
  const [formData, setFormData] = useState<UserData>({
    profile: {
      username: '',
      description: '',
      profileImage: '',
    },
    socialLinks: {
      facebook: '',
      twitter: '',
      instagram: '',
      github: '',
      telegram: '',
      linkedin: '',
      email: '',
      youtube: '',
      whatsapp: '',
    },
  });

  const form = useForm<UserData>({
    resolver: zodResolver(formSchema),
    defaultValues: formData,
  });

  const updateFormDataAndSend = (fieldName: keyof UserData['profile'], value: string) => {
    const newFormData: UserData = {
      ...formData,
      profile: {
        ...formData.profile,
        [fieldName]: value,
      },
    };
    setFormData(newFormData);
    console.log(newFormData)
  };

  return (
    <section aria-labelledby="profile-header" className="px-4">
      <h2 className="scroll-m-20 text-4xl font-bold tracking-tight">Profile</h2>
      <p className="text-lg text-muted-foreground">Some public information about you</p>
      <div className="pt-4 space-y-4">
        <Form {...form}>
          <form className="space-y-8 max-w-4xl">
            <FormField
              control={form.control}
              name="profile.profileImage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Profile Image</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Profile Image"
                      {...field}
                      defaultValue={formData.profile.profileImage}
                      value={field.value as string} // Update the value prop to be of type string
                      onChange={(e) => {
                        field.onChange(e);
                        updateFormDataAndSend('profileImage', e.target.value);
                      }}
                    />
                  </FormControl>
                  <FormDescription>Enter a URL for your profile image.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="profile.username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Username"
                      defaultValue={formData.profile.username}
                      {...field}
                      value={field.value as string} // Update the value prop to be of type string
                      onChange={(e) => {
                        field.onChange(e);
                        updateFormDataAndSend('username', e.target.value);
                      }}
                    />
                  </FormControl>
                  <FormDescription>This is your public display name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="profile.description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Description"
                      defaultValue={formData.profile.description}
                      {...field}
                      value={field.value as string} // Update the value prop to be of type string
                      onChange={(e) => {
                        field.onChange(e);
                        updateFormDataAndSend('description', e.target.value);
                      }}
                    />
                  </FormControl>
                  <FormDescription>Enter a short description about yourself.</FormDescription>
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
