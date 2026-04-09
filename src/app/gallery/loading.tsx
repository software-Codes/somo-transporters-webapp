export default function GalleryLoading() {
  return (
    <div className="w-full bg-background">
      <div className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        {/* Header skeleton */}
        <div className="text-center mb-12 space-y-3">
          <div className="h-8 w-48 bg-muted rounded-md mx-auto animate-pulse" />
          <div className="h-4 w-96 bg-muted rounded-md mx-auto animate-pulse" />
        </div>
        {/* Image grid skeleton */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="h-40 sm:h-56 lg:h-64 rounded-lg bg-muted animate-pulse"
              style={{ animationDelay: `${i * 50}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
