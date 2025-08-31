export type INewUser = {
  email: string;
  phone: string;
  name: string;
  password: string;
  password_confirmation: string;
};

export type IVerifyUser = {
  email: string;
  otp: string;
}