import React from 'react'
import {Layout, PageWrapper } from '../components/Layout/layout'
import styled from 'styled-components';
import Link from 'next/link' 
import {Date } from '../components/Layout/icons';
import FooterLink from '../components/Layout/footer-link';

const AboutStyle = {
  Header: styled.header`
    
    .intro__text{
      font-size: 54px;
      font-weight: 900; 
      margin: 4rem 0rem 1.5rem ;
      position: relative;
    }
    p{
      font-size: 15px;
      margin-top: .6rem;
      line-height: 2;
      font-weight: 400;
      color: var(--article-color) !important;
    }
    input, textarea{
        background: transparent;
        color: var(--cw) !important;
        margin-bottom: 2rem;
        box-shadow: none !important;
        resize: none;
        padding: 24px 21px !important;
        border-color: var(--border-color) !important;
        &:focus{
          background-color: var(--bg);
        }
    }
    button{
      font-size: 16px;
      background: var(--border-color);
      border: none;
      color:var(--cw);
      border-radius: 5px;
      padding: 17px 40px;
      margin-bottom:3rem;
    }
    form {
        width: 60%;
    }
    @media( max-width : 585px ) {
        form {
            width: 100% !important;
        }
    }
    @media( max-width : 989px ) {
        form {
            width: 100% !important;
        }
    }
    @media( max-width : 220px ){
        form {
            width: 100% !important;
        }
    }
  ` ,
  SkillSection: styled.div`
    
  `
}
class About extends React.Component {
  constructor(){
    super();
  }
  render(){    
    return (
      <Layout title="Contact">
        <AboutStyle.Header>
          <PageWrapper>
               <h1 className="intro__text">Contact.</h1> 
               <p>Get in touch or shoot me an email directly on <b>hellocodewonders@gmail.com</b></p><br/>
                <form method="POST" action="https://formspree.io/adenekanwonderful41@gmail.com">
                    <div className="fields">
                        <div className="field half">
                            <input type="text" name="name" id="name" className="form-control" placeholder="Name" />
                        </div>
                        <div className="field half">
                            <input type="text" name="email" id="email" className="form-control" placeholder="Email" />
                        </div>
                        <div className="field">
                            <textarea name="message" id="message" rows="5" className="form-control" placeholder="Message"></textarea>
                        </div>
                    </div>
                    <button className="btn btn-default" type="submit" aria-label="Send Message">Send Message</button>
                </form>
          </PageWrapper>
        </AboutStyle.Header>
        <AboutStyle.SkillSection>
          <PageWrapper>
            <FooterLink goto="/" className="mt-3 mb-5">Go Back Home</FooterLink>
            <br/>
          </PageWrapper>
        </AboutStyle.SkillSection>
      </Layout> 
    )
  }
}

export default About
  