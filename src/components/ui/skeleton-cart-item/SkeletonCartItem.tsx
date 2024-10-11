type Props = {
  quantityItems: number;
};

export const SkeletonCartItem = ({ quantityItems }: Props) => {
  return (
    <>
      {Array.from({ length: quantityItems }).map((_, index) => (
        <div key={index} className="w-full bg-neutral-gray h-24 animate-pulse rounded-md"></div>
      ))}
    </>
  );
};
