type Props = {
  children: React.ReactNode;
};

const LoginLayout = ({ children }: Props) => {
  return <main>{children}</main>;
};

export default LoginLayout;
