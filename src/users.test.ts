import request from 'supertest';
import app from './app';
import { RecommendationModel } from './models/recommendation';

process.env.PORT = '8001';

describe('GET /users/:user_id/recommendations', () => {
  beforeEach(async () => {
    await RecommendationModel.deleteMany({});
  });

  const createRecommendation = async (user_id: string, preferences: string[]) => {
    return await request(app)
      .post('/recommendations')
      .send({ user_id, preferences });
  };

  it('should retrieve saved recommendations', async () => {
    const user_id = 'test_user';

    await createRecommendation(user_id, ['science fiction']);

    const response = await request(app).get(`/users/${user_id}/recommendations`);

    expect(response.status).toBe(200);
    expect(response.body.user_id).toBe(user_id);
    expect(Array.isArray(response.body.recommendations)).toBe(true);
  });

  it('should return 404 if no recommendations found', async () => {
    const user_id = 'non_existent_user';
    const response = await request(app).get(`/users/${user_id}/recommendations`);

    expect(response.status).toBe(404);
    expect(response.body.error).toBe(`No recommendations found for user_id ${user_id}.`);
  });
});