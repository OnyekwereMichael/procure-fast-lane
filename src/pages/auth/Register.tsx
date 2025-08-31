import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Eye, EyeOff, CheckCircle, XCircle, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { CreateUserAccount } from "@/lib/query";
import { registerValidationSchema } from "@/lib/validation";


const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const { mutate, isPending } = CreateUserAccount();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      password_confirmation: "",
    },
    validationSchema: registerValidationSchema,
    onSubmit: (values) => {
      mutate(values);
    },
  });

  return (
    <div className="h-screen flex bg-background">
      {/* Left side */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary text-primary-foreground p-12 flex-col justify-center">
        <div className=" mx-auto">
          <h1 className="text-4xl font-bold mb-6">Welcome Back</h1>
          <p className="text-lg mb-8 opacity-90">
            Sign in to your requirements management platform to continue 
            collaborating with your team and managing projects.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 mt-1 text-primary-foreground/80" />
              <div>
                <h3 className="font-semibold mb-1">Access your dashboard</h3>
                <p className="text-sm opacity-75">View and manage all your requirements in one place</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 mt-1 text-primary-foreground/80" />
              <div>
                <h3 className="font-semibold mb-1">Team collaboration</h3>
                <p className="text-sm opacity-75">Work together with your team members seamlessly</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 mt-1 text-primary-foreground/80" />
              <div>
                <h3 className="font-semibold mb-1">Real-time updates</h3>
                <p className="text-sm opacity-75">Stay informed with instant notifications and updates</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 overflow-y-auto">
        <Card className="w-full  shadow-none animate-fade-in border-none mt-10">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate("/")}
                className="h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-200"
              >
                <ArrowLeft className="w-5 h-5 text-gray-700" />
              </Button>
              <div>
                <CardTitle className="mb-1 text-[20px]">Create Account</CardTitle>
                <CardDescription>
                  Join your team's requirements management platform
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={formik.handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName">Name</Label>
                <Input
                  id="name"
                  {...formik.getFieldProps("name")}
                  className={cn(
                    formik.touched.name && formik.errors.name && "border-destructive"
                  )}
                  placeholder="Enter your name"
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <XCircle className="w-3 h-3" />
                    {formik.errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Corporate Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                  className={cn(
                    formik.touched.email && formik.errors.email && "border-destructive"
                  )}
                  placeholder="Enter your corporate email"
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <XCircle className="w-3 h-3" />
                    {formik.errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  {...formik.getFieldProps("phone")}
                  className={cn(
                    formik.touched.phone && formik.errors.phone && "border-destructive"
                  )}
                  placeholder="Enter your phone number"
                />
                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <XCircle className="w-3 h-3" />
                    {formik.errors.phone}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    {...formik.getFieldProps("password")}
                    className={cn(
                      formik.touched.password && formik.errors.password && "border-destructive",
                      "pr-10"
                    )}
                    placeholder="Create a strong password"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>
                {formik.touched.password && formik.errors.password && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <XCircle className="w-3 h-3" />
                    {formik.errors.password}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Input
                    id="password_confirmation"
                    type={showConfirmPassword ? "text" : "password"}
                    {...formik.getFieldProps("password_confirmation")}
                    className={cn(
                      formik.touched.password_confirmation &&
                        formik.errors.password_confirmation &&
                        "border-destructive",
                      "pr-10"
                    )}
                    placeholder="Confirm your password"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>
                {formik.touched.password_confirmation && formik.errors.password_confirmation && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <XCircle className="w-3 h-3" />
                    {formik.errors.password_confirmation}
                  </p>
                )}
              </div>

              {/* Submit */}
              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? "Creating..." : "Create Account"}
              </Button>

              <div className="text-center text-sm">
                <span className="text-muted-foreground">Already have an account? </span>
                <Link to="/auth/login" className="text-primary hover:underline font-medium">
                  Sign in
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
