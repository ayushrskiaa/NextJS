import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1 className="text-3xl font-bold text-center justify-content-center mb-8">ToDo application</h1>

    <div>
      <Link className="text-blue-500 hover:underline" href="/signin">
        Go to signin
      </Link>
      <br />
      <Link className="text-blue-500 hover:underline" href="/signup">
        Go to signup
      </Link>
    </div>
    </>
  );
}
