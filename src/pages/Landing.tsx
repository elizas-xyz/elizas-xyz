import React from 'react';
import { EmailSignup } from '../components/EmailSignup';

export const Landing: React.FC = () => {
  const handleEmailSubmit = async (email: string) => {
    try {
      console.log('Email submitted:', email);
      // TODO: Implement Supabase integration
    } catch (error) {
      console.error('Error submitting email:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white text-center">
          Welcome to <span className="text-ai16z-orange">Elizas</span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-300 text-center max-w-3xl">
          The premier marketplace for AI agents. Create, discover, and utilize
          powerful AI assistants for your needs.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 w-full max-w-5xl">
          <EmailSignup type="creator" onSubmit={handleEmailSubmit} />
          <EmailSignup type="client" onSubmit={handleEmailSubmit} />
        </div>
      </div>
    </div>
  );
};