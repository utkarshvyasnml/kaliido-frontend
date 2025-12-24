export default function ProductCardSkeleton() {
  return (
    <div
      className="
        flex flex-col shrink-0
        min-w-[40vw] w-[40vw]
        md:min-w-[15.5vw] md:w-[15.5vw]
        h-full animate-pulse
      "
    >
      {/* IMAGE */}
      <div className="w-full aspect-[4/5] md:aspect-square rounded-xl bg-gray-200 mb-3" />

      {/* CONTENT */}
      <div className="flex flex-col flex-1 justify-between px-1">
        <div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
          <div className="h-3 bg-gray-200 rounded w-1/2 mb-2" />
          <div className="h-4 bg-gray-200 rounded w-2/3" />
        </div>

        <div className="pt-4">
          <div className="h-10 bg-gray-200 rounded-full" />
        </div>
      </div>
    </div>
  )
}