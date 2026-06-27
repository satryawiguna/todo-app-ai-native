export function TodoSkeleton() {
  return (
    <div className="space-y-3">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-white rounded-lg border border-gray-200 p-4 animate-pulse">
          <div className="flex items-start gap-3">
            <div className="h-5 w-5 rounded bg-gray-200 mt-1" />
            <div className="flex-1">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
              <div className="h-3 bg-gray-100 rounded w-1/2 mb-3" />
              <div className="flex gap-2">
                <div className="h-4 w-12 bg-gray-100 rounded-full" />
                <div className="h-4 w-16 bg-gray-100 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
