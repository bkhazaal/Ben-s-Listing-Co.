"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import { Form, FormField, FormItem, FormLabel } from "~/components/ui/form";
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

export default function UpdateAccount({ id }: { id: string }) {
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm();

  const { handleSubmit, register } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const updateUser = api.user.update.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });
  const onSubmit = (data: Schema) => {
    updateUser.mutate({
      ...data,
    });
    toast({
      title: "User Info Updated",
    });
  };
  return (
    <main className="overflow-hidden">
      <div className="fadeInSide flex">
        <Form {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="m-12 w-full rounded-lg border p-6 text-3xl font-bold"
          >
            Update Account
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
                Update
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </main>
  );
}
