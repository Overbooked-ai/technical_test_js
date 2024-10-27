import RecommendationForm from '../components/RecommendationForm';
import UserRecommendations from '../components/UserRecommendations';

export default function Home() {
  return (
    <div>
      <RecommendationForm />
      <div className='mt-4'></div>
      <UserRecommendations />
    </div>
  );
}