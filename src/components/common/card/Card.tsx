interface CardProps {
  caption: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
  image?: string;
}
const Card: React.FC<CardProps> = ({
  caption,
  description,
  className,
  image,
}) => {
  return (
    <div className={`bg-white rounded-lg p-4 shadow-lg max-w-md`}>
      <div className="flex  flex-col">
        <div className="place-items-center">
          <img src={image} alt={image} className={className} />
        </div>
        <div>
          <h3 className="text-theme-xl text-center my-2 text-red-500">
            {caption}
          </h3>
          <p className="py-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
