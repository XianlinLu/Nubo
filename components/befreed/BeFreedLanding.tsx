import { AudioTopicsSection } from "./AudioTopicsSection";
import { CommunitySection } from "./CommunitySection";
import { DownloadSection, Footer } from "./DownloadFooter";
import { FeatureShowcase } from "./FeatureShowcase";
import { FlowTextSection } from "./FlowTextSection";
import { HeaderNav } from "./HeaderNav";
import { HeroSection } from "./HeroSection";
import { KnowledgeCloud } from "./KnowledgeCloud";

export function BeFreedLanding() {
  return (
    <main className="bf-site">
      <HeaderNav />
      <HeroSection />
      <KnowledgeCloud />
      <FlowTextSection />
      <AudioTopicsSection />
      <FeatureShowcase />
      <CommunitySection />
      <DownloadSection />
      <Footer />
    </main>
  );
}
