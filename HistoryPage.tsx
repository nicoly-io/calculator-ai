import { History } from 'lucide-react';
export default function HistoryPage() {
  return (
    <div className="p-10 flex flex-col items-center justify-center h-screen text-gray-600">
      <History size={80} strokeWidth={1} className="mb-4 opacity-10" />
      <p className="font-bold italic uppercase tracking-widest">Aucun historique</p>
    </div>
  );
}