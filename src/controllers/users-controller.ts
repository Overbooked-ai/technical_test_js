import { Request, Response } from 'express';
import { RecommendationModel } from '../models/recommendation';

export const getUserRecommendations = async (req: Request, res: Response) => {
  const user_id = req.params.user_id;

  try {
    const recommendations = await RecommendationModel.findOne({ userRef: user_id });

    if (!recommendations) {
      return res.status(404).json({ error: `No recommendations found for user_id ${user_id}.` });
    }

    res.json({ user_id, recommendations: recommendations.recommendations });
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    res.status(500).json({ error: 'Unable to fetch recommendations at this time. Please try again later.' });
  }
};