"use client"
import Heading from '@/components/Heading';
import { Button } from '@/components/ui/button';
import { Card, CardFooter } from '@/components/ui/card';
import { Form, FormField, FormItem, FormControl } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Download, ImageIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import {  useForm } from 'react-hook-form';
import { amountOptions, formSchema, resolutionOptions } from './constants';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useProModal } from '@/hooks/use-pro-modal';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Loader from '@/components/Loader';
import Empty from '@/components/Empty';
import axios from 'axios';

function ImagePage() {
  
  const proModal = useProModal();
  const router = useRouter();
  const [photos, setPhotos] = useState<string>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: ""
    }
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setPhotos(undefined);
      
      const response = await axios.post('/api/image', values);
      console.log(response.data);
      setPhotos( response.data[0])
      form.reset()
    }catch(error: any){
      if (error?.response?.status === 403) {
        proModal.onOpen();
      } else {
        toast.error("Something went wrong.");
      }
    } finally {
      router.refresh();
    }
}

  
  return (
    <>
     <Heading
        title="Image Generation"
        description="Turn your prompt into an image."
        icon={ImageIcon}
        iconColor="text-pink-700"
        bgColor="bg-pink-700/10"/>

      <div className="px-4 lg:px-8">
          <Form {...form}>
            <form 
              onSubmit={form.handleSubmit(onSubmit)} 
              className="
                rounded-lg 
                border 
                w-full 
                p-4 
                px-3 
                md:px-6 
                focus-within:shadow-sm
                grid
                grid-cols-12
                lg:grid-cols-8
                gap-2
              "
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-6">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading} 
                        placeholder="A picture of a horse in Swiss alps" 
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />


             

              <Button className="col-span-12 lg:col-span-2 w-full" type="submit" disabled={isLoading} size="icon">
                Generate
              </Button>
            </form>
          </Form>
          
          {isLoading && (
            <div className="p-20">
              <Loader />
            </div>
          )}             
          {!photos  && !isLoading && (
            <Empty label="No images generated." />
          )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
            
              {photos && <Card  className="rounded-lg overflow-hidden">
                <div className="relative aspect-square">
                  <Image
                    fill
                    alt="Generated"
                    src={photos}
                  />
                </div>
                <CardFooter className="p-2">
                  <Button onClick={() => window.open(photos)} variant="secondary" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </CardFooter>
              </Card>}
          </div>
      </div>
    </>
  );
}

export default ImagePage;
