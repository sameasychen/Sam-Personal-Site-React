import React from 'react';


// import GithubCalenderSec from "./GithubCalenderSec";
// import ReactGithubCalender from "./react-github-calendar";


function Resume() {
    return (
        <div className="Home mx-auto container-fluid">


            <div className="resumebanner">

                <div className="textsec">

                    <h2><i class="fas fa-file-alt" /> Resume</h2>

                </div>

            </div>

            {/* <div>
                <ReactGithubCalender name="sameasychen" />
            </div> */}


            <div className="resumesec mx-auto row my-3">
                <div className="col-md-8 pt-3">
                    <div className="px-3">
                        <p>Junior web developer with passion for responsive website design and a firm believer in the mobile-first approach. I have been learning web programming for almost 5 months, and being fascinated by web development. I am keen to gain more experience in this field. I am therefore currently looking for a job or an internship as a front-end developer.</p>

                        <h3>Certificate</h3>
                        <div className="row">
                            <div className="col-md-3">
                                Aug 2020-Now
                            </div>
                            <div className="col-md-9">
                                <p><span className="bold">React Developer</span> - Udacity Nanodegreee Program </p>
                                <p className="list"><i class="fas fa-angle-right" /> Learn React's component model, state management to build new React application.</p>
                                <p className="list"><i class="fas fa-angle-right" /> Implemented lifecycle hook and React Router into web application.</p>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                2020 Jun to 2020 Aug
                            </div>
                            <div className="col-md-9">
                                <p><span className="bold">HTML, CSS, and Javascript for Web Developers</span> - Johns Hopkins University</p>
                                <p className="list"><i class="fas fa-angle-right" /> Learn the basics of HTML5, CSS3, Javascript</p>
                                <p className="list"><i class="fas fa-angle-right" /> Build responsive static website with bootstrap</p>

                            </div>
                        </div>

                        <h3>Project</h3>
                        <div className="row">
                            <div className="col-md-3">
                            <span className="bold">Personal Page</span>
                            </div>
                            <div className="col-md-9">
                                <p className="list"><i class="fas fa-angle-right" />Built a Single-Page Application(SPA) from scratch with React</p>
                                <p className="list"><i class="fas fa-angle-right" />Developed web pages in Responsive Design using Bootstrap</p>
                                <p className="list"><i class="fas fa-angle-right" />Built contact form with form validation function</p>
                            </div>
                        </div>

                        <h3>Education</h3>
                        <div className="row">
                            <div className="col-md-3">
                                2015
                            </div>
                            <div className="col-md-9">
                                <p>Master of Applied Science</p>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                2012
                            </div>
                            <div className="col-md-9">
                                <p>Bachelor of Mechanical Engineering</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightsec col-md-4 pt-3">
                    <div className="px-3">
                        <div className="mt-3">
                            <h4>Personal Info</h4>
                            <hr></hr>
                            {/* <h6>Personal Page:</h6>
                            <p>https://sameasychen.github.io/</p> */}
                            <h6>Email:</h6>
                            <p>sam.hs.chen@gmail.com</p>
                            <h6>Github:</h6>
                            <p><a href="https://github.com/sameasychen">sameasychen</a></p>
                        </div>
                        <div className="mt-4">
                            <h4>Skills</h4>
                            <hr></hr>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>Javascript(JS)</p>
                            <p>DOM</p>
                            <p>Bootstrap</p>
                            <p>Version Control (e.g. Git)</p>
                            <p>React</p>
                            <p>Node.js NPM</p>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Resume;
