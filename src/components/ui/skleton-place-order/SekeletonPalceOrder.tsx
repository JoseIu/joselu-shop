type Props = {
  quantityItems: number;
};

export const SekeletonPalceOrder = ({ quantityItems }: Props) => {
  return (
    <>
      {Array.from({ length: quantityItems }).map((_, index) => (
        <div key={index} className="w-full bg-neutral-gray h-6 animate-pulse rounded-md"></div>
      ))}
    </>
  );
};
