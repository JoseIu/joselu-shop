import { getCountries } from '@/actions';
import { titleFont } from '@/config/fonts';
import { AddressForm } from './AddressForm';

const AdressPage = async () => {
  const countries = await getCountries();

  return (
    <section className="wrapper pt-20 px-4">
      <h2 className={`${titleFont.className} text-3xl font-black`}>Direction</h2>
      <span className="block font-medium mb-4">Delivery address</span>
      <AddressForm countries={countries} />
    </section>
  );
};

export default AdressPage;
