import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';

import ExerciseCard from '@/shared/ui/exercise-card';
import BodyPart from '@/shared/ui/body-part';
import RightArrowIcon from '@/assets/icons/right-arrow.png';
import LeftArrowIcon from '@/assets/icons/left-arrow.png';

const LeftArrow: React.FC = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon.src} alt="left-arrow" />
    </Typography>
  );
};

const RightArrow: React.FC = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon.src} alt="right-arrow" />
    </Typography>
  );
};

interface Exercise {
  id: string;
  name: string;
  bodyPart: string;
  target: string;
  gifUrl: string;
}

interface HorizontalScrollbarProps {
  data: Exercise[];
  bodyParts?: boolean;
  setBodyPart?: (bodyPart: string) => void;
  bodyPart?: string;
}

const HorizontalScrollbar: React.FC<HorizontalScrollbarProps> = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <ScrollMenu LeftArrow={<LeftArrow />} RightArrow={<RightArrow />}>
    {data.map((item) => {
      const key = typeof item === 'string' ? item : item.id;

      return (
        <Box key={key} itemID={key} title={key} m="0 40px">
          {bodyParts && typeof item === 'string'
            ? <BodyPart item={item} setBodyPart={setBodyPart!} bodyPart={bodyPart!} />
            : <ExerciseCard exercise={item as Exercise} />
          }
        </Box>
      );
    })}
  </ScrollMenu>
);

export default HorizontalScrollbar;
