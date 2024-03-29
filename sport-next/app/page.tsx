import Link from "next/link"

const HomePage = function Home() {
  return <div>
    <h1>HomePage</h1>
    <ul>
      <li>
        <Link href='/'>Home</Link>
      </li>
      <li>
        <Link href='/imagebox'>About</Link>
      </li>
    </ul>
  </div>
}

export default HomePage


