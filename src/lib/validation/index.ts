import * as Yup from "yup";

const BLOCKED_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "outlook.com",
  "hotmail.com",
  "aol.com",
];

export const registerValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),

  email: Yup.string()
    .email("Invalid email address")
    .test("blocked-domain", "Please use your corporate email", (value) => {
      if (!value) return true; // Skip if empty (handled by required)
      const domain = value.split("@")[1];
      return !BLOCKED_DOMAINS.includes(domain);
    })
    .required("Email is required"),

  phone: Yup.string()
    .matches(/^[0-9]{10,15}$/, "Phone number must be valid")
    .required("Phone number is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),

  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Password confirmation is required"),
});


export const verifyEmailValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  otp: Yup.string()
    .matches(/^[0-9]{6}$/, "OTP must be 6 digits")
    .required("OTP is required"),
});
