export default function AdminLoading() {
    return (
        <div className="flex items-center justify-center h-full min-h-[400px]">
            <div className="flex flex-col items-center gap-4">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
                <p className="text-white/40 text-sm animate-pulse">Loading...</p>
            </div>
        </div>
    );
}
