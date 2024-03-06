import * as React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_363)">
<path d="M12.1344 0V2.35897C17.3451 2.43089 21.5691 6.65488 21.641 11.8656H24C23.9281 5.35455 18.6455 0.0719128 12.1344 0Z" fill="white"/>
<path d="M22.8211 12.1344H21.641C21.5691 17.3451 17.3451 21.5691 12.1344 21.641V24C18.6455 23.9281 23.9281 18.6455 24 12.1344H22.8211Z" fill="white"/>
<path d="M2.35897 12.1344H0C0.0719128 18.6455 5.35455 23.9281 11.8656 24V21.641C6.65488 21.5691 2.43089 17.3451 2.35897 12.1344Z" fill="white"/>
<path d="M0 11.8656H2.35897C2.39552 9.19304 3.52608 6.7822 5.32037 5.05629L3.75361 3.28912C1.47362 5.45004 0.0377247 8.49278 0 11.8656Z" fill="#343434"/>
<path d="M5.32037 5.05629C7.02506 3.41645 9.32744 2.39434 11.8656 2.35897V0C8.72739 0.034188 5.87445 1.28028 3.75362 3.28912L5.32037 5.05629Z" fill="#DADADA"/>
<path d="M14.2151 13.8061H13.7059V14.8188H12.257V13.8061H9.55025V13.5302L11.3563 9.18008H12.8535L11.4565 12.5423H12.3584L12.6885 11.2997H13.7047V12.5423H14.214V13.8061H14.2151Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_0_363">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`;

interface IIconProps {
  width?: number;
  height?: number;
}

export default ({width = 28, height = 28}: IIconProps): React.JSX.Element => (
  <SvgXml xml={xml} width={width} height={height} />
);
