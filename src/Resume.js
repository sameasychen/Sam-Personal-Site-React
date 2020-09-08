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
                        <p>Junior front end developer with passion for web
                        development. Even with 5 years of experience as a mechanical engineer , I decided to learning web development full time to become a programmer I am keen to gain more experience in this field. I am therefore currently looking for a job or an internship as a front end developer.</p>

                        <h3>Project</h3>
                        <div className="row mt-4">
                            <div className="col-md-3">
                                <span className="bold">My Reads</span>
                            </div>
                            <div className="col-md-9">
                                <p className="list"><i class="fas fa-angle-right" />Create virtual bookshelves to store books and track the shelf state of each book</p>
                                <p className="list"><i class="fas fa-angle-right" />Search for new books from a Books API to add into your own shelf as a react component</p>
                                <p className="list"><i class="fas fa-angle-right" />Use React s setState to build functionality to move books between shelves</p>
                                <p className="list"><i class="fas fa-angle-right" />Use React Router to link pages for easy navigation</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <span className="bold">Personal Page</span>
                            </div>
                            <div className="col-md-9">
                                <p className="list"><i class="fas fa-angle-right" />Revamped UI and built web pages using React</p>
                                <p className="list"><i class="fas fa-angle-right" />Used React Router to turn web pages into Single Page Application</p>
                                <p className="list"><i class="fas fa-angle-right" />Develo p ed web pages in Responsive Design using Bootstrap</p>
                                <p className="list"><i class="fas fa-angle-right" />Built contact form with form validation using Javascript</p>
                            </div>
                        </div>

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
                                2020Jun to 2020Aug
                            </div>
                            <div className="col-md-9">
                                <p><span className="bold">HTML, CSS, and Javascript for Web Developers</span> - Johns Hopkins University</p>
                                <p className="list"><i class="fas fa-angle-right" /> Learn the basics of HTML5, CSS3, Javascript</p>
                                <p className="list"><i class="fas fa-angle-right" /> Build responsive static website with bootstrap</p>
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
                            <h6>Email:</h6>
                            <p>sam.hs.chen@gmail.com</p>
                            <h6>Location:</h6>
                            <p>Ontario, Canada</p>
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
                            <p>Photoshop</p>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Resume;
