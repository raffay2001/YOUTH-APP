import * as React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = `
<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.71294 7.28422C3.47453 7.28422 3.23611 7.19237 3.0541 7.00757L0.528379 4.44315C0.164368 4.07356 0.164368 3.47487 0.528379 3.10637C0.89239 2.73678 1.48098 2.7357 1.84499 3.10529L3.71294 5.00186L8.10662 0.540863C8.47063 0.171275 9.05922 0.171275 9.42323 0.540863C9.78724 0.910451 9.78724 1.50914 9.42323 1.87873L4.37178 7.00757C4.18977 7.19237 3.95136 7.28422 3.71294 7.28422Z" fill="white"/>
</svg>
`;

interface IIconProps {
  width?: number;
  height?: number;
}

export default ({width = 12, height = 12}: IIconProps): React.JSX.Element => (
  <SvgXml xml={xml} width={width} height={height} />
);
