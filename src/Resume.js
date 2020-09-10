import React from 'react';

function Resume() {
    return (
        <div className="Home mx-auto container-fluid">


            <div className="resumebanner">

                <div className="textsec">

                    <h2><i class="fas fa-file-alt" /> Resume</h2>

                </div>

            </div>

            <div className="resumesec mx-auto row my-3">
                <div className="col-md-8 pt-3">
                    <div className="px-3">
                        <p>Energetic professional with extensive web development skills seeking a position of Junior front-end developer. Even with 5 years of past experience as a mechanical engineer, I decided to learning web development full time for almost 5 months to become a programmer. I am fascinated by web development and keen to gain more experience in this field.</p>
                        <hr></hr>
                        <h3>Project</h3>
                        <div className="row mt-4">
                            <div className="col-md-3">
                                <span className="bold">My Reads</span>
                                <div><a href="https://github.com/sameasychen/MyReads-Projects">GitHub Repo</a></div>
                                <div><a href="https://dazzling-turing-b4a8de.netlify.app/">Live Demo</a></div>
                            </div>
                            <div className="col-md-9">
                                <p className="list"><i class="fas fa-angle-right" />Created virtual bookshelves to store books and organize books accordingly</p>
                                <p className="list"><i class="fas fa-angle-right" />Searched for new books using a Books API from database and add new book on your own shelf</p>
                                <p className="list"><i class="fas fa-angle-right" />Used React setState to build functionality moving books between shelves </p>
                                <p className="list"><i class="fas fa-angle-right" />API call using AJAX and JSON to fetch data from database</p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-3">
                                <span className="bold">Mockup to Personal Page</span>
                                <div><a href="https://github.com/sameasychen/Sam-Personal-Site-React">GitHub Repo</a></div>
                                <div><a href="./">Live Demo</a></div>
                            </div>
                            <div className="col-md-9">
                                <p className="list"><i class="fas fa-angle-right" />Revamped UI and built web pages using React</p>
                                <p className="list"><i class="fas fa-angle-right" />Used React Router to turn web pages into Single Page Application</p>
                                <p className="list"><i class="fas fa-angle-right" />Developed web pages in Responsive Design using Bootstrap</p>
                                <p className="list"><i class="fas fa-angle-right" />Built contact form with form validation using Javascript</p>
                            </div>
                        </div>
                        <hr></hr>
                        <h3>Certificate</h3>
                        <div className="row mt-3">
                            <div className="col-md-3">
                                Aug2020-Now
                            </div>
                            <div className="col-md-9">
                                <p><span className="bold">React Developer</span> - Udacity Nanodegreee Program </p>
                                <p className="list"><i class="fas fa-angle-right" /> Create reusable, focused Class components</p>
                                <p className="list"><i class="fas fa-angle-right" /> Implemented lifecycle hook and React Router into web application.</p>
                                <p className="list"><i class="fas fa-angle-right" /> Use Redux to manage complicated state to build enterprise level apps.</p>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                2020Jun - 2020Aug
                            </div>
                            <div className="col-md-9">
                                <p><span className="bold">HTML, CSS, and Javascript for Web Developers</span> - Coursera Johns Hopkins University</p>
                                <p className="list"><i class="fas fa-angle-right" /> Learn the basics of HTML5, CSS3, Javascript</p>
                                <p className="list"><i class="fas fa-angle-right" /> Build responsive static website with bootstrap</p>
                            </div>
                        </div>


                        <hr></hr>
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
                            <h6>Email:</h6>
                            <p>sam.hs.chen@gmail.com</p>
                            <h6>Github:</h6>
                            <p><a href="https://github.com/sameasychen">sameasychen</a></p>
                            <h6>Linkedin:</h6>
                            <p><a href="https://www.linkedin.com/in/hanshi-chen-6684636a/">Hanshi Chen</a></p>
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
                            <p>Photoshop</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Resume;
