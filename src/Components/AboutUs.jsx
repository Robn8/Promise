import Hero from "./Hero";

function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Full-width Hero Section */}
      <Hero
        title="Promise 2 Papa"
        subtitle="A Ministry of Love Born from Loss"
        bgClass="bg-blue-600"
        textClass="text-white"
      />

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/fam.jpg"
              alt="Our Story"
              className="rounded-xl shadow-xl w-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 text-lg text-gray-700 leading-relaxed font-light">
            
            {/* Opening Quote */}
            <blockquote className="text-2xl italic font-semibold text-blue-600 mb-8 border-l-4 border-blue-400 pl-4">
              “Happy Sunday morning, let’s hope it's a peaceful day. ❤️❤️ Love, Dad”
            </blockquote>

            <p>
              It began with a final, peaceful text from our dad—the same day he fell and broke his hip.
              Isolated by COVID-19 policies, we couldn’t be with him. 
              We were reduced to window visits, phone calls, and the heartache of trusting others to care for him as we would have.
            </p>

            <br />

            <p>
              Unfortunately, the care he received failed him, leading to a serious infection and another surgery only two weeks after the first.
              Just a little over a week later, our father passed away. In that pain, though, there was grace.
              We were able to bring him home for his final week.
              Each grandchild stepped away from life’s demands to be by his side, pouring into him the same endless love he had poured into us.
              We walked him home to heaven.
            </p>

            <br />

            <p>
              From our own heartbreak, Promise 2 Papa was born. 
              In just 72 hours, we found ourselves in an endless battle to fight for our father’s care, making critical decisions without the resources we needed. 
              No family should face those moments powerless.
            </p>

            <br />

            <p>
              Caregiving is hard and when it arrives without warning, it can shake you to your core.
              We know the fear, the exhaustion, and the feeling of being utterly unprepared. 
              Promise 2 Papa’s mission is to walk alongside caregivers by providing resources, support, and hope, reminding them that they are not alone in their caregiving journey.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
