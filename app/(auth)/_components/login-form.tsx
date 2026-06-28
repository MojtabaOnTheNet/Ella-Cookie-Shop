import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"

const LoginForm = () => {
  return (
    <form className="p-6 md:h-[55vh] md:p-8">
      <FieldGroup>
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">خوش اومدید!</h1>
          <p className="text-balance text-muted-foreground">
            لطفا وارد حساب کاربری خود شوید
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="phone">شماره تلفن</FieldLabel>
          <Input id="phone" type="text" placeholder="09123456789" required />
        </Field>
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">رمز عبور</FieldLabel>
            <a
              href="#"
              className="ms-auto text-sm underline-offset-2 hover:underline"
            >
              فراموش کردید؟
            </a>
          </div>
          <Input id="password" type="password" required />
        </Field>
        <Field>
          <Button type="submit">ورود</Button>
        </Field>
        <FieldDescription className="text-center">
          حساب کاربری ندارید؟{" "}
          <Link href="/register" replace>
            ثبت نام
          </Link>
        </FieldDescription>
      </FieldGroup>
    </form>
  )
}

export default LoginForm
