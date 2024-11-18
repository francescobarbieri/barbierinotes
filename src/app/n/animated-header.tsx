import { Link } from "next-view-transitions";

export default function AnimatedHeader() {
  return (
    <Link href="/" className="flex mb-8 font-medium text-gray-400 fade-in">
      Francesco Barbieri
    </Link>
  )
}