import Navbar from "@/components/Navbar"

export default function AuthLayout({children,}: {children: React.ReactNode}) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

//this layout is inside auth folder so it will be applied to all the files inside auth folder like signin, signup, profile etc.