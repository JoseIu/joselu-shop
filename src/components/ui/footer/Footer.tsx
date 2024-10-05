import { GooglePayIcon } from '@/components/icons/GooglePayIcon';
import { MasterCardIcon } from '@/components/icons/MasterCardIcon';
import { PaypaylIcon } from '@/components/icons/PaypaylIcon';
import { VisaIcon } from '@/components/icons/VisaIcon';
import { titleFont } from '@/config/fonts';
import { IoLogoTwitter } from 'react-icons/io';
import { IoLogoGithub, IoLogoInstagram } from 'react-icons/io5';
import { Logo } from '../logo/Logo';

export const Footer = () => {
  return (
    <footer className="bg-light-gray text-pure-black py-16 px-4 mt-20">
      <div className="wrapper pb-12 mb-8 border-b border-border-color  grid gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Logo className="w-36 lg:w-48" />
            <p className="max-w-[30rem]">
              We have clothes taht suits your style and witch you`re proud to wear. From woen to men
            </p>
          </div>
          <ul className="flex items-center gap-4">
            <li>
              <a
                href="#"
                className="block w-10 h-10 p-2 rounded-full bg-white text-pure-black border border-t-border-color hover:bg-pure-black hover:text-white hover:border-transparent transition-colors duration-300 ease-in"
              >
                <IoLogoTwitter size={24} />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block w-10 h-10 p-2 rounded-full bg-white text-pure-black border border-t-border-color hover:bg-pure-black hover:text-white hover:border-transparent transition-colors duration-300 ease-in"
              >
                <IoLogoInstagram size={24} />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block w-10 h-10 p-2 rounded-full bg-white text-pure-black border border-t-border-color hover:bg-pure-black hover:text-white hover:border-transparent transition-colors duration-300 ease-in"
              >
                <IoLogoGithub size={24} />
              </a>
            </li>
          </ul>
        </div>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3">
          <div>
            <h3 className={`${titleFont.className} text-xl`}>COMPANY</h3>
            <ul>
              <li>
                <a href="#" className="text-sumary-color font-semibold">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sumary-color font-semibold">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-sumary-color font-semibold">
                  Works
                </a>
              </li>
              <li>
                <a href="#" className="text-sumary-color font-semibold">
                  Career
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className={`${titleFont.className} text-xl`}>HELP</h3>
            <ul>
              <li>
                <a href="#" className="text-sumary-color font-semibold">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="text-sumary-color font-semibold">
                  Delivery Details
                </a>
              </li>
              <li>
                <a href="#" className="text-sumary-color font-semibold">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-sumary-color font-semibold">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className={`${titleFont.className} text-xl`}>FAQ</h3>
            <ul>
              <li>
                <a href="#" className="text-sumary-color font-semibold">
                  Account
                </a>
              </li>
              <li>
                <a href="#" className="text-sumary-color font-semibold">
                  Mange Deliveries
                </a>
              </li>
              <li>
                <a href="#" className="text-sumary-color font-semibold">
                  Orders
                </a>
              </li>
              <li>
                <a href="#" className="text-sumary-color font-semibold">
                  Payments
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="wrapper flex flex-col gap-4 items-center justify-center">
        <span>Shop.js @ 2024-230. All Rights Reserved.</span>

        <ul className="flex items-center gap-4">
          <li className="bg-white px-4 rounded-md">
            <VisaIcon className="w-10 h-10" />
          </li>
          <li className="bg-white px-4 rounded-md">
            <MasterCardIcon className="w-10 h-10" />
          </li>
          <li className="bg-white px-4 rounded-md">
            <PaypaylIcon className="w-10 h-10" />
          </li>
          <li className="bg-white px-4 rounded-md">
            <GooglePayIcon className="w-10 h-10" />
          </li>
        </ul>
      </div>
    </footer>
  );
};
