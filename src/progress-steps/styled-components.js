/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

// @flow

import {styled} from '../styles/index.js';
import type {StylePropsT} from './types.js';

export const StyledProgressSteps = styled<{}>('div', ({$theme}) => {
  return {
    backgroundColor: $theme.colors.listHeaderFill,
    display: 'inline-block',
    paddingTop: $theme.sizing.scale300,
    paddingRight: $theme.sizing.scale500,
    paddingLeft: $theme.sizing.scale500,
    paddingBottom: $theme.sizing.scale300,
  };
});

export const StyledStep = styled<StylePropsT>('div', ({$theme}) => {
  return {
    position: 'relative',
    overflow: 'visible',
  };
});

export const StyledIcon = styled<StylePropsT>(
  'div',
  ({$theme, $isActive, $isCompleted, $disabled}) => {
    let currentColor = $theme.colors.mono400;
    let size = $theme.sizing.scale300;
    let marginRight = $theme.sizing.scale500;
    let marginLeft = $theme.sizing.scale100;
    let font = $theme.typography.font400;

    if ($isCompleted) {
      currentColor = $theme.colors.primary400;
    } else if ($isActive) {
      font = $theme.typography.font450;
      currentColor = $theme.colors.progressStepsIconActiveFill;
    }

    if ($isActive) {
      size = $theme.sizing.scale600;
      marginLeft = 0;
      marginRight = $theme.sizing.scale300;
    }

    const marginTop = `calc((${font.lineHeight} - ${size}) / 2)`;

    return {
      marginRight,
      marginLeft,
      marginTop,
      width: size,
      height: size,
      lineHeight: size,
      borderRadius: size,
      backgroundColor: currentColor,
      float: 'left',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };
  },
);

export const StyledInnerIcon = styled<StylePropsT>('div', ({$theme}) => {
  return {
    width: $theme.sizing.scale100,
    height: $theme.sizing.scale100,
    lineHeight: $theme.sizing.scale100,
    borderRadius: $theme.sizing.scale100,
    backgroundColor: $theme.colors.primary400,
    textAlign: 'center',
  };
});

export const StyledContent = styled<StylePropsT>('div', ({$theme}) => {
  return {
    marginLeft: $theme.sizing.scale900,
  };
});

export const StyledContentTitle = styled<StylePropsT>(
  'div',
  ({$theme, $isActive}) => {
    let color = $theme.colors.foregroundAlt;
    let font = $theme.typography.font400;

    if ($isActive) {
      color = $theme.colors.foreground;
      font = $theme.typography.font450;
    }

    return {
      ...font,
      color,
    };
  },
);

export const StyledContentTail = styled<StylePropsT>(
  'div',
  ({$theme, $isCompleted}) => {
    let currentColor = $theme.colors.mono400;

    if ($isCompleted) {
      currentColor = $theme.colors.primary400;
    }

    return {
      position: 'absolute',
      left: '7px',
      top: 0,
      height: '100%',
      paddingBottom: '0px',
      width: $theme.sizing.scale0,
      paddingTop: $theme.sizing.scale600,
      ':after': {
        content: '""',
        display: 'inline-block',
        height: `calc(100% + ${$theme.sizing.scale500})`,
        width: '100%',
        backgroundColor: currentColor,
      },
    };
  },
);

export const StyledContentDescription = styled<StylePropsT>(
  'div',
  ({$theme}) => {
    return {
      marginBottom: $theme.sizing.scale700,
    };
  },
);

export const StyledNumberStep = styled<StylePropsT>('div', ({$theme}) => {
  return {
    position: 'relative',
    overflow: 'visible',
  };
});

export const StyledNumberIcon = styled<StylePropsT>(
  'div',
  ({$theme, $isActive, $isCompleted, $disabled}) => {
    let backgroundColor = $theme.colors.mono400;
    let color = $theme.colors.colorSecondary;
    let size = $theme.sizing.scale800;
    let marginRight = $theme.sizing.scale300;
    let font = $theme.typography.font350;
    let titleFont = $theme.typography.font400;

    if ($isCompleted) {
      backgroundColor = $theme.colors.primary400;
      color = $theme.colors.white;
    } else if ($isActive) {
      titleFont = $theme.typography.font450;
      color = $theme.colors.primary400;
      backgroundColor = $theme.colors.progressStepsIconActiveFill;
    }

    const marginTop = `calc((${titleFont.lineHeight} - ${size}) / 2)`;

    return {
      marginRight,
      marginTop,
      width: size,
      height: size,
      borderRadius: size,
      backgroundColor,
      color,
      float: 'left',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      ...font,
    };
  },
);

export const StyledNumberContentTail = styled<StylePropsT>(
  'div',
  ({$theme, $isActive, $isCompleted, $disabled}) => {
    let currentColor = $theme.colors.mono300;

    if ($isCompleted) {
      currentColor = $theme.colors.primary400;
    }

    return {
      position: 'absolute',
      left: '11px',
      top: 0,
      height: '100%',
      marginTop: '5px',
      paddingBottom: '0px',
      width: $theme.sizing.scale0,
      paddingTop: $theme.sizing.scale600,
      ':after': {
        content: '""',
        display: 'inline-block',
        height: '100%',
        width: '100%',
        backgroundColor: currentColor,
      },
    };
  },
);
