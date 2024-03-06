import * as React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="5" cy="12" r="2" fill="#000433"/>
<circle cx="12" cy="12" r="2" fill="#000433"/>
<circle cx="19" cy="12" r="2" fill="#000433"/>
</svg>
`;

interface IIconProps {
  width?: number;
  height?: number;
}

export default ({width = 35, height = 35}: IIconProps): React.JSX.Element => (
  <SvgXml xml={xml} width={width} height={height} />
);
