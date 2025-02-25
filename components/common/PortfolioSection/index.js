import React from 'react'
import PortfolioProjectCategory from './PortfolioProjectCategory'
import { Tabs } from 'antd'
import PortfolioProjectItem from './PortfolioProjectItem'
import Fade from 'react-reveal/Fade'
import { Carousel } from 'react-bootstrap'
import IFC from '../IFC'

const { TabPane } = Tabs

const PortfolioSection = ({ projects = [] }) => {

  const renderProjects = (category) => {
    const categoryProjects = projects.filter(p => p.frontmatter.category === category);
    return (
      <div>
        <Carousel variant="dark" interval={10000}>
          {categoryProjects.map(project => {
            const { title, description, skills, images, videos } = project.frontmatter
            return (
              <Carousel.Item key={title}>
                <PortfolioProjectItem
                  title={title}
                  description={description}
                  skills={skills}
                  images={images}
                  videos={videos}
                />
              </Carousel.Item>
            )
          })}
        </Carousel>
      </div>
    )
  }

  const renderIFCViewer = () => {
    return <IFC />
  }

  return (
    <div className='portfolio-section-component'>
      <Fade>
        <h1>Portfolio</h1>
        <p>A selection of cool stuff I have worked on.</p>
        <br />
        <Tabs defaultActiveKey="1" type="card">
          <TabPane tab="Data Science Projects" key="1">
            <PortfolioProjectCategory
              title="Data Science Projects"
              description="Top data science projects I've worked on"
            >
              {renderProjects("CATEGORTY_THREE")}
            </PortfolioProjectCategory>
          </TabPane>
          <TabPane tab="Ifc development" key="2">
            <PortfolioProjectCategory
              title="Ifc development"
              description="Ifc.js is an Opensource Javascript library to load, display and edit ifc models in the browser. The Ifc.js parsing engine is based on Webassembly and C++ and is specifically designed to read data from large files as fast as a desktop application"
            >
              {renderIFCViewer()}
            </PortfolioProjectCategory>
          </TabPane>
          <TabPane tab="3D BIM Programming" key="3">
            <PortfolioProjectCategory
              title="3D BIM Programming"
              description="3D BIM development projects I have worked on"
            >
              {renderProjects("CATEGORTY_ONE")}
            </PortfolioProjectCategory>
          </TabPane>
        </Tabs>
      </Fade>
    </div>
  )
}

export default PortfolioSection