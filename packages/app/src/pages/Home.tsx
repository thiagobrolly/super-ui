import { Button } from '@super-ds/react';
import { useTheme } from '@super-ds/theme';
import { Container } from './styles';

export function Home() {
  const { toggleTheme } = useTheme();

  return (
    <Container>
      <Button size="small" mb="50px" onClick={toggleTheme}>
        Trocar thema
      </Button>

      <h1>App</h1>

      <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
        <Button fullWidth size="medium" variant="primary">
          Full
        </Button>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button size="small" variant="primary">
            Label
          </Button>
          <Button size="small" variant="secondary">
            Label
          </Button>
          <Button size="small" variant="text">
            Label
          </Button>
          <Button size="small" variant="outlined">
            Label
          </Button>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <Button size="medium" variant="primary">
            Label
          </Button>
          <Button size="medium" variant="secondary">
            Label
          </Button>
          <Button size="medium" variant="text">
            Label
          </Button>
          <Button size="medium" variant="outlined">
            Label
          </Button>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <Button size="large" variant="primary">
            Label
          </Button>
          <Button size="large" variant="secondary">
            Label
          </Button>
          <Button size="large" variant="text">
            Label
          </Button>
          <Button size="large" variant="outlined">
            Label
          </Button>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <Button disabled variant="primary">
            Label
          </Button>
          <Button disabled variant="secondary">
            Label
          </Button>
          <Button disabled variant="text">
            Label
          </Button>
          <Button disabled variant="outlined">
            Label
          </Button>
        </div>
      </div>
    </Container>
  );
}
