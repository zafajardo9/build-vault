import type { Metadata } from "next"
import Header from "@/app/components/Header"
import SystemList from "@/app/components/SystemList"
import Footer from "@/app/components/Footer"

export const metadata: Metadata = {
  title: "Systems — BuildVault",
  description:
    "A portfolio of carefully engineered systems — from cloud infrastructure to full-stack applications.",
}

export default function SystemsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <SystemList />
      </main>
      <Footer />
    </>
  )
}
