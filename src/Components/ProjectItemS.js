import React from 'react';
import { Link } from 'react-router-dom';


const ProjectItemS = props => {

    const projectImgs = props.project.projectImg;

    return (
        <div className="menuItem col-sm-4 col-6">

            <div className="projectItem inline-block mt=5">
                <div className="dishPic">
                    <img
                        className="picImg rounded mx-auto d-block"
                        src={projectImgs}
                        alt={projectImgs}
                        height='150' />
                </div>

                <h5 className="dishName text-dark text-center mt-2">{props.project.projectName}</h5>

                <table class="w-100">
                    <tbody>
                        <tr>
                            <td className="urlTable text-center p-2">
                                <a
                                    className="urlLink text-light"
                                    href={props.project.projectLiveUrl}>
                                    LiveDemo
                                </a>
                            </td>
                            
                        </tr>
                    </tbody>
                </table>
            </div >
        </div>
    );
}

export default ProjectItemS;
