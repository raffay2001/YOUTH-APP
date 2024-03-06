import * as React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = `
<svg width="76" height="11" viewBox="0 0 76 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="14.0169" y="0.668091" width="20.0465" height="9.93818" rx="4.96909" fill="url(#paint0_linear_0_357)"/>
<rect x="0.413971" y="0.668091" width="10.0233" height="9.93818" rx="4.96909" fill="white"/>
<rect x="37.9116" y="0.668091" width="10.0233" height="9.93818" rx="4.96909" fill="white"/>
<rect x="51.6936" y="0.668091" width="10.0233" height="9.93818" rx="4.96909" fill="white"/>
<rect x="65.5651" y="0.668091" width="10.0233" height="9.93818" rx="4.96909" fill="white"/>
<defs>
<linearGradient id="paint0_linear_0_357" x1="14.0169" y1="5.63718" x2="34.0634" y2="5.63718" gradientUnits="userSpaceOnUse">
<stop stop-color="#478FE4"/>
<stop offset="1" stop-color="#5CD3C6"/>
</linearGradient>
</defs>
</svg>
`;

export default () => <SvgXml xml={xml} width={100} height={100} />;
