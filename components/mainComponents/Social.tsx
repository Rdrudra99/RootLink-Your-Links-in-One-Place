import React, { useState } from 'react';
import { z } from 'zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import UserData from '@/lib/USerDataSchema';



const formSchema = z.object({
  facebook: z.string().url({ message: 'Please enter a valid URL' }),
  twitter: z.string().url({ message: 'Please enter a valid URL' }),
  instagram: z.string().url({ message: 'Please enter a valid URL' }),
  github: z.string().url({ message: 'Please enter a valid URL' }),
  telegram: z.string().url({ message: 'Please enter a valid URL' }),
  linkedin: z.string().url({ message: 'Please enter a valid URL' }),
  email: z.string().email({ message: 'Please enter a valid email' }),
  youtube: z.string().url({ message: 'Please enter a valid URL' }),
  whatsapp: z.string().url({ message: 'Please enter a valid URL' }),
});

const Social = () => {
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

  const form = useForm<UserData['socialLinks']>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com',
      github: 'https://github.com',
      telegram: 'https://t.me',
      linkedin: 'https://linkedin.com',
      email: 'rdrudr@gmail.com',
      youtube: 'https://youtube.com',
      whatsapp: 'https://wa.me',
    },
  });

  const updateFormDataAndSend = (fieldName: keyof UserData['socialLinks'], value: string) => {
    const newFormData: UserData = {
      ...formData,
      socialLinks: {
        ...formData.socialLinks,
        [fieldName]: value,
      },
    };
    setFormData(newFormData);
    console.log(newFormData)
  };

  const renderFormField = (name: keyof UserData['socialLinks'], label: string, description: string) => (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={label}
              {...field}
              value={field.value as string}
              onChange={(e) => {
                field.onChange(e);
                updateFormDataAndSend(name, e.target.value);
              }}
            />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  return (
    <section aria-labelledby="social-links-header">
      <Form {...form}>
        <form className="space-y-8">
          {renderFormField('facebook', 'Facebook', 'Enter a URL for your Facebook profile.')}
          {renderFormField('twitter', 'Twitter', 'Enter a URL for your Twitter profile.')}
          {renderFormField('instagram', 'Instagram', 'Enter a URL for your Instagram profile.')}
          {renderFormField('github', 'Github', 'Enter a URL for your Github profile.')}
          {renderFormField('telegram', 'Telegram', 'Enter a URL for your Telegram profile.')}
          {renderFormField('linkedin', 'Linkedin', 'Enter a URL for your Linkedin profile.')}
          {renderFormField('email', 'Email', 'Enter your Email address.')}
          {renderFormField('youtube', 'Youtube', 'Enter a URL for your Youtube profile.')}
          {renderFormField('whatsapp', 'Whatsapp', 'Enter a URL for your Whatsapp profile.')}
        </form>
      </Form>
    </section>
  );
};

export default Social;
