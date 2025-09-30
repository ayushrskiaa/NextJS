import Navbar from "@/components/Navbar"

export default function AuthLayout({children,}: {children: React.ReactNode}) {
  return (
    <div>
      <Navbar />
      <div className="border-b p-4 text-center bg-white text-black">this is navbar on blogs page</div>
      {children}
    </div>
  )
}

//this layout is inside auth folder so it will be applied to all the files inside auth folder like signin, signup, profile etc.