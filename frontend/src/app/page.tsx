import { Navigation }        from '@/components/Navigation'
import { Hero }              from '@/components/Hero'
import { ProblemSection }    from '@/components/ProblemSection'
import { SolutionSection }   from '@/components/SolutionSection'
import { FeaturesSection }   from '@/components/FeaturesSection'
import { HowItWorks }        from '@/components/HowItWorks'
import { UseCases }          from '@/components/UseCases'
import { Benefits }          from '@/components/Benefits'
import { Differentiation }   from '@/components/Differentiation'
import { TrustSection }      from '@/components/TrustSection'
import { CtaSection }        from '@/components/CtaSection'
import { Footer }            from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <HowItWorks />
        <UseCases />
        <Benefits />
        <Differentiation />
        <TrustSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
