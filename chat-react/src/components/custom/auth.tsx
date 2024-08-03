import { RegisterForm } from "./auth/register";
import { LoginForm } from "./auth/login";
import { Helmet } from "react-helmet";

export function Auth() {
  return (
    <>
      <Helmet>
        <title>Login - Chat app</title>
        <meta
          name="description"
          content="Login to Chat app, your ultimate communication hub! Log in to stay connected with instant messaging, multimedia sharing, high-quality video and voice calls, and secure group chats. Experience seamless communication with end-to-end encryption and cloud sync. Log in now!"
        />
      </Helmet>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-24">
          <RegisterForm />
          <LoginForm />
        </div>
      </section>
    </>
  );
}
