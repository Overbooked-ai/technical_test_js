import mongoose, { Schema } from 'mongoose';
import { RecommendationDocument } from '../types/recommendation';

const RecommendationSchema: Schema = new Schema({
  userRef: { type: String, required: true },
  recommendations: { type: [String], required: true },
}, { timestamps: true });

export const RecommendationModel = mongoose.model<RecommendationDocument>('Recommendation', RecommendationSchema);