import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Dr. Maria Rodriguez',
      position: 'Chief Physical Therapist',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=faces',
      experience: '15+ years of experience'
    },
    {
      name: 'James Thompson',
      position: 'Sports Rehabilitation Specialist',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=faces',
      experience: '12+ years of experience'
    },
    {
      name: 'Sarah Chen',
      position: 'Neurological Therapist',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=faces',
      experience: '10+ years of experience'
    },
    {
      name: 'Michael Anderson',
      position: 'Physical Therapist',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=faces',
      experience: '8+ years of experience'
    },
    {
      name: 'Emily Parker',
      position: 'Pediatric Therapist',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop&crop=faces',
      experience: '9+ years of experience'
    },
    {
      name: 'David Martinez',
      position: 'Geriatric Specialist',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop&crop=faces',
      experience: '14+ years of experience'
    }
  ];

  const values = [
    { title: 'Professional Excellence', description: 'State-licensed therapists with advanced certifications' },
    { title: 'Patient-Centered Care', description: 'Personalized treatment plans for each individual' },
    { title: 'Evidence-Based Practice', description: 'Latest research and proven therapeutic techniques' },
    { title: 'Comprehensive Services', description: 'Full spectrum of rehabilitation and therapy services' },
    { title: 'Compassionate Approach', description: 'Treating patients with dignity, respect, and empathy' },
    { title: 'Continuous Innovation', description: 'Staying current with advances in physical therapy' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-[#1a1d23] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block mb-6">
              <span className="text-xs uppercase tracking-wider text-gray-400 font-medium">
                About Us
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Dedicated to Your Recovery Journey
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              With over 25 years of combined experience, De Leon Rehab Inc. has been South Florida's trusted partner in home-based physical therapy and rehabilitation.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Founded in 1998, De Leon Rehab Inc. began with a simple mission: to bring exceptional physical therapy services directly to patients' homes. We recognized that recovery happens best in familiar, comfortable environments surrounded by loved ones.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Over the years, we've grown from a small practice to a comprehensive rehabilitation center, serving thousands of patients across South Florida. Our commitment to excellence and patient-centered care has remained unwavering.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we're proud to be recognized as leaders in home-based physical therapy, combining cutting-edge techniques with compassionate care to help our patients achieve their recovery goals.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop"
                alt="Our clinic"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <CheckCircle className="w-10 h-10 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our highly qualified and state-licensed therapists are dedicated to your recovery
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-teal-600 font-medium mb-1">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-teal-600 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">25+</div>
              <div className="text-lg opacity-90">Years of Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">5000+</div>
              <div className="text-lg opacity-90">Patients Treated</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-lg opacity-90">Success Rate</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Treatment Programs</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;