function StrippedHeading({ title }) {
  return (
    <div className="w-fit">
      <div className="w-24 h-3 bg-primaryColor rounded-full my-3"></div>
      <h2 className="text-4xl font-black uppercase">{title}</h2>
      <div className="flex justify-end">
        <div className="w-24 h-3 bg-primaryColor rounded-full my-3"></div>
      </div>
    </div>
  );
}

export default StrippedHeading;
