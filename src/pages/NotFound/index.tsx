import { Container } from '../../components/Container';
import { GenericHtml } from '../../components/GenericHtml';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Heading>404 - Page Not Found 🚀</Heading>

          <p>
            Oops! It looks like the page you're trying to access doesn't exist.
            Maybe it went on vacation, decided to explore the universe, or got
            lost somewhere between two black holes. 🌌
          </p>

          <p>
            But don’t worry, you're not lost in space (yet). You can safely
            return to the <a href='/'>main page</a> or to your{' '}
            <a href='/history'>history</a> — or you can hang out here and
            pretend you discovered a secret page that only the coolest explorers
            get to see. 🧭✨
          </p>

          <p>
            If you believe this page should exist (or want to chat about time
            travel and wormholes), just get in touch. Otherwise, use the menu to
            return to the real world.
          </p>

          <p>
            In the meantime, here's something to ponder: "If a page doesn't
            exist on the internet, did it ever really exist?" 🤔💭
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}
