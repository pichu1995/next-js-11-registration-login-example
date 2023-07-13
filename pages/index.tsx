import { Box } from '@bigcommerce/big-design';
import styled from 'styled-components';
import ErrorMessage from '../components/error';
import { useProducts } from '../lib/hooks';

const Index = () => {
    const { error } = useProducts();

    if (error) return <ErrorMessage error={error} />;
    return <h1>Welcome to Nextjs 12 Sample Program devops</h1>;
};

const StyledBox = styled(Box)`
    min-width: 10rem;
`;

export default Index;
