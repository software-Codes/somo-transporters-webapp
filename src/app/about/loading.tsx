export default function AboutLoading() {
  return (
    <div className="w-full bg-background">
      {/* Story section skeleton */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="h-[250px] sm:h-[350px] md:h-[500px] rounded-xl bg-muted animate-pulse" />
          <div className="space-y-4">
            <div className="h-10 w-3/4 bg-muted rounded-md animate-pulse" />
            <div className="h-4 w-full bg-muted rounded-md animate-pulse" />
            <div className="h-4 w-5/6 bg-muted rounded-md animate-pulse" />
            <div className="h-4 w-4/6 bg-muted rounded-md animate-pulse" />
            <div className="h-10 w-48 bg-muted rounded-lg animate-pulse mt-4" />
          </div>
        </div>
      </div>
      {/* Stats skeleton */}
      <div className="bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-8 w-48 bg-muted rounded-md mx-auto mb-12 animate-pulse" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-48 rounded-xl bg-muted animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
            ))}
          </div>
        </div>
      </div>
      {/* Leadership skeleton */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="h-8 w-56 bg-muted rounded-md mx-auto mb-12 animate-pulse" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-32 rounded-xl bg-muted animate-pulse" style={{ animationDelay: `${i * 80}ms` }} />
          ))}
        </div>
      </div>
    </div>
  );
}
