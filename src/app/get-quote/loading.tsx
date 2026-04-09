export default function GetQuoteLoading() {
  return (
    <div className="bg-background w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-12 space-y-3">
          <div className="h-8 w-72 bg-muted rounded-md mx-auto animate-pulse" />
          <div className="h-4 w-96 bg-muted rounded-md mx-auto animate-pulse" />
        </div>
        <div className="rounded-2xl bg-muted/50 p-6 md:p-12 space-y-8">
          {Array.from({ length: 4 }).map((_, section) => (
            <div key={section} className="space-y-4">
              <div className="h-6 w-48 bg-muted rounded-md animate-pulse" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="h-12 rounded-md bg-muted animate-pulse" style={{ animationDelay: `${i * 60}ms` }} />
                ))}
              </div>
              <div className="h-px bg-border" />
            </div>
          ))}
          <div className="h-14 rounded-md bg-muted animate-pulse" />
        </div>
      </div>
    </div>
  );
}
