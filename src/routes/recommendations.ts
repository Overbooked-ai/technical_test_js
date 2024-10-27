import { Router, Request, Response, NextFunction } from 'express';
import { generateRecommendations } from '../controllers/recommendations-controller';
import { validateGenerateRecommendations } from '../utils/schemas';
import { validationResult } from 'express-validator';

const router = Router();

router.post('/', validateGenerateRecommendations, (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  generateRecommendations(req, res);
});

export default router;