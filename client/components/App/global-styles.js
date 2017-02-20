/* eslint-disable no-unused-expressions */
import { injectGlobal } from 'styled-components';
import argon from '../../assets/fonts/ArgonPERSONAL-Regular.otf';

injectGlobal`
  @font-face {
    font-family: 'Argon';
    src: url('${argon}') format('opentype');
  }

  .argon {
    font-family: Argon;
  }

  body {
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  }
`;
