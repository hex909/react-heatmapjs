function LegendButton({ label, variant }: { label: string; variant: string }) {
  return (
    <div className="flex items-center cursor-default space-x-1">
      <div
        className={`w-2 h-2 rounded-full ${variant}`}
        style={{ backgroundColor: variant }}
      ></div>
      <p className="text-gray-50 text-xs whitespace-nowrap">{label}</p>
    </div>
  );
}

export default LegendButton;
