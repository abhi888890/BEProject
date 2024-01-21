import React from 'react'
import Navbar from '../component/Navbar'
import '../css/Home.css';
import UdemyLogo from '../Images/Udemy-Logo.png'
import photo from '../Images/event-1.jpg'
import { Outlet } from 'react-router-dom';
import Layout from './Layout';

export default function Home() {
  return (
    <Layout >
    <div className="cont">
        
      <div className="about">
        <div className="photo">
            <img src={photo} alt="" style={{width:"100%" , height:"100%"}}/>
        </div>
        <div className="myinfo">
              <div className="data">
                  <div className="title">
                  Comprehensive Course Selection
                  </div>
                  <div className="info">
                  We offers a wide range of courses from various top learning platform ensuring that learners have access to diverse educational opportunities.
                  </div>
              </div>
              <div className="data">
                  <div className="title">
                  Discover, Learn, Grow.
                  </div>
                  <div className="info">
                  We offers personalized course recommendations, cross-platform search, and a vibrant learning community. Start your learning journey today.
                  </div>
              </div>
              <div className="data">
                  <div className="title">
                  Personalized Learning Experience
                  </div>
                  <div className="info">
                  Our platform provides personalized course recommendations based on individual preferences enabling learners to tailor their educational journey.
                  </div>
              </div>
        </div>
      </div>
    
      <div className="providers">
        <div className="course">
          <div className="logo">
              <img src={UdemyLogo} alt="" width={"70px"}/>
          </div>
          <div className="info">
            <div className="title" >
              <a href="https://www.udemy.com/" target='blank' style={{textDecoration:"none"}}>Udemy</a>
            </div>
            <div className="count">
              13000 course
            </div>
          </div>
        </div>

        <div className="course">
          <div className="logo">
              <img src={UdemyLogo} alt="" width={"70px"}/>
          </div>
          <div className="info">
            <div className="title" >
              <a href="https://www.udemy.com/" target='blank' style={{textDecoration:"none"}}>Udemy</a>
            </div>
            <div className="count">
              13000 course
            </div>
          </div>
        </div>
        <div className="course">
          <div className="logo">
              <img src={UdemyLogo} alt="" width={"70px"}/>
          </div>
          <div className="info">
            <div className="title" >
              <a href="https://www.udemy.com/" target='blank' style={{textDecoration:"none"}}>Udemy</a>
            </div>
            <div className="count">
              13000 course
            </div>
          </div>
        </div>
        <div className="course">
          <div className="logo">
              <img src={UdemyLogo} alt="" width={"70px"}/>
          </div>
          <div className="info">
            <div className="title" >
              <a href="https://www.udemy.com/" target='blank' style={{textDecoration:"none"}}>Udemy</a>
            </div>
            <div className="count">
              13000 course
            </div>
          </div>
        </div>
        <div className="course">
          <div className="logo">
              <img src={UdemyLogo} alt="" width={"70px"}/>
          </div>
          <div className="info">
            <div className="title" >
              <a href="https://www.udemy.com/" target='blank' style={{textDecoration:"none"}}>Udemy</a>
            </div>
            <div className="count">
              13000 course
            </div>
          </div>
        </div>
        <div className="course">
          <div className="logo">
              <img src={UdemyLogo} alt="" width={"70px"}/>
          </div>
          <div className="info">
            <div className="title" >
              <a href="https://www.udemy.com/" target='blank' style={{textDecoration:"none"}}>Udemy</a>
            </div>
            <div className="count">
              13000 course
            </div>
          </div>
        </div>
        
        
      </div>
     
    </div>
    </Layout>
  )
}
