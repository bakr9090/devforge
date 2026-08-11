export default function Loading() {
  return (
    <div className="grid min-h-screen place-items-center bg-[var(--ink)] px-5" role="status" aria-label="Loading page">
      <div className="w-full max-w-md">
        <div className="loading-mark">D_</div>
        <div className="loading-line mt-8 h-3 w-28" />
        <div className="loading-line mt-5 h-10 w-full" />
        <div className="loading-line mt-3 h-10 w-4/5" />
        <div className="loading-line mt-8 h-3 w-2/3" />
      </div>
    </div>
  );
}
