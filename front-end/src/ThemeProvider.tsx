import React, { ReactElement } from 'react';
import { Provider } from 'exoflex';

import SourceSansProBold from '../assets/fonts/SourceSansPro/SourceSansPro-Bold.ttf';
import SourceSansProRegular from '../assets/fonts/SourceSansPro/SourceSansPro-Regular.ttf';
import NunitoRegular from '../assets/fonts/Nunito/Nunito-Regular.ttf';

import { COLORS } from './constants/colors';

//TODO: set proper weights
const Theme = {
  fonts: {
    default: {
      bold: {
        name: 'SourceSansPro-Bold',
        weight: '500',
        source: SourceSansProBold,
      },
      normal: {
        name: 'SourceSansPro-Regular',
        weight: '500',
        source: SourceSansProRegular,
      },
    },
    nunito: {
      normal: {
        name: 'Nunito-Regular',
        weight: '500',
        source: NunitoRegular,
      },
    },
  },
  colors: {
    primary: COLORS.mandy,
  },
};

export default function ThemeProvider({
  children,
}: {
  children: ReactElement;
}) {
  return <Provider theme={Theme}>{children}</Provider>;
}
