import Link from "next/link";

export default function Dashboard(){
    return(
        <div>
            <h1>Hello World</h1>
            <h2>Home</h2>
            <Link href={'/'}>Home</Link>
        </div>
    )
}