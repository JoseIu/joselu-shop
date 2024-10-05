import { Footer, SIdeBar, TopMenu } from '@/components';

type Props = {
  children: React.ReactNode;
};

const ShopLayout = ({ children }: Props) => {
  return (
    <>
      <main>
        <TopMenu />
        <SIdeBar />

        {children}
      </main>
      <Footer />
    </>
  );
};

export default ShopLayout;
