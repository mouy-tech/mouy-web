import { DigitalCardView } from 'src/sections/digital-card/view/view';

type Props = {
  params: {
    userId: string;
  };
};

export default function DigitalCardPage({ params }: Props) {
  const { userId } = params;

  return <DigitalCardView userId={userId} />;
}
