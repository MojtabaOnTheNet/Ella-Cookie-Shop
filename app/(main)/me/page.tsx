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
  InputGroupInput,
} from "@/components/ui/input-group"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { IconPencil } from "@tabler/icons-react"
import Link from "next/link"

const Page = () => {
  return (
    <div className="relative mt-5 flex h-[calc(100dvh-60px)] flex-col items-center justify-start gap-3">
      <h1 className="absolute -top-2 rounded-2xl bg-background px-2 text-xl font-black text-foreground md:text-3xl">
        حساب کاربری
      </h1>
      <Tabs
        defaultValue="me"
        className="flex h-[92%] w-[95%] flex-col items-center justify-start gap-3 rounded-2xl bg-secondary px-5 pt-10 md:h-[90%] md:w-[70%] md:justify-center md:bg-background md:pt-12 xl:w-[50%]"
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
        <div className="w-full md:flex md:h-full md:w-full md:items-center md:justify-center md:rounded-2xl md:bg-secondary md:p-3">
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
          <TabsContent value="me" className="w-full">
            <Card className="mx-auto lg:w-[70%]">
              <CardHeader>
                <CardTitle className="md:text-xl">اطلاعات شخصی</CardTitle>
              </CardHeader>
              <Separator />
              <CardContent className="">
                <FieldGroup className="md:grid md:grid-cols-2">
                  <Field>
                    <FieldLabel htmlFor="fullName">
                      نام و نام خانوادگی
                    </FieldLabel>
                    <InputGroup>
                      <InputGroupInput
                        id="fullName"
                        type="text"
                        placeholder="مجتبی علیزاده"
                        disabled
                      />
                      <InputGroupAddon align="inline-end">
                        <IconPencil />
                      </InputGroupAddon>
                    </InputGroup>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="phone">شماره تلفن</FieldLabel>
                    <InputGroup>
                      <InputGroupInput
                        id="phone"
                        type="number"
                        placeholder="09106234401"
                        disabled
                      />
                      <InputGroupAddon align="inline-end">
                        <IconPencil />
                      </InputGroupAddon>
                    </InputGroup>
                  </Field>
                  <Field className="col-span-full">
                    <FieldLabel htmlFor="password">رمز عبور</FieldLabel>
                    <InputGroup>
                      <InputGroupInput
                        id="password"
                        type="password"
                        value={"1234"}
                        disabled
                      />
                      <InputGroupAddon align="inline-end">
                        <IconPencil />
                      </InputGroupAddon>
                    </InputGroup>
                  </Field>
                </FieldGroup>
              </CardContent>
              <Separator />
              <CardFooter>
                <Field>
                  <Button variant={"destructive"} className="mx-auto md:w-1/2">
                    خروج از حساب کاربری
                  </Button>
                </Field>
              </CardFooter>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}

export default Page
