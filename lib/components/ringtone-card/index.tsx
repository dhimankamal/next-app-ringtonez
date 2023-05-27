import { FaPlay } from "react-icons/fa";

type RingtoneCardProps = {};

export default function RingtoneCard({}: RingtoneCardProps) {
  return (
    <div className="border p-4 transition-all duration-500 hover:bg-slate-100 rounded-md flex items-center gap-4">
      <div className="cursor-pointer">
        <FaPlay size={32} />
      </div>
      <div className="cursor-pointer">
        <h3 className="text-md font-medium">Ringtone name kamal</h3>
        <p className="text-xs">Date - 12 may 2023 </p>
      </div>
    </div>
  );
}
