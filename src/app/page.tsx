import Banner from "@/core/components/banner";
import Welcome from "@/core/components/Welcome";

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-16">
      <Banner />
      <Welcome />
    </div>
  );
}
