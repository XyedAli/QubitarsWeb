import { servicesMetadata } from "@/lib/metadata";

export const metadata = servicesMetadata;

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-gray-600">Services page content goes here</p>
      </div>
    </main>
  );
}

