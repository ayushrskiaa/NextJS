import Navbar from '@/components/Navbar'

export default function SignInPage() {
  return (
    <>
      {/* <Navbar /> */}

      <div className="flex min-h-screen flex-col items-center justify-between p-24">

        <h1 className="text-4xl font-bold">Sign In Page</h1>
        <div>
          <LabelledInput label="Email" placeholder="Enter your email" type="email" />
          <LabelledInput label="Password" placeholder="Enter your password" type="password" />
          <button className="bg-blue-500 text-white p-2 rounded-lg ml-4">Submit</button>
        </div>
      </div>
    </>
  )
}

interface labelledInputType {
  label: string;
  placeholder: string;
  type?: string;
}

function LabelledInput({ label, placeholder, type }: labelledInputType) {
  return (
    <div className="flex flex-col mb-4">
      <label className="mb-2 font-bold text-lg text-white-900">{label}</label>
      <input type={type} placeholder={placeholder} className="border border-gray-300 p-2 rounded-lg" />
    </div>
  )
}