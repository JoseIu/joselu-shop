type Props = {
  children: React.ReactNode;
};

const LoginLayout = ({ children }: Props) => {
  return (
    <main>
      <h1>Hello Root Layout Shop</h1>
      {children}
    </main>
  );
};

export default LoginLayout;
