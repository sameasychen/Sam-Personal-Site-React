import React from 'react';
import { Link } from 'react-router-dom';


const ProjectItem = props => {

    const projectImgs = props.project.projectImg;

    return (
        <div className="menuItem col-sm-4 col-6">

            {/* {props.project.projectID}+{props.project.projectName} */}

            <div className="projectItem inline-block mt=5">
                <div className="dishPic">
                    <img
                        className="picImg rounded mx-auto d-block"
                        src={projectImgs}
                        alt={projectImgs}
                        height='150' />
                </div>

                <div className="dishName text-center font-weight-bold">{props.project.projectName}</div>

                <table class="w-100">
                    <tbody>
                        <tr>
                            <td className="text-center">
                                <a
                                    className="text-center"
                                    href={props.project.projectLiveUrl}>
                                    LiveDemo
                                </a>
                            </td>
                            <td >
                                <a
                                    className="text-center"
                                    href={props.project.projectCodeUrl}>
                                    GitHub Repo
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div >
        </div>
    );
}

export default ProjectItem;
