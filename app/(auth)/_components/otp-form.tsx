"use client"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { useId } from "react"
import { Button } from "@/components/ui/button"
import { Field, FieldDescription, FieldGroup } from "@/components/ui/field"
import Link from "next/link"
import { REGEXP_ONLY_DIGITS } from "input-otp"

const OtpForm = () => {
  const id = useId()

  // On mobile inside of the element shifts to the right on input remember to fix
  return (
    <form className="flex items-center justify-center p-6 md:h-[55vh] md:p-8">
      <FieldGroup>
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">کد ارسال شد</h1>
          <p className="text-balance text-muted-foreground">
            کد ارسال شده به شماره تلفن خود را وارد کنید
          </p>
        </div>
        <Field>
          <InputOTP id={id} maxLength={5} pattern={REGEXP_ONLY_DIGITS}>
            <InputOTPGroup
              dir="ltr"
              className="mx-auto gap-2 *:data-[slot=input-otp-slot]:rounded-lg *:data-[slot=input-otp-slot]:border-transparent *:data-[slot=input-otp-slot]:bg-muted"
            >
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
            </InputOTPGroup>
          </InputOTP>
        </Field>
        <Field>
          <Button type="submit">ثبت</Button>
        </Field>
        <FieldDescription className="text-center">
          کدی دریافت نکردید؟{" "}
          <Link href="/register" replace>
            تغییر شماره
          </Link>
        </FieldDescription>
      </FieldGroup>
    </form>
  )
}

export default OtpForm
