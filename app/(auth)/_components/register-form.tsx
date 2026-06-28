import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"

const RegisterForm = () => {
  return (
    <form className="p-6 md:p-8">
      <FieldGroup>
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">خوش اومدید!</h1>
          <p className="text-balance text-muted-foreground">
            لطفا یک حساب کاربری بسازید
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="fullName">نام و نام خانوادگی</FieldLabel>
          <Input
            id="fullName"
            type="text"
            placeholder="نام و خانواده"
            required
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="phone">شماره تلفن</FieldLabel>
          <Input id="phone" type="text" placeholder="09123456789" required />
        </Field>
        <FieldGroup className="md:grid md:grid-cols-2">
          <Field>
            <div className="flex items-center">
              <FieldLabel htmlFor="password">رمز عبور</FieldLabel>
            </div>
            <Input id="password" type="password" required />
          </Field>
          <Field>
            <div className="flex items-center">
              <FieldLabel htmlFor="confirmPassword">تکرار رمز عبور</FieldLabel>
            </div>
            <Input id="confirmPassword" type="password" required />
          </Field>
        </FieldGroup>
        <Field>
          <Button type="submit">ثبت نام</Button>
        </Field>
        <FieldDescription className="text-center">
          قبلا ثبت نام کردید؟{" "}
          <Link href="/login" replace>
            ورود
          </Link>
        </FieldDescription>
      </FieldGroup>
    </form>
  )
}

export default RegisterForm
