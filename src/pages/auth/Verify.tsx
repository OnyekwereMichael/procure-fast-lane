import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mail, CheckCircle2 } from 'lucide-react';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { VerifyEmail } from '@/lib/query';
import { verifyEmailValidationSchema } from '@/lib/validation';

const Verify = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = VerifyEmail();

  // --- Formik setup ---
  const formik = useFormik({
    initialValues: {
      email: '', // can be auto-filled if stored in localStorage/session
      otp: '',
    },
    validationSchema: verifyEmailValidationSchema,
    onSubmit: (values) => {
      mutate(values);
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-background px-4">
      <Card className="w-full max-w-md shadow-lg animate-fade-in border rounded-2xl">
        <CardHeader className="text-center">
          <div className="mx-auto w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <Mail className="w-7 h-7 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold">Verify Your Email</CardTitle>
          <CardDescription className="text-muted-foreground mt-1">
            Please enter the verification code we sent to your email.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-5" onSubmit={formik.handleSubmit}>
            {/* Email field */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="h-11"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm">{formik.errors.email}</p>
              )}
            </div>

            {/* OTP field */}
            <div className="space-y-2">
              <Label htmlFor="otp">Enter Code</Label>
              <Input
                id="otp"
                name="otp"
                type="text"
                value={formik.values.otp}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="h-11"
              />
              {formik.touched.otp && formik.errors.otp && (
                <p className="text-red-500 text-sm">{formik.errors.otp}</p>
              )}
            </div>

            <Button type="submit" className="w-full h-11 text-base" disabled={isPending}>
              {isPending ? 'Verifying...' : 'Verify Email'}
            </Button>
          </form>

          <div className="flex items-center justify-center mt-6 text-sm text-muted-foreground">
            <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
            Secure & fast verification
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Verify;
