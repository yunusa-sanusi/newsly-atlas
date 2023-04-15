const SectionTitle = ({ text }) => {
  return (
    <div className="border-b border-b-[#c4c4c4] w-full mt-9 mb-6">
      <h5 className="w-fit uppercase bg-customRed text-white px-4 py-2 text-sm font-semibold rounded-t-md">
        {text}
      </h5>
    </div>
  );
};
export default SectionTitle;
