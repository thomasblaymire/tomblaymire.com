import styled from 'styled-components';

import { Button } from '@/components/button';

const StyledSubscribe = styled.form`
  padding: 2.5rem;
  border-width: 1px;
  border-radius: 1rem;
  border-color: rgba(63, 63, 70, 0.4);

  h2 {
    color: rgb(244 244 245 / 1);
    font-weight: 600;
    line-height: 1.5rem;
    font-size: 1.5rem;
    display: flex;
  }

  p {
    color: rgb(161 161 170 / 1);
    line-height: 2.2rem;
    font-size: 1.4rem;
    display: flex;
    margin-top: 1rem;
  }
`;

const StyledInputWrapper = styled.div`
  margin-top: 2.5rem;
  display: flex;

  input {
    background: rgba(63, 63, 70, 0.15);
    color: rgb(228 228 231/1);
    border-width: 1px;
    border-radius: 0.375rem;
    border-color: rgb(63 63 70/1);
    line-height: 1.5rem;
    font-size: 1.5rem;
    padding-top: calc(1rem - 1px);
    padding-bottom: calc(1rem - 1px);
    padding-left: 1.5rem;
    padding-right: 0.75rem;
    appearance: none;
    flex: 1 1 auto;
    outline: none;

    &:focus {
      border-color: rgb(45 212 191/ 1);
    }
  }
`;

const StyledSubscribeButton = styled(Button)`
  color: rgb(244 244 245 /1);
  background: rgb(63 63 70/1);
  line-height: 1.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 0.375rem;
  margin-left: 2rem;
  gap: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: rgb(82 82 91/1);
  }
`;

export function Subscribe() {
  return (
    <StyledSubscribe>
      <h2>Stay Up To Date</h2>
      <p>Get notified when I publish something new, and unsubscribe at any time.</p>
      <StyledInputWrapper>
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
        />
        <StyledSubscribeButton>Join</StyledSubscribeButton>
      </StyledInputWrapper>
    </StyledSubscribe>
  );
}
