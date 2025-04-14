"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { useToast } from "~/components/ui/use-toast";
import { api } from "~/trpc/react";

const schema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  title: z.string(),
  companyName: z.string(),
  officePhone: z.string(),
  homePhone: z.string(),
  mobilePhone: z.string(),
});

type Schema = z.infer<typeof schema>;

export default function UpdateAccount({
  defaultValues,
}: {
  defaultValues?: Schema;
}) {
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const watchFirstName = form.watch("firstName");

  useEffect(() => {
    console.log(watchFirstName);
  }, [watchFirstName]);

  const updateUser = api.user.update.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });

  const onSubmit = (data: any) => {
    console.log("test");

    updateUser.mutate(data);
    toast({
      title: "User Info Updated",
    });
  };

  return (
    <main className="overflow-hidden">
      <div className="FadeInUp flex justify-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit, (err) => {
              console.log("values", err);
              console.log(defaultValues);
            })}
            className="m-6 w-full rounded-lg border p-6 text-3xl font-bold max-[700px]:m-0 max-[700px]:w-full max-[700px]:text-center"
          >
            Update Account
            <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-4 max-[700px]:grid-cols-1">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-normal">
                      First Name *
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="focus:outline-slate-300"
                      ></Input>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-normal">
                      Last Name *
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="focus:outline-slate-300"
                      ></Input>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-normal">
                      Email *
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="focus:outline-slate-300"
                      ></Input>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-normal">Title</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="focus:outline-slate-300"
                      ></Input>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-normal">
                      Company Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="focus:outline-slate-300"
                      ></Input>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="officePhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-normal">
                      Office Phone
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="focus:outline-slate-300"
                      ></Input>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="homePhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-normal">
                      Home Phone
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="focus:outline-slate-300"
                      ></Input>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mobilePhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-normal">
                      Mobile Phone
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="focus:outline-slate-300"
                      ></Input>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-11 flex items-center gap-5">
              <Button type="submit" className="bg-black hover:bg-black">
                Update
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </main>
  );
}
