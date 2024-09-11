type HTextProps = {
  children: React.ReactNode;
};

export default function HText({ children }: HTextProps) {
  return (
    <h1 className="mb-4 font-exo text-2xl font-bold capitalize tracking-wide lg:text-3xl">
      {children}
    </h1>
  );
}
