"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import { Form, FormField, FormItem, FormLabel } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { ToastAction } from "~/components/ui/toast";
import { useToast } from "~/components/ui/use-toast";

import { api } from "~/trpc/react";

const schema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().min(1),
  title: z.string().min(1),
  companyName: z.string().min(1),
  officePhone: z.string().min(1),
  homePhone: z.string().min(1),
  mobilePhone: z.string().min(1),
});

type Schema = z.infer<typeof schema>;

export default function SignUp() {
  const { toast } = useToast();
  const form = useForm();

  const { handleSubmit, register } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const createUser = api.user.create.useMutation({
    onSuccess: () => {
      console.log("success");
    },
  });
  const onSubmit = (data: Schema) => {
    createUser.mutate({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      title: data.title,
      companyName: data.companyName,
      officePhone: data.officePhone,
      homePhone: data.homePhone,
      mobilePhone: data.mobilePhone,
    });
    toast({
      title: "New User Created ",
    });
  };
  return (
    <main>
      <div className="flex">
        <Form {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="m-12 w-full rounded-lg border p-6 text-3xl font-bold"
          >
            Create A User
            <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-normal">
                      First Name *
                    </FormLabel>
                    <Input
                      {...field}
                      {...register("firstName")}
                      className="focus:outline-slate-300"
                    ></Input>
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
                    <Input
                      {...field}
                      {...register("lastName")}
                      className="focus:outline-slate-300"
                    ></Input>
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
                    <Input
                      {...field}
                      {...register("email")}
                      className="focus:outline-slate-300"
                    ></Input>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-normal">Title</FormLabel>
                    <Input
                      {...field}
                      {...register("title")}
                      className="focus:outline-slate-300"
                    ></Input>
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
                    <Input
                      {...field}
                      {...register("companyName")}
                      className="focus:outline-slate-300"
                    ></Input>
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
                    <Input
                      {...field}
                      {...register("officePhone")}
                      className="focus:outline-slate-300"
                    ></Input>
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
                    <Input
                      {...field}
                      {...register("homePhone")}
                      className="focus:outline-slate-300"
                    ></Input>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mobilePhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-normal">
                      MobilePhone
                    </FormLabel>
                    <Input
                      {...field}
                      {...register("mobilePhone")}
                      className="focus:outline-slate-300"
                    ></Input>
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-11 flex items-center gap-5">
              <Button type="submit" className="bg-black hover:bg-black">
                Create User
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </main>
  );
}
