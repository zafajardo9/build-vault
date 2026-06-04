import type { Metadata } from "next"
import Header from "@/app/components/Header"
import ContactForm from "@/app/components/ContactForm"
import Footer from "@/app/components/Footer"

export const metadata: Metadata = {
  title: "Contact — BuildVault",
  description:
    "Start a conversation about your next system. Tell us what you need and we'll figure out the rest together.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
