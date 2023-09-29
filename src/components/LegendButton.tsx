function LegendButton({ label, variant }: { label: string; variant: string }) {
  return (
    <div className="flex gap-1 items-center">
      <span
        className="w-2 h-2 rounded-full"
        style={{ background: variant }}
      ></span>
      <p className="text-gray-500 text-sm whitespace-nowrap">{label}</p>
    </div>
  );
}

export default LegendButton;
