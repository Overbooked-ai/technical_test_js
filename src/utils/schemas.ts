import { body, ValidationChain } from 'express-validator';

export const validateGenerateRecommendations: ValidationChain[] = [
  body('user_id')
    .isString()
    .notEmpty()
    .withMessage('user_id is required and must be a non-empty string'),
  body('preferences')
    .isArray({ min: 1 })
    .withMessage('preferences must be a non-empty array'),
  body('preferences.*')
    .isString()
    .notEmpty()
    .withMessage('Each preference must be a non-empty string'),
];