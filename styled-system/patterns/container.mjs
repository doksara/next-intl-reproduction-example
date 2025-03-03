import { getPatternStyles, patternFns } from '../helpers.mjs';
import { css } from '../css/index.mjs';

const containerConfig = {
transform(props) {
  const { noGutters, withMedia, ...other } = props;
  return {
    width: "100%",
    maxWidth: withMedia ? "1920px" : "1728px",
    margin: "0 auto",
    paddingInline: noGutters ? {} : { base: "20px", sm: "20px", md: "60px" },
    ...other
  };
}}

export const getContainerStyle = (styles = {}) => {
  const _styles = getPatternStyles(containerConfig, styles)
  return containerConfig.transform(_styles, patternFns)
}

export const container = (styles) => css(getContainerStyle(styles))
container.raw = getContainerStyle