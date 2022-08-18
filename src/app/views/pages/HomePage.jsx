import React, { Component } from "react";
import { SimpleCard } from "@gull";
import PostForm from '../components/PostForm';
import StartupPostCard from '../components/StartupPostCard';
import UserPostCard from '../components/UserPostCard';
import StartupSideCard from '../components/StartupSideCard';
import UniversityCard from '../components/UniversityCard';
import ScholarshipsSmallCard from '../components/ScholarshipsSmallCard';

import {
  Accordion,
  Card,
  AccordionToggle,
  AccordionCollapse
} from "react-bootstrap";
import { classList } from "@utils";

class HomePage extends Component {
  state = {
    openItem: "",
  };

  setOpenItem = name => {
    if (name === this.state.openItem) {
      this.setState({ openItem: "" });
    } else this.setState({ openItem: name });
  };

  render() {
    let { openItem } = this.state;

    return (
      <>
        <div id="left">
            <section className="dashboard-posts m-4 px-0">
              {/* <div className="row justify-content-center" > */}
                {/* <div className="col-lg-7 col-md-8" >
                </div> */}
                  <PostForm />
                  <StartupPostCard name='David' industry='Fintech' className="mt-4" />
                  <UserPostCard name='Rayen' profession='Developer' className="mt-4" />

                  <StartupPostCard name='David' industry='Fintech' className="mt-4" />
                  <UserPostCard name='Rayen' profession='Developer' className="mt-4" />

               
            </section>
        </div>
        <div id="right">
          <section className="dashboard-posts m-4 px-0">
            <div className="mb-3">
                <h4 className="text-muted">Investable Startups/Projects</h4>
                
                <StartupSideCard 
                  CompanyName='Afroline' 
                  industry='Shipping' 
                  img="/assets/images/faces/4.jpg"
                  />
                <StartupSideCard 
                  CompanyName='Rythminno'
                  industry='Shipping' 
                  img="/assets/images/faces/9.jpg"
                />
              
                <h4 className="mt-4 mb-4 text-muted">Open Scholarships</h4>
      
                <ScholarshipsSmallCard 
                  universityName='Business administration scholarship' 
                  scholarType='Zhejiang A & F University' 
                  img="/assets/images/faces/10.jpg"
                />
                <ScholarshipsSmallCard 
                  universityName='Business administration scholarship' 
                  scholarType='Zhejiang A & F University' 
                  img="/assets/images/faces/5.jpg"
                />

                <h4 className="mb-4 mt-4 text-muted">Top universities</h4>
                
                <UniversityCard 
                  name='Zhejiang A & F University' 
                  address='China, Beijing, Haidian District,' 
                  img="/assets/images/faces/3.jpg"
                />
                <UniversityCard 
                  name='Zhejiang A & F University' 
                  address='China, Beijing, Haidian District,' 
                  img="/assets/images/faces/3.jpg"
                />
                <UniversityCard 
                  name='Zhejiang A & F University' 
                  address='China, Beijing, Haidian District,' 
                  img="/assets/images/faces/3.jpg"
                />
                

              </div>
          </section>
        </div>


      </>
    );
  }
}

export default HomePage;
