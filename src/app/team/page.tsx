import React from 'react';

export default function TeamPage() {
  const teamMembers = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & Visionary',
      bio: 'A passionate entrepreneur rooted in Indian traditions, dedicated to building communities through meaningful connections.',
      image: '/team-rajesh.jpg' // Placeholder
    },
    {
      name: 'Priya Sharma',
      role: 'Community Director',
      bio: 'Expert in socio-commerce and cultural heritage, ensuring every gathering honors Indian values.',
      image: '/team-priya.jpg'
    },
    {
      name: 'Amit Patel',
      role: 'Technology Lead',
      bio: 'Bridging modern tech with traditional wisdom to create seamless event experiences.',
      image: '/team-amit.jpg'
    },
    {
      name: 'Sunita Rao',
      role: 'Sustainability Advisor',
      bio: 'Focused on supporting farmers and health initiatives with authentic, community-driven solutions.',
      image: '/team-sunita.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <div className="max-w-6xl mx-auto py-16 px-4">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-[#811E18] mb-4">
            Our Team
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            A dedicated group of visionaries committed to Indian classic values, fostering socio-commerce through event-centric connections.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-[#811E18] flex items-center justify-center">
                <span className="text-white text-6xl">👤</span> {/* Placeholder for image */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-[#811E18] mb-2">{member.name}</h3>
                <p className="text-[#D4AF37] font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-16 text-center">
          <h2 className="text-3xl font-serif text-[#811E18] mb-6">
            Our Philosophy
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Rooted in Indian heritage, we believe in the power of gatherings to create lasting impact.
            Every connection, every opportunity, every legacy starts with a meaningful event.
          </p>
        </section>
      </div>
    </div>
  );
}