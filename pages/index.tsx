import ErrorMessage from '../components/error';
import { useProducts } from '../lib/hooks';

const Index = () => {
    const { error } = useProducts();

    if (error) return <ErrorMessage error={error} />;

    return <h1>Welcome to Nextjs 12 Sample Program devops winner great</h1>;
};

export default Index;
