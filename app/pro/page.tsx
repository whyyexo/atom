import { PublicLayout } from "@/components/public/public-layout";

export default function ProPage() {
  return (
    <PublicLayout>
      <div className="min-h-screen bg-[#0C0C0D] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-white mb-4">Pro</h1>
          <p className="text-[#C9C9C9]">Coming soon</p>
        </div>
      </div>
    </PublicLayout>
  );
}

