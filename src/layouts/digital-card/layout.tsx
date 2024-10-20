import { Main } from './main';
import { LayoutSection } from '../core/layout-section';

export function DigitalCardLayout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutSection>
      <Main>{children}</Main>
    </LayoutSection>
  );
}
