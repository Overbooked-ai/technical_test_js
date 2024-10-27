import request from 'supertest';
import app from './app';
import { RecommendationModel } from './models/recommendation';
import axios from 'axios';

jest.mock('axios'); // Mock axios

process.env.PORT = '8001';

describe('POST /recommendations', () => {
  beforeEach(async () => {
    await RecommendationModel.deleteMany({});
  });

  const createRecommendation = async (user_id: string, preferences: string[]) => {
    return await request(app)
      .post('/recommendations')
      .send({ user_id, preferences });
  };

  it('should generate and save recommendations', async () => {
    const mockResponse = {
      data: {
        recommendations: [
          "Book: 'Dune' by Frank Herbert",
          "Article: 'The Future of AI in Space Travel'",
          "Movie: 'Interstellar'"
        ]
      }
    };

    (axios.post as jest.Mock).mockResolvedValueOnce(mockResponse);

    const response = await createRecommendation('test_user', ['science fiction', 'artificial intelligence', 'space exploration']);

    expect(response.status).toBe(200);
    expect(response.body.user_id).toBe('test_user');
    expect(Array.isArray(response.body.recommendations)).toBe(true);
  });

  it('should return 400 for invalid user_id', async () => {
    const response = await createRecommendation('', ['science fiction']);

    expect(response.status).toBe(400);
    expect(response.body.errors).toEqual(expect.arrayContaining([
      expect.objectContaining({ msg: 'user_id is required and must be a non-empty string' })
    ]));
  });

  it('should return 400 for invalid preferences', async () => {
    const response = await createRecommendation('test_user', []);

    expect(response.status).toBe(400);
    expect(response.body.errors).toEqual(expect.arrayContaining([
      expect.objectContaining({ msg: 'preferences must be a non-empty array' })
    ]));
  });
});