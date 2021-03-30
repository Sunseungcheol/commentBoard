import React from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

const btnColor = css`
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
    `;
  }}
`;

const btnSizes = {
  large: {
    height: "3rem",
    fontSize: "1.25rem",
  },
  medium: {
    height: "2.25rem",
    fontSize: "1rem",
  },
  small: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    height: "1.75rem",
    fontSize: "0.75rem",
  },
};

const sizeStyles = css`
  ${({ size }) => css`
    height: ${btnSizes[size].height};
    padding-left: ${btnSizes[size].paddingLeft};
    padding-right: ${btnSizes[size].paddingRight};
    font-size: ${btnSizes[size].fontSize};
  `}
`;

const StyledBtn = styled.button`
  /* 공통 스타일 */
  display: inline-block;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  //font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  ${sizeStyles}

  /* 색상 */
  ${btnColor}
  /* 기타 */
  //붙어있는 경우 마진 레프드 1
  & + & {
    margin-left: 0.5rem;
  }
`;

function Button({ children, color = "blue", size = "medium", ...rest }) {
  return (
    <StyledBtn color={color} size={size} {...rest}>
      {children}
    </StyledBtn>
  );
}

export default Button;
