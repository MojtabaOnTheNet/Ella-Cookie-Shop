import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { IconLogout, IconPencil, IconUser } from "@tabler/icons-react"
import Link from "next/link"

const Page = () => {
  return (
    <div className="relative mt-5 flex h-[calc(100dvh-60px)] flex-col items-center justify-start gap-3">
      <h1 className="absolute -top-2 border-b-2 bg-background px-5 pb-2 text-2xl font-black text-foreground md:text-3xl">
        حساب کاربری
      </h1>
      <Tabs
        defaultValue="me"
        className="flex h-[92%] w-full flex-col items-center justify-start gap-6 px-5 pt-15 md:h-[90%] md:w-[70%] md:justify-center xl:w-[40%]"
        dir="rtl"
      >
        <TabsList>
          <TabsTrigger value="me" className="text-md">
            اطلاعات من
          </TabsTrigger>
          <TabsTrigger value="orders" className="text-md">
            سفارشات
          </TabsTrigger>
        </TabsList>
        <TabsContent value="orders" className="w-full">
          <Card className="mx-auto lg:w-[70%]">
            <CardHeader>
              <CardTitle className="md:text-xl">سفارشات</CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className="mx-auto">
              <h1 className="mb-5 text-center text-lg">سفارشی ثبت نکردید!</h1>
              <Link href={"/home"}>
                <Button
                  size="sm"
                  variant="outline"
                  className="peer w-full rounded-full border-primary/30 bg-transparent px-7 text-sm text-primary sm:w-auto md:text-lg"
                >
                  مشاهده محصولات
                </Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="me" className="min-w-full">
          <Card className="mx-auto max-h-full w-full shadow-[0_4px_20px_rgba(0,0,0,0.08),0_0_10px_rgba(0,0,0,0.04)]">
            <CardHeader>
              <div className="mx-auto rounded-full bg-background p-3">
                <IconUser className="h-10 w-10" />
              </div>
              <CardTitle className="text-center font-bold md:text-xl">
                مجتبی علیزاده
              </CardTitle>
              <div className="text-center opacity-90">09106234401</div>
            </CardHeader>
            <Separator />
            <CardContent className="">
              <FieldGroup className="grid grid-cols-2">
                <Field>
                  <FieldLabel htmlFor="province">استان</FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      id="province"
                      type="text"
                      placeholder="تهران"
                      disabled
                    />
                    <InputGroupAddon align="inline-end">
                      <IconPencil />
                    </InputGroupAddon>
                  </InputGroup>
                </Field>
                <Field>
                  <FieldLabel htmlFor="city">شهر</FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      id="city"
                      type="text"
                      placeholder="تهران"
                      disabled
                    />
                    <InputGroupAddon align="inline-end">
                      <IconPencil />
                    </InputGroupAddon>
                  </InputGroup>
                </Field>
                <Field className="col-span-full">
                  <FieldLabel htmlFor="address">آدرس</FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      id="address"
                      placeholder="فلان خیابان، فلان کوچه، فلان پلاک"
                    />
                    <InputGroupAddon align="block-end">
                      <IconPencil className="mr-auto" />
                    </InputGroupAddon>
                  </InputGroup>
                </Field>
              </FieldGroup>
            </CardContent>
            <Separator />
            <CardFooter>
              <Field>
                <Button variant={"destructive"} className="mx-auto md:w-1/2">
                  <IconLogout />
                  خروج از حساب کاربری
                </Button>
              </Field>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Page
