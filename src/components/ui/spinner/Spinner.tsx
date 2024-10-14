import './spinder.css';
type Props = {
  white?: boolean;
};
export const Spinner = ({ white }: Props) => {
  const colorStyle = white ? 'white' : 'black';
  return (
    <svg className={`container ${colorStyle}`} viewBox="0 0 40 40">
      <circle className="track" cx="20" cy="20" r="17.5" pathLength="100" strokeWidth="5px" fill="none" />
      <circle className="car" cx="20" cy="20" r="17.5" pathLength="100" strokeWidth="5px" fill="none" />
    </svg>
  );
};
