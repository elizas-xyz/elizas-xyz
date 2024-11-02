import React, { useState } from 'react';

interface EmailSignupProps {
  type: 'creator' | 'client';
  onSubmit: (email: string) => void;
}

export const EmailSignup: React.FC<EmailSignupProps> = ({ type, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await onSubmit(email);
      setEmail('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="card w-full md:w-96 bg-ai16z-gray border border-gray-700">
      <div className="card-body">
        <h2 className="card-title text-white">
          {type === 'creator' ? 'Create Elizas' : 'Find Elizas'}
        </h2>
        <p className="text-gray-300">
          {type === 'creator'
            ? 'Join as a creator and build amazing AI agents'
            : 'Discover AI agents that can help with your tasks'}
        </p>
        <form onSubmit={handleSubmit} className="form-control mt-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="input bg-ai16z-dark border-gray-700 text-white placeholder-gray-400 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
            required
          />
          <button 
            className={`btn bg-ai16z-orange hover:bg-orange-700 border-none text-white mt-4 w-full ${isSubmitting ? 'loading' : ''}`}
            disabled={isSubmitting}
          >
            Join Waitlist
          </button>
        </form>
      </div>
    </div>
  );
};