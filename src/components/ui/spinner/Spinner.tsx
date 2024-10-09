import './spinder.css';
export const Spinner = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} className="container" viewBox="0 0 40 40">
      <circle className="track" cx="20" cy="20" r="17.5" pathLength="100" strokeWidth="5px" fill="none" />
      <circle className="car" cx="20" cy="20" r="17.5" pathLength="100" strokeWidth="5px" fill="none" />
    </svg>
  );
};
