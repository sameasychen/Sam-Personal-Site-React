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
                        <p>Energetic web developer with 5 years of relevant <b>Canadian engineering experience</b>, seeking a position of front-end developer. I am fascinated by web development and keen to gain more experience in this field.</p>
                        <hr></hr>
                        <h3>Project</h3>
                        <div className="row mt-4">
                            <div className="col-md-3">
                                <span className="bold">Tweeter Clone</span>
                                <div><a href="https://github.com/sameasychen/Project-Tweeter_Clone">GitHub Repo</a></div>
                                <div><a href="https://serene-ardinghelli-59ea97.netlify.app/">Live Demo</a></div>
                            </div>
                            <div className="col-md-9">
                                <p className="list"><i class="fas fa-angle-right" /> Created a Tweeter Clone project with tweet timeline, and function of likes and reply</p>
                                <p className="list"><i class="fas fa-angle-right" /> Use React-Redux to share same state through different views</p>
                                <p className="list"><i class="fas fa-angle-right" /> Improve web response time by 80% with optimistic update to update UI when dealing with asynchronous requests</p>
                                <p className="list"><i class="fas fa-angle-right" /> Skills used: Redux, React.js, Async Request, JavaScript, HTML5, JSON</p>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-3">
                                <span className="bold">My Reads</span>
                                <div><a href="https://github.com/sameasychen/MyReads-Projects">GitHub Repo</a></div>
                                <div><a href="https://dazzling-turing-b4a8de.netlify.app/">Live Demo</a></div>
                            </div>
                            <div className="col-md-9">
                                <p className="list"><i class="fas fa-angle-right" /> Created virtual bookshelves to store books and organize books accordingly</p>
                                <p className="list"><i class="fas fa-angle-right" /> Searched for new books using a Books API to extract JSON from database and add new book on your own shelf.</p>
                                <p className="list"><i class="fas fa-angle-right" /> Skills used: React.js, React-Router, JavaScript, HTML5, CSS3, API Request</p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-3">
                                <span className="bold">Mockup to Personal Page</span>
                                <div><a href="https://github.com/sameasychen/Sam-Personal-Site-React">GitHub Repo</a></div>
                                <div><a href="./">Live Demo</a></div>
                            </div>
                            <div className="col-md-9">
                                <p className="list"><i class="fas fa-angle-right" /> Used React-Router to turn web pages into Single Page Application</p>
                                <p className="list"><i class="fas fa-angle-right" /> Used React Router to turn web pages into Single Page Application</p>
                                <p className="list"><i class="fas fa-angle-right" /> Developed web pages in Responsive Design using Bootstrap</p>
                                <p className="list"><i class="fas fa-angle-right" /> Skills used: React.js, React-Router, JavaScript, HTML5, CSS3, JSON</p>
                            </div>
                        </div>
                        <hr></hr>
                        <h3>Certificate</h3>
                        <div className="row mt-3">
                            {/* <div className="col-md-1">
                                
                            </div> */}
                            <div className="col-md-11">
                                <p><span className="bold">React Developer</span> - Udacity Nanodegreee Program </p>
                            </div>
                        </div>
                        <div className="row">
                            {/* <div className="col-md-1">
                                
                            </div> */}
                            <div className="col-md-11">
                                <p><span className="bold">HTML, CSS, and Javascript for Web Developers</span> - Coursera Johns Hopkins University</p>
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
                            <h6>Languages:</h6>
                            <p>Javascript</p>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>SQL</p>
                            <p>Java</p>
                            <h6>Frameworks:</h6>
                            <p>Bootstrap</p>
                            <p>React</p>
                            <p>Redux</p>
                            <p>Node.js / NPM</p>
                            <h6>Other:</h6>
                            <p>Git/Github</p>
                            <p>Jira</p>
                            <p>JSON</p>
                            <p>Responsive Design</p>
                            <p>SPA</p>
                            <p>Promise</p>
                            <p>Prototype</p>
                            <p>ECMAScript6</p>
                            <p>Docker</p>
                            <p>Linux</p>
                            <p>Photoshop</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Resume;
