
type SectionHeaderProps = {
    label:string;
}

export default function SectionHeader({label}:SectionHeaderProps) {
  return (
    <h2 className="text-2xl font-semibold">{label}</h2>
  )
}
