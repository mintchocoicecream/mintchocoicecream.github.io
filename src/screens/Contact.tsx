
import { useState } from 'react';
import {styled} from "styled-components";
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileArrowDown, faXmark, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const SERVICE_ID = (import.meta as ImportMeta & { env: { VITE_EMAILJS_SERVICE_ID: string } }).env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = (import.meta as ImportMeta & { env: { VITE_EMAILJS_TEMPLATE_ID: string } }).env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = (import.meta as ImportMeta & { env: { VITE_EMAILJS_PUBLIC_KEY: string } }).env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      alert('Your message has been sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setIsModalOpen(false);
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ContactWrapper>
      <HeaderSection>
        <Title>Let's Connect</Title>
        <Subtitle>
          I'm currently looking for new opportunities as a Front-End Developer. 
          Whether you have a question or just want to say hi, my inbox is always open!
        </Subtitle>
      </HeaderSection>

      <ContactGrid>
        {/* Email Popup */}
        <ContactCardAsButton onClick={() => setIsModalOpen(true)}>
          <IconWrapper>
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </IconWrapper>
          <CardInfo>
            <h3>Email</h3>
            <p>Send a message directly</p>
          </CardInfo>
        </ContactCardAsButton>

        <ContactCard href="https://github.com/mintchocoicecream" target="_blank" rel="noopener noreferrer">
          <IconWrapper>
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </IconWrapper>
          <CardInfo>
            <h3>GitHub</h3>
            <p>github.com/mintchocoicecream</p>
          </CardInfo>
        </ContactCard>

        <ContactCard href="https://www.linkedin.com/in/hyunjeong-angela-seo" target="_blank" rel="noopener noreferrer">
          <IconWrapper>
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </IconWrapper>
          <CardInfo>
            <h3>LinkedIn</h3>
            <p>Connect with me professionally</p>
          </CardInfo>
        </ContactCard>

        <ContactCard as="a" href="/resume.pdf" download="HyunjeongSeo_Resume.pdf">
          <IconWrapper>
            <FontAwesomeIcon icon={faFileArrowDown} size="lg" />
          </IconWrapper>
          <CardInfo>
            <h3>Resume</h3>
            <p>Download English PDF</p>
          </CardInfo>
        </ContactCard>
      </ContactGrid>

      {/* Mail Modal */}
      {isModalOpen && (
        <ModalOverlay onClick={() => setIsModalOpen(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <h3>Send Me a Message</h3>
              <CloseButton onClick={() => setIsModalOpen(false)}>
                <FontAwesomeIcon icon={faXmark} size="lg" />
              </CloseButton>
            </ModalHeader>

            <EmailForm onSubmit={handleSubmit}>
              <FormGroup>
                <label>Your Name *</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  required 
                  placeholder="Enter your name"
                />
              </FormGroup>

              <FormGroup>
                <label>Your Email *</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  required 
                  placeholder="Enter your email address"
                />
              </FormGroup>

              <FormGroup>
                <label>Message *</label>
                <textarea 
                  name="message" 
                  rows={5} 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  required 
                  placeholder="Write your message here..."
                />
              </FormGroup>

              <SubmitButton type="submit" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send Message'} <FontAwesomeIcon icon={faPaperPlane} />
              </SubmitButton>
            </EmailForm>
          </ModalContent>
        </ModalOverlay>
      )}
    </ContactWrapper>
  );
}

// ----- Styled Components -----

const ContactWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 60px 20px 100px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: -0.5px;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.8;
  max-width: 600px;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 20px;
`;

const cardStyle = `
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px;
  border-radius: 12px;
  background-color: rgba(128, 128, 128, 0.04);
  border: 1px solid rgba(128, 128, 128, 0.15);
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #10b981;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

    div:first-child {
      background-color: #10b981;
      color: #fff;
    }
  }
`;

const ContactCard = styled.a`
  ${cardStyle}
`;

const ContactCardAsButton = styled.div`
  ${cardStyle}
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: #10b98115;
  color: ${(props) => props.theme.accentColor};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  flex-shrink: 0;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h3 {
    font-size: 1.1rem;
    font-weight: 700;
  }

  p {
    font-size: 0.9rem;
    opacity: 0.7;
    word-break: break-all;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  backdrop-filter: blur(4px);
`;

const ModalContent = styled.div`
  background-color: ${(props) => props.theme.bgColor || props.theme.whiteColor};
  border: 1px solid rgba(128, 128, 128, 0.2);
  border-radius: 16px;
  width: 100%;
  max-width: 500px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.2s ease-in-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 1.3rem;
    font-weight: 700;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

const EmailForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    font-size: 0.9rem;
    font-weight: 600;
    opacity: 0.8;
  }

  input, textarea {
    padding: 12px;
    border-radius: 8px;
    border: 1px solid rgba(128, 128, 128, 0.3);
    background: transparent;
    color: inherit;
    font-size: 1rem;
    font-family: inherit;
    outline: none;
    transition: border-color 0.2s;

    &:focus {
      border-color: ${(props) => props.theme.accentColor};
    }
  }

  textarea {
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.whiteColor};
  padding: 14px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: opacity 0.2s;
  margin-top: 8px;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;