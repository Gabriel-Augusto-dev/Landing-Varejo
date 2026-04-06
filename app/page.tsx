import { layouts } from "@/config/layouts";
import { Navbar } from "@/components/navbar";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { HeroGradient, HeroSplit, HeroCentered, HeroMinimal } from "@/components/sections/hero";
import { HeroImage, HeroImageSplit } from "@/components/sections/hero/HeroModerno";
import {
  HeroVideoFull,
  HeroSplitStats,
  HeroCenteredCards,
  HeroMinimalTypo,
  HeroGridGallery,
  HeroGradientMesh,
  HeroSideFloat,
  HeroTwoColBenefits,
  HeroTestimonial,
  HeroProcess,
} from "@/components/sections/hero/HeroLayouts";
import { AuthorityGrid, AuthorityStats, AuthorityMinimal } from "@/components/sections/authority";
import { AuthorityWithVideo, AuthorityVideoHero } from "@/components/sections/authority/AuthorityModerno";
import {
  AuthorityGridBadges,
  AuthorityVideoLeft,
  AuthorityCenteredPartners,
  AuthorityVideoCenter,
  AuthorityMinimalList,
  AuthorityImageBg,
  AuthorityHorizontal,
  AuthoritySplitStats,
  AuthorityCompact,
  AuthorityBanner,
} from "@/components/sections/authority/AuthorityLayouts";
import { ServicesCards, ServicesAccordion, ServicesGrid } from "@/components/sections/services";
import { ServicesWithGallery, ServicesGalleryFull } from "@/components/sections/services/ServicesModerno";
import {
  ServicesGridGallery,
  ServicesListImage,
  ServicesTabs,
  ServicesCarousel,
  ServicesTwoCol,
  ServicesMinimal,
  ServicesMasonry,
  ServicesFeatured,
  ServicesPricing,
} from "@/components/sections/services/ServicesLayouts";
import { BenefitsCards, BenefitsHorizontal, BenefitsStacked } from "@/components/sections/benefits";
import { BenefitsWithImage, BenefitsImageHero, BenefitsImageCards } from "@/components/sections/benefits/BenefitsModerno";
import { ProcessTimeline, ProcessSteps, ProcessCards } from "@/components/sections/process";
import { TestimonialsCarousel, TestimonialsGrid, TestimonialsMasonry } from "@/components/sections/testimonials";
import { FaqAccordion, FaqGrid, FaqTabs } from "@/components/sections/faq";
import { CtaSplit, CtaCentered, CtaBanner } from "@/components/sections/CTA";
import { FooterMultiColumn, FooterCentered, FooterMinimal } from "@/components/sections/footer";
import { Stats } from "@/components/sections/stats";
import { ContactForm } from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <WhatsAppFloat />

      {/* 1️⃣ HERO - Chamar atenção + proposta de valor */}
      {layouts.hero === "gradient" && <HeroGradient />}
      {layouts.hero === "split" && <HeroSplit />}
      {layouts.hero === "centered" && <HeroCentered />}
      {layouts.hero === "minimal" && <HeroMinimal />}
      {layouts.hero === "image" && <HeroImage />}
      {layouts.hero === "imageSplit" && <HeroImageSplit />}
      {layouts.hero === "videoFull" && <HeroVideoFull />}
      {layouts.hero === "splitStats" && <HeroSplitStats />}
      {layouts.hero === "centeredCards" && <HeroCenteredCards />}
      {layouts.hero === "minimalTypo" && <HeroMinimalTypo />}
      {layouts.hero === "gridGallery" && <HeroGridGallery />}
      {layouts.hero === "gradientMesh" && <HeroGradientMesh />}
      {layouts.hero === "sideFloat" && <HeroSideFloat />}
      {layouts.hero === "twoColBenefits" && <HeroTwoColBenefits />}
      {layouts.hero === "testimonial" && <HeroTestimonial />}
      {layouts.hero === "process" && <HeroProcess />}

      <Stats />

      {/* 2️⃣ AUTORIDADE/PROVA - "Por que confiar em você?" */}
      {layouts.authority === "grid" && <AuthorityGrid />}
      {layouts.authority === "stats" && <AuthorityStats />}
      {layouts.authority === "minimal" && <AuthorityMinimal />}
      {layouts.authority === "video" && <AuthorityWithVideo />}
      {layouts.authority === "videoHero" && <AuthorityVideoHero />}
      {layouts.authority === "gridBadges" && <AuthorityGridBadges />}
      {layouts.authority === "videoLeft" && <AuthorityVideoLeft />}
      {layouts.authority === "centeredPartners" && <AuthorityCenteredPartners />}
      {layouts.authority === "videoCenter" && <AuthorityVideoCenter />}
      {layouts.authority === "minimalList" && <AuthorityMinimalList />}
      {layouts.authority === "imageBg" && <AuthorityImageBg />}
      {layouts.authority === "horizontal" && <AuthorityHorizontal />}
      {layouts.authority === "splitStats" && <AuthoritySplitStats />}
      {layouts.authority === "compact" && <AuthorityCompact />}
      {layouts.authority === "banner" && <AuthorityBanner />}

      {/* 3️⃣ SERVIÇOS/SOLUÇÃO - O que exatamente você faz */}
      <div id="servicos">
        {layouts.services === "cards" && <ServicesCards />}
        {layouts.services === "accordion" && <ServicesAccordion />}
        {layouts.services === "grid" && <ServicesGrid />}
        {layouts.services === "withGallery" && <ServicesWithGallery />}
        {layouts.services === "galleryFull" && <ServicesGalleryFull />}
        {layouts.services === "gridGallery" && <ServicesGridGallery />}
        {layouts.services === "listImage" && <ServicesListImage />}
        {layouts.services === "tabs" && <ServicesTabs />}
        {layouts.services === "carousel" && <ServicesCarousel />}
        {layouts.services === "twoCol" && <ServicesTwoCol />}
        {layouts.services === "minimal" && <ServicesMinimal />}
        {layouts.services === "masonry" && <ServicesMasonry />}
        {layouts.services === "featured" && <ServicesFeatured />}
        {layouts.services === "pricing" && <ServicesPricing />}
      </div>

      {/* 4️⃣ BENEFÍCIOS - O que a pessoa ganha */}
      <div id="beneficios">
        {layouts.benefits === "cards" && <BenefitsCards />}
        {layouts.benefits === "horizontal" && <BenefitsHorizontal />}
        {layouts.benefits === "stacked" && <BenefitsStacked />}
        {layouts.benefits === "withImage" && <BenefitsWithImage />}
        {layouts.benefits === "imageHero" && <BenefitsImageHero />}
        {layouts.benefits === "imageCards" && <BenefitsImageCards />}
      </div>

      {/* 5️⃣ COMO FUNCIONA - Remove dúvidas e atrito */}
      <div id="process">
        {layouts.process === "timeline" && <ProcessTimeline />}
        {layouts.process === "steps" && <ProcessSteps />}
        {layouts.process === "cards" && <ProcessCards />}
      </div>

      {/* 6️⃣ PROVA SOCIAL - Depoimentos, casos */}
      <div id="depoimentos">
        {layouts.testimonials === "carousel" && <TestimonialsCarousel />}
        {layouts.testimonials === "grid" && <TestimonialsGrid />}
        {layouts.testimonials === "masonry" && <TestimonialsMasonry />}
      </div>

      {/* 7️⃣ CTA FORTE - Direciona para ação */}
      <div id="cta">
        {layouts.cta === "split" && <CtaSplit />}
        {layouts.cta === "centered" && <CtaCentered />}
        {layouts.cta === "banner" && <CtaBanner />}
      </div>

      <ContactForm />

      {/* 8️⃣ FAQ - Remove objeções finais */}
      <div id="faq">
        {layouts.faq === "accordion" && <FaqAccordion />}
        {layouts.faq === "grid" && <FaqGrid />}
        {layouts.faq === "tabs" && <FaqTabs />}
      </div>

      {layouts.footer === "multi-column" && <FooterMultiColumn />}
      {layouts.footer === "centered" && <FooterCentered />}
      {layouts.footer === "minimal" && <FooterMinimal />}
    </>
  );
}


