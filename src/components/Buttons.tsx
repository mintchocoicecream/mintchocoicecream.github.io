import { useEffect, useState } from 'react';
import { styled, keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'; 
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const TopButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 999;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  
  background-color: ${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor};
  border: 1px solid ${(props) => props.theme.borderColor ||'rgba(255, 255, 255, 0.1)'};
  
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
  
  animation: ${fadeIn} 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  /* 아이콘 크기 및 애니메이션 부드럽게 */
  svg {
    font-size: 16px;
    transition: transform 0.2s ease;
  }

  &:hover {
    background-color: ${(props) => props.theme.cardBgColor || '#10b981'};
    color: ${(props) => props.theme.textColor};
    border-color: transparent;
    transform: translateY(-4px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);

    svg {
      transform: translateY(-2px);
    }
  }

  &:active {
    transform: translateY(-1px);
  }

  /* 반응형: 화면이 작아질 때 위치 조정 */
  @media (max-width: 768px) {
    bottom: 24px;
    right: 24px;
    width: 42px;
    height: 42px;
  }
`;

export default function ScrollTopButton(){
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // 스크롤이 300px 이상 내려갔을 때 노출
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <TopButton onClick={scrollToTop} aria-label="Scroll to top">
          <FontAwesomeIcon icon={faArrowUp} />
        </TopButton>
      )}
    </>
  );
};