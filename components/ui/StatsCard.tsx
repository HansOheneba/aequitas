interface StatsCardProps {
  value: string;
  label: string;
  description?: string;
  dark?: boolean;
  className?: string;
}

export default function StatsCard({
  value,
  label,
  description,
  dark = false,
  className = "",
}: StatsCardProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className="text-4xl lg:text-5xl font-bold text-gold mb-2">
        {value}
      </div>
      <div
        className={`text-base lg:text-lg font-semibold mb-1 ${dark ? "text-white" : "text-charcoal"}`}
      >
        {label}
      </div>
      {description && (
        <div className={`text-sm ${dark ? "text-gray-300" : "text-gray-500"}`}>
          {description}
        </div>
      )}
    </div>
  );
}
