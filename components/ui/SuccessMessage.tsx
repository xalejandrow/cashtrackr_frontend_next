
export default function SuccessMessage({children} :{children: React.ReactNode }) {
    return (
      <div className="text-center bg-amber-500 text-white font-bold p-3 uppercase text-sm">
        {children}
      </div>
    )
  }
  