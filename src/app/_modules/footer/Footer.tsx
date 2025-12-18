'use client';

import * as S from './styled';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LogoWrap from '../common/logo-wrap/LogoWrap';
import Button from '../common/button/Button';
import { useIsMobile } from '../common/hooks/useIsMobile';
import { useEffect, useRef, useState } from 'react';
import { BREAKPOINT, BREAKPOINT_SM } from '@/app/_constant/breakpoint';
import emailjs from '@emailjs/browser';
import Input from '../common/form/input/Input';
import Textarea from '../common/form/textarea/Textarea';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Footer = () => {
  const { isMobile, isLoaded } = useIsMobile(BREAKPOINT_SM);
  const duration = 1;
  const ease = 'power1.inOut';
  const form = useRef<HTMLFormElement>(null);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (emailValue: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValue.trim() === '') {
      setEmailError('');
      return false;
    }
    if (!emailRegex.test(emailValue)) {
      setEmailError('올바른 이메일 형식을 입력해주세요.');
      return false;
    }
    setEmailError('');
    return true;
  };

  const isFormValid = email.trim() !== '' && message.trim() !== '' && emailError === '';

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    const timeInput = form.current.querySelector<HTMLInputElement>('input[name="time"]');
    if (timeInput) {
      timeInput.value = formattedDate;
    }

    emailjs
      .sendForm('service_rqo2q1z', 'template_c7n4s1a', form.current, {
        publicKey: 'l6jngDQVjKNye4zE9',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('📧 이메일이 성공적으로 전송되었습니다!');
          if (form.current) {
            form.current.reset();
          }
          setEmail('');
          setMessage('');
          setEmailError('');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && isLoaded) {
      ScrollTrigger.saveStyles('.logoWrap2, .logoWrap2 *');
    }
  }, [isLoaded]);

  useGSAP(() => {
    if (!isLoaded) return;

    const mm = gsap.matchMedia();

    mm.add(`(min-width: ${BREAKPOINT + 1}px)`, () => {
      gsap
        .timeline({
          duration: 2,
          scrollTrigger: {
            trigger: '.footer',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        })
        .to(
          '.logoWrap2',
          {
            y: -50,
            scale: 1.1,
            duration,
            ease,
          },
          0,
        )
        .to(
          '.logoWrap2 #f',
          {
            x: -30,
            y: -50,
            rotation: 25,
            duration,
            ease,
          },
          0,
        )
        .to(
          '.logoWrap2 #e',
          {
            x: -30,
            y: -30,
            rotation: -10,
            duration,
            ease,
          },
          0,
        )
        .to(
          '.logoWrap2 #h',
          {
            x: 20,
            y: -80,
            rotation: 5,
            duration,
            ease,
          },
          0,
        )
        .to(
          '.logoWrap2 #j',
          {
            x: -10,
            y: -60,
            rotation: -25,
            duration,
            ease,
          },
          0,
        );
    });

    return () => mm.revert();
  }, [isLoaded]);

  return (
    <S.Footer className='footer'>
      <S.FooterInner>
        <S.FooterText>
          <S.FooterContentWrap>
            <S.FooterContentRight>
              <S.StyledTitle $isCenter={true} $color='black'>
                CONTACT
              </S.StyledTitle>
              <S.FooterContentComment>
                Thank you for <br /> visiting my portfolio! <br />
                💛
              </S.FooterContentComment>
            </S.FooterContentRight>
            <S.FooterForm ref={form} onSubmit={sendEmail}>
              <Input label='Time' type='hidden' name='time' placeholder='Time' />
              <Input
                label='Email'
                type='email'
                name='user_email'
                placeholder='이메일'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail(e.target.value);
                }}
              />
              <Textarea
                label='Message'
                name='message'
                placeholder='궁금하신 사항은 편하게 연락주세요 :)'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <S.ButtonWrapper>
                <Button text='Send' type='submit' size='md' disabled={!isFormValid} />
                {emailError && <S.ErrorMessage>{emailError}</S.ErrorMessage>}
              </S.ButtonWrapper>
            </S.FooterForm>
          </S.FooterContentWrap>
          {/* <S.FooterTextWrapList>
            <S.FooterTextWrap>
              <S.FooterInnerTextTitle>Education</S.FooterInnerTextTitle>
              <S.FooterInnerTextDesc>
                홍익대학교 커뮤니케이션디자인 전공 {!isMobile && '(2016.02 - 2021.03)'}
              </S.FooterInnerTextDesc>
              <S.FooterInnerTextDesc>
                웹퍼블리셔 프론트엔드 개발 디지털실무 양성과정 수료{' '}
                {!isMobile && '(2021.03 - 2021.11)'}
              </S.FooterInnerTextDesc>
              {isMobile && <S.FooterInnerTextDesc>2016 - 2021</S.FooterInnerTextDesc>}
            </S.FooterTextWrap>
            <S.FooterTextWrap>
              <S.FooterInnerTextTitle>Contact</S.FooterInnerTextTitle>
              <S.FooterInnerTextDesc>Phone: 010-9275-5637</S.FooterInnerTextDesc>
              <S.FooterInnerTextDesc>Email: konnimey@naver.com</S.FooterInnerTextDesc>
            </S.FooterTextWrap>
          </S.FooterTextWrapList> */}
        </S.FooterText>
      </S.FooterInner>
      {!isMobile && <LogoWrap className='logoWrap2' isVisual={false} />}
      <S.FooterBottomText>
        <p>Portfolio - by Hye Jin</p>
        {!isMobile && <p>Copyright 2025.</p>}
        {!isMobile && <p>Created: 2025.08.01</p>}
      </S.FooterBottomText>
    </S.Footer>
  );
};

export default Footer;
