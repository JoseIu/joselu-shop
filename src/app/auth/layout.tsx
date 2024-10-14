import { auth } from '@/auth.config';
import { redirect } from 'next/navigation';

type Props = {
  children: React.ReactNode;
};

const LoginLayout = async ({ children }: Props) => {
  const session = await auth();

  if (session?.user) redirect('/');
  return <main>{children}</main>;
};

export default LoginLayout;
