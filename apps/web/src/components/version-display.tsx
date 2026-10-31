export function VersionDisplay() {
  const sdVersion = "1.5";

  return (
    <div className="flex items-center justify-center px-2 py-1.5">
      <span className="text-xs text-muted-foreground">
        SD Work Associates v{sdVersion}
      </span>
    </div>
  );
}
