/**
 * Login Flow:
 * 1. User fills out the email and password.
 * 2. On submit:
 *    - The form data is sent to the backend for authentication.
 * 3. If authentication is successful:
 *    - User data and school information are fetched.
 *    - Data is stored in Zustand for global access.
 * 4. Based on the role, the user is redirected:
 *    - SUPER_ADMIN → /school-onboarding
 *    - Other users → /dashboard
 * 5. Loading states and errors are handled gracefully.
 */

"use client";
import { loginUser } from "@/actions/auth";
import { getSchoolById } from "@/actions/school";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import CustomCarousel from "@/components/frontend/custom-carousel";
import Logo from "@/components/logo";
import { useUserSession } from "@/store/auth";
import useSchoolStore from "@/store/school";
import { SchoolItem, UserItem, UserLoginProps } from "@/types/types";
import { LogIn, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserLoginProps>();
  const { setUser } = useUserSession();
  const { setSchool } = useSchoolStore();

  const router = useRouter();

  async function onSubmit(data: UserLoginProps) {
    try {
      setIsLoading(true);
      const sessionData = await loginUser(data);
      const role = sessionData?.user.role;
      // Fetch the school data
      const school = await getSchoolById(sessionData?.user.schoolId);
      // Save the school data in Zustand
      setSchool(school as SchoolItem);
      // Save the Data in Zustand
      setUser(sessionData?.user as UserItem);
      // Route to the User account to the role
      setIsLoading(false);
      if (role === "SUPER_ADMIN") {
        router.push("/school-onboarding");
      } else {
        router.push("/dashboard");
      }
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  }
  return (
    <div className="w-full lg:grid h-screen lg:min-h-[600px] lg:grid-cols-2 relative ">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6 mt-10 md:mt-0">
          <div className="absolute left-1/3 top-14 md:top-5 md:left-5">
            <Logo variant="light" />
          </div>
          <div className="grid gap-2 text-center mt-10 md:mt-0">
            <h1 className="text-3xl font-bold">Login to your Account</h1>
          </div>
          <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              label="Email Address"
              register={register}
              name="email"
              type="email"
              errors={errors}
              icon={Mail}
              placeholder="Eg. johndoe@gmail.com"
            />

            <TextInput
              label="Temporary Password"
              register={register}
              name="password"
              type="text"
              errors={errors}
              icon={Mail}
              placeholder="*****************"
            />

            {/* <PasswordInput
              label="Password"
              register={register}
              name="password"
              type="password"
              errors={errors}
              placeholder="******"
              icon={Lock}
              forgotPasswordLink="/forgot-password"
            /> */}

            <SubmitButton
              buttonIcon={LogIn}
              title="Sign In"
              loading={isLoading}
              loadingTitle="Signing in Account please wait..."
            />
          </form>
          {/* <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Login
            </Link>
          </div> */}
        </div>
      </div>
      <div className="hidden bg-muted lg:block relative">
        <CustomCarousel />
      </div>
    </div>
  );
}
