import React from 'react';
import ProjectItem from './ProjectItem';
import projects from '../Projects';
import sprojects from '../sProjects';



const Portfolio = props => {


    return (
        <div className="Home mx-auto container-fluid">


            <div className="resumebanner">

                <div className="textsec">

                    <h2><i class="fas fa-file-alt" /> Portfolio</h2>

                </div>

            </div>



            <h4 className="text-center text-dark my-3">Websites</h4>


            <div className="Content row mx-auto contentwidth">
                <div className="row col-md-8 mx-auto">

                    {projects.map(data => <ProjectItem key={data.projectID} project={data} />)}

                </div>

            </div>

            <h4 className="text-center text-dark my-3">Practice Projects</h4>

            <div className="row col-md-8 mx-auto">

                {sprojects.map(data => <ProjectItem key={data.projectID} project={data} />)}

            </div>


        </div>
    );
}

export default Portfolio;
