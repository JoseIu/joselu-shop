import { getCountries, getUserAddress } from '@/actions';
import { auth } from '@/auth.config';
import { titleFont } from '@/config/fonts';
import { AddressForm } from './AddressForm';

const AdressPage = async () => {
  const session = await auth();
  const countries = await getCountries();
  const userAddress = await getUserAddress(session!.user.id);

  return (
    <section className="wrapper pt-20 px-4">
      <h2 className={`${titleFont.className} text-3xl font-black`}>Direction</h2>
      <span className="block font-medium mb-4">Delivery address</span>
      <AddressForm countries={countries} userAddress={userAddress!} />
    </section>
  );
};

export default AdressPage;
