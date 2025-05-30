import styled from 'styled-components';
import COLORS from '@/styles/colors';

export const TagStyles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  background: ${COLORS.navy30};
  padding: 0.2rem 0.5rem;
  border-radius: 1.25rem;
  gap: 0.3rem;
  margin-bottom: 3px;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
