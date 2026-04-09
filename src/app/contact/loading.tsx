export default function ContactLoading() {
  return (
    <div className="w-full bg-background">
      {/* Info cards skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-36 rounded-xl bg-muted animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
          ))}
        </div>
      </div>
      {/* Map skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="rounded-2xl bg-muted animate-pulse" style={{ paddingTop: "40.25%" }} />
      </div>
      {/* Form skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-2xl bg-muted/50 p-6 md:p-12 space-y-6">
          <div className="h-8 w-40 bg-muted rounded-md mx-auto animate-pulse" />
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-12 rounded-md bg-muted animate-pulse" style={{ animationDelay: `${i * 80}ms` }} />
          ))}
          <div className="h-32 rounded-md bg-muted animate-pulse" />
          <div className="h-12 rounded-md bg-muted animate-pulse" />
        </div>
      </div>
    </div>
  );
}
