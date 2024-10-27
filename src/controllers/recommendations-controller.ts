import { Request, Response } from 'express';
import axios from 'axios';
import { RecommendationModel } from '../models/recommendation';

export const generateRecommendations = async (req: Request, res: Response) => {
  console.log('Request Headers:', req.headers);
  const { user_id, preferences } = req.body;
  console.log('Request Body:', { user_id, preferences });
  try {
    const apiResponse = await axios.post('http://localhost:8080/llm/generate', { preferences });
    const { recommendations } = apiResponse.data;

    const newRecommendation = new RecommendationModel({ userRef: user_id, recommendations });
    await newRecommendation.save();

    res.json({ user_id, recommendations });
  } catch (error) {
    console.error('Error generating recommendations:', error);
    res.status(500).json({ error: 'Unable to generate recommendations at this time. Please try again later.' });
  }
};