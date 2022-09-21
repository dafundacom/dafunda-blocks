export function InputUpload({ open }) {
  return (
    <div
      className='flex aspect-[16/9] w-full flex-wrap items-center justify-center rounded-lg bg-[#EEEEEE] md:aspect-[16/6]'
      onClick={open}
      aria-hidden='true'
    >
      <div className='flex flex-col flex-wrap items-center justify-center text-[#999999]'>
        <i className='fa fa-picture-o text-8xl' aria-hidden='true' />
        <p className='m-0 text-[#999999]'>Tambahkan Media</p>
      </div>
    </div>
  )
}
