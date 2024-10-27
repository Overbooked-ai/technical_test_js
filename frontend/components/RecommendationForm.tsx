'use client';

import { useState } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Alert } from '@/components/ui/alert';
import { Input } from '@/components/ui/input';

const RecommendationForm = () => {
  const [userId, setUserId] = useState('');
  const [preferences, setPreferences] = useState('');
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const preferencesArray = preferences.split(',').map(pref => pref.trim());
    setError(null);
    setRecommendations([]);
    try {
      const response = await fetch('/api/recommendations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: userId,
          preferences: preferencesArray,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setRecommendations(data.recommendations);
    } catch (error) {
      console.error('Error generating recommendations:', error);
      setError('Unable to generate recommendations. Please try again later.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Generate Recommendations</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="text"
            placeholder="User ID"
            value={userId}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserId(e.target.value)}
            required
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div>
          <Input
            type="text"
            placeholder="Preferences (comma separated)"
            value={preferences}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPreferences(e.target.value)}
            required
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <Button type="submit" className="w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition">
          Generate Recommendations
        </Button>
        {error && <Alert>{error}</Alert>}
      </form>
      <h2 className="text-xl font-semibold mt-4">Recommendations:</h2>
      <ul className="mt-2 space-y-2">
        {recommendations.map((rec, index) => (
          <li key={index} className="border border-gray-200 rounded-md p-2 bg-gray-50">
            {rec}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationForm;