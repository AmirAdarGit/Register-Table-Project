import styled from './style';

export const H1 = styled.h1`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0;
  font-size: 28px;
  font-weight: bold;
  line-height: 34px;
  color: ${({ theme }) => theme.color.fontColor};
`;

export const H2 = styled.h2`
  margin: 0;

  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.color.fontColor};
`;

export const H3 = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.fontColor};

  @media (max-width: 1023px) {
    font-size: 16px;
  }
`;

export const H3Inverted = styled(H3)`
  color: ${({ theme }) => theme.color.fontColorInverted};
`;

export const H4 = styled.h4`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.fontColor};
  margin: 0;
`;

export const H5 = styled.h5`
  font-size: 14px;
  font-weight: normal;
  text-align: center;
  color: ${({ theme }) => theme.color.fontColor};
  margin: 0;
`;

export const H6 = styled.h6`
  font-size: 10px;
  font-weight: normal;
  text-align: center;
  color: ${({ theme }) => theme.color.fontColor};
  margin: 0;
`;

export const RegularTitle = styled.div`
  font-size: 16px;
  font-weight: normal;
  text-transform: capitalize;
`;
