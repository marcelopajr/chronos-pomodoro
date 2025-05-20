import { Container } from '../../components/Container';
import { MainTemplate } from '../../templates/MainTemplate';

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <h1>404 - Page Not Found</h1>
      </Container>
    </MainTemplate>
  );
}
