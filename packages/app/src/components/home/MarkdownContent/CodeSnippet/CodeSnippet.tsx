import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { BackstageTheme } from '@backstage/theme';
import CopyButton from '../../../common/Buttons/CopyButton';
import { LightAsync } from 'react-syntax-highlighter';
import dark from 'react-syntax-highlighter/dist/esm/styles/hljs/dark';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';

/**
 * Properties for {@link CodeSnippet}
 *
 * @public
 */
export interface CodeSnippetProps {
  /**
   * Code Snippet text
   */
  text: string;
  /**
   * Language used by {@link CodeSnippetProps.text}
   */
  language: string;
  /**
   * Whether to show line number
   *
   * @remarks
   *
   * Default: false
   */
  showLineNumbers?: boolean;
  /**
   * Whether to show button to copy code snippet
   *
   * @remarks
   *
   * Default: false
   */
  showCopyCodeButton?: boolean;
  /**
   * Array of line numbers to highlight
   */
  highlightedNumbers?: number[];
  /**
   * Custom styles applied to code
   *
   * @remarks
   *
   * Passed to {@link https://react-syntax-highlighter.github.io/react-syntax-highlighter/ | react-syntax-highlighter}
   */
  customStyle?: any;
}

/**
 * Thin wrapper on top of {@link https://react-syntax-highlighter.github.io/react-syntax-highlighter/ | react-syntax-highlighter}
 * providing consistent theming and copy code button
 *
 * @public
 */
export function CodeSnippet(props: CodeSnippetProps) {
  const {
    text,
    language,
    showLineNumbers = false,
    highlightedNumbers,
    customStyle,
    showCopyCodeButton = false,
  } = props;
  const theme = useTheme<BackstageTheme>();
  const mode = theme.palette.type === 'dark' ? dark : docco;
  const highlightColor = theme.palette.type === 'dark' ? '#256bf3' : '#e6ffed';

  return (
    <div style={{ position: 'relative' }}>
      <LightAsync
        customStyle={customStyle}
        language={language}
        style={mode}
        showLineNumbers={showLineNumbers}
        wrapLines
        lineNumberStyle={{ color: theme.palette.textVerySubtle }}
        lineProps={(lineNumber: number) =>
          highlightedNumbers?.includes(lineNumber)
            ? {
                style: {
                  backgroundColor: highlightColor,
                },
              }
            : {}
        }
      >
        {text}
      </LightAsync>
      {showCopyCodeButton && (
        <div style={{ position: 'absolute', top: 0, right: 0 }}>
          <CopyButton text={text} />
        </div>
      )}
    </div>
  );
}
