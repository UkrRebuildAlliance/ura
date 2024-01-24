import { AdminContainer, LoginForm } from '@/components';

export const LoginPage = ({}) => {
  return (
    <section className="w-full h-screen bg-loginBg shadow-login ">
      <AdminContainer className="flex items-start justify-center h-full tablet:items-center">
        <LoginForm />
      </AdminContainer>
    </section>
  );
};
