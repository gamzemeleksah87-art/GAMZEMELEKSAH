import { ALL_QUESTIONS } from '../data/allQuestions';
import { CoverSlide } from './CoverSlide';
import { SlideCanvas } from './SlideCanvas';

interface Props {
  active: boolean;
}

export function PrintAllDeck({ active }: Props) {
  if (!active) return null;

  return (
    <div className="hidden print:block print-deck-root">
      <div className="print-slide-page">
        <CoverSlide
          onStartDeck={() => {}}
          onJumpCategory={() => {}}
          onOpenDownload={() => {}}
        />
      </div>
      {ALL_QUESTIONS.map((q) => (
        <div key={q.number} className="print-slide-page">
          <SlideCanvas
            question={q}
            revealed={true}
            selectedOption={null}
            onSelectOption={() => {}}
            onToggleReveal={() => {}}
          />
        </div>
      ))}
    </div>
  );
}
