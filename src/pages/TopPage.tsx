import React, { FC } from "react";
import styled from "styled-components";

export const TopPage: FC = () => {
  return (
    <div>
      <BrandText>This is Top Page</BrandText>
      <AccentText>This is Top Page</AccentText>
    </div>
  );
};

const BrandText = styled.p`
  color: ${({ theme }) => theme.color.brand};
  font-weight: bold;
  font-size: 2rem;
`;

const AccentText = styled(BrandText)`
  color: ${({ theme }) => theme.color.accent};
`;
