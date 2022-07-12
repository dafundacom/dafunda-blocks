export function InputUpload({ open }) {
  return (
    <>
      <div
        className="w-full bg-[#EEEEEE] aspect-[16/9] md:aspect-[16/6] rounded-lg flex flex-wrap justify-center items-center"
        onClick={open}
      >
        <div className="flex flex-wrap justify-center items-center text-[#999999] flex-col">
          <i class="fa fa-picture-o text-8xl" aria-hidden="true"></i>
          <p className="text-[#999999] m-0">Tambahkan Media</p>
        </div>
      </div>
    </>
  );
}
