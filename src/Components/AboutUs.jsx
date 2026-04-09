import Hero from "./Hero";
import Footer from "./Footer";
import Section from "./Section";
import Card from "./Card";

function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero
        title="Promise 2 Papa"
        subtitle="A Ministry of Love Born from Loss"
        bgClass="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700"
        textClass="text-white"
      />

      <main>
        <Section className="max-w-5xl">
          <Card className="overflow-hidden rounded-3xl animate-fade-up-soft">
            <div className="flex justify-center pt-6 sm:pt-8">
              <div className="relative">
                <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 opacity-40 blur-2xl" />
                <img
                  src="/fam.jpg"
                  alt="Promise 2 Papa family story"
                  className="relative h-48 w-48 rounded-full object-cover object-[center_top] shadow-xl ring-4 ring-white sm:h-60 sm:w-60"
                />
              </div>
            </div>

            <div className="animate-fade-up-soft-delay px-6 pb-6 pt-8 sm:px-8 sm:pb-8 lg:px-10 lg:pb-10">
              <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
                Our Story
              </p>

              <div className="mx-auto mb-8 max-w-3xl">
                <blockquote className="relative border-l-4 border-blue-400 pl-5 text-xl font-semibold italic leading-relaxed text-blue-600 sm:text-2xl">
                  <span className="absolute -left-3 -top-3 text-5xl leading-none text-blue-200">
                    “
                  </span>
                  Happy Sunday morning, let’s hope it&apos;s a peaceful day. ❤️❤️
                  Love, Dad
                </blockquote>
              </div>

              <div className="mx-auto max-w-3xl space-y-5 text-base leading-8 text-gray-700 sm:text-lg">
                <p>
                  It began with a final, peaceful text from our dad on the same
                  day he fell and broke his hip. Isolated by COVID-19 policies, we
                  couldn’t be with him. We were reduced to window visits, phone
                  calls, and the heartache of trusting others to care for him as we
                  would have.
                </p>

                <p>
                  Unfortunately, the care he received failed him, leading to a
                  serious infection and another surgery only two weeks after the
                  first. Just a little over a week later, our father passed away.
                  In that pain, though, there was grace. We were able to bring him
                  home for his final week.
                </p>

                <p>
                  Each grandchild stepped away from life’s demands to be by his
                  side, pouring into him the same endless love he had poured into
                  us. We walked him home to heaven.
                </p>

                <p>
                  From our own heartbreak, Promise 2 Papa was born. In just 72
                  hours, we found ourselves in an endless battle to fight for our
                  father’s care, making critical decisions without the resources we
                  needed. No family should face those moments powerless.
                </p>

                <p>
                  Caregiving is hard, and when it arrives without warning, it can
                  shake you to your core. We know the fear, the exhaustion, and the
                  feeling of being utterly unprepared. Promise 2 Papa’s mission is
                  to walk alongside caregivers by providing resources, support, and
                  hope, reminding them that they are not alone in their caregiving
                  journey.
                </p>
              </div>
            </div>
          </Card>

          <div className="mt-12 sm:mt-16">
            <div className="animate-fade-up-soft rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 px-6 py-8 text-white shadow-lg sm:px-8 sm:py-10">
              <h2 className="text-2xl font-bold sm:text-3xl">Why We Exist</h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/90 sm:text-base">
                Promise 2 Papa exists to help families facing caregiving decisions
                feel less overwhelmed and more supported. Through shared
                experience, practical resources, and compassionate guidance, we
                hope to bring clarity and comfort during some of life’s hardest
                moments.
              </p>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}

export default AboutUs;