import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#811E18] to-[#F5F5DC]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center text-white">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">
            Connect, Create & Celebrate Community Opportunities
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            A heritage-inspired platform where people, farmers, health innovators and families discover meaningful journeys together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#D4AF37] hover:bg-[#B8860B] text-[#811E18] px-8 py-3 rounded-lg font-semibold transition-colors">
              Explore Opportunities
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#811E18] px-8 py-3 rounded-lg font-semibold transition-colors">
              Share Your Story
            </button>
          </div>
        </div>
      </section>

      {/* Core Messaging */}
      <section className="py-16 px-4 bg-[#F5F5DC]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-[#811E18] mb-8">
            Curated gatherings that spark business, careers, family legacies and social impact
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Unlock new connections through guided experiences, community stories and marketplace discovery
          </p>
          <p className="text-lg text-gray-700">
            Built for modern socio-commerce, rooted in Indian tradition
          </p>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-[#811E18] text-center mb-12">
            Why It Works
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-[#F5F5DC] rounded-lg">
              <div className="w-16 h-16 bg-[#811E18] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-[#811E18] mb-2">Gather</h3>
              <p className="text-gray-600">Join meaningful community gatherings</p>
            </div>
            <div className="text-center p-6 bg-[#F5F5DC] rounded-lg">
              <div className="w-16 h-16 bg-[#811E18] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold text-[#811E18] mb-2">Connect</h3>
              <p className="text-gray-600">Build networks and relationships</p>
            </div>
            <div className="text-center p-6 bg-[#F5F5DC] rounded-lg">
              <div className="w-16 h-16 bg-[#811E18] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🤲</span>
              </div>
              <h3 className="text-xl font-semibold text-[#811E18] mb-2">Support</h3>
              <p className="text-gray-600">Aid farmers and health initiatives</p>
            </div>
            <div className="text-center p-6 bg-[#F5F5DC] rounded-lg">
              <div className="w-16 h-16 bg-[#811E18] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-[#811E18] mb-2">Discover</h3>
              <p className="text-gray-600">Find new opportunities and legacies</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Farmers & Health */}
      <section className="py-16 px-4 bg-[#811E18] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">
            For Farmers & Health
          </h2>
          <p className="text-lg mb-8">
            Highlight support initiatives, local livelihoods, and wellbeing
          </p>
          <button className="bg-[#D4AF37] hover:bg-[#B8860B] text-[#811E18] px-8 py-3 rounded-lg font-semibold transition-colors">
            Learn More
          </button>
        </div>
      </section>

      {/* Stories & Legacy */}
      <section className="py-16 px-4 bg-[#F5F5DC]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-[#811E18] mb-8">
            Stories & Legacy
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Genealogy, community success stories, trusted relationships
          </p>
          <button className="border-2 border-[#811E18] text-[#811E18] hover:bg-[#811E18] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Read Stories
          </button>
        </div>
      </section>

      {/* Marketplace */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-[#811E18] mb-8">
            Marketplace with Purpose
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            A socio-commerce experience, not a generic shop
          </p>
          <button className="bg-[#811E18] hover:bg-[#5C0F0F] text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Explore Marketplace
          </button>
        </div>
      </section>
    </div>
  );
}