import * as React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = `
<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<circle cx="25.5474" cy="25.5474" r="24.5474" fill="url(#pattern0)" stroke="url(#paint0_linear_0_222)" stroke-width="2"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_0_222" transform="scale(0.000244141)"/>
</pattern>
<linearGradient id="paint0_linear_0_222" x1="2" y1="25.5474" x2="49.0948" y2="25.5474" gradientUnits="userSpaceOnUse">
<stop stop-color="#478FE4"/>
<stop offset="1" stop-color="#5CD3C6"/>
</linearGradient>
</defs>
</svg>
`;

export default () => <SvgXml xml={xml} width={64} height={64} />;