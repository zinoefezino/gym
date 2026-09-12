import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ClassPreviews from "@/components/ClassPreviews";
import TrainersTeaser from "@/components/Trainerteaser";
import PricingTeaser from "@/components/PricingTeaser";
import FinalCta from "@/components/FinalCta";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      {/* <TrustStrip /> */}
      <ClassPreviews />
      <TrainersTeaser />
      <PricingTeaser />
      <Reviews />
      <FinalCta />
    </main>
  );
}
