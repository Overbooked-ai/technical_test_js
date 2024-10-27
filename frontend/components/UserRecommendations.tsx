'use client';

import { useState } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Alert } from '@/components/ui/alert';
import { Input } from '@/components/ui/input';

const UserRecommendations = () => {
  const [userId, setUserId] = useState('');
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleFetch = async () => {
    setError(null);
    try {
      const response = await fetch(`/api/users/${userId}`);
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setRecommendations(data.recommendations);
    } catch (error) {
      console.error('Error fetching user recommendations:', error);
      setError('Unable to fetch recommendations. Please try again later.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Get User Recommendations</h1>
      <Input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserId(e.target.value)}
        required
        className="border border-gray-300 rounded-md p-2 w-full mb-4"
      />
      <Button onClick={handleFetch} className="w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition">
        Fetch Recommendations
      </Button>
      {error && <Alert>{error}</Alert>}
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

export default UserRecommendations;