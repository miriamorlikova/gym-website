type ClassesType = {
  name: string;
  description: string;
  image: string;
};

export default function Class({ name, description, image }: ClassesType) {
  return (
    <li className="relative mx-2 inline-block h-[153px] w-[204px] sm:h-[369px] sm:w-[492px] md:h-[495px] md:w-[660px]">
      <div className="z-25 absolute flex h-[153px] w-[204px] flex-col items-center justify-center whitespace-normal bg-primary-dark py-5 text-center opacity-0 transition duration-500 hover:opacity-90 sm:h-[369px] sm:w-[492px] md:h-[495px] md:w-[660px]">
        <h3 className="mb-2 font-oxanium text-xl font-medium">{name}</h3>
        <p>{description}</p>
      </div>
      <img src={image} alt={`${image}`} />
    </li>
  );
}
