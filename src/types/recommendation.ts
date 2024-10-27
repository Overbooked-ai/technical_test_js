export interface RecommendationDocument {
    userRef: string;
    recommendations: string[];
}

export interface GenerateRecommendationsRequest {
    user_id: string;
    preferences: string[];
}

export interface GenerateRecommendationsResponse {
    user_id: string;
    recommendations: string[];
}