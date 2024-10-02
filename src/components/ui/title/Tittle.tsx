import { titleFont } from '@/config/fonts';
import './title.css';

type Props = {
  title: string;
  subTitle?: string;
  className?: string;
};
export const Title = ({ title, subTitle, className }: Props) => {
  return (
    <div className="flex flex-col">
      <h1 className={`${className} ${titleFont.className} title font-black`}>{title}</h1>
      {subTitle && <p className="sub-title">{subTitle}</p>}
    </div>
  );
};
