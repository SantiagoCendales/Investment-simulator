
interface HeadingProps {
  title: string
  subtitle?:string
  center?: boolean
}
export const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,
  center
}) => {
  return (
    <div
      className={center ? 'text-center' : 'text-start'}
    >
      <h1 className="text-2xl font-bold">
        {title}
      </h1>
      <h2 className="text-sm leading-[25px] text-gray-700">
        {subtitle}
      </h2>
    </div>
  )
}
