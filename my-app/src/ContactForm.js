import React from 'react';

const initialState={
    name: "",
    email: "",
    phone: "",
    message: ""
}

class ContactForm extends React.Component {

    constructor(){
        super()
        this.state={
            name: "",
            email: "",
            phone: "",
            message: "",
            nameError: "",
            emailError:"",
            phoneError:"",
            messageError:""
        }
        this.handleChange= this.handleChange.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
    }

    validate(){

        this.setState({nameError:"",emailError:"",messageError:""})


        if(!this.state.name){
            this.setState({nameError: "Required"});
            return false;
        }else if(!this.state.email){
            this.setState({emailError: "Required"});
            return false;
        }else if(this.state.email && !this.state.email.match(/.+@.+..+/g)){
            this.setState({emailError: "*Invalid email"});
            return false;
        }else if(!this.state.message){
            this.setState({messageError: "Required"});
            return false;
        }else if(this.state.message&&this.state.message.length<10){
            this.setState({messageError: "*Message too short, limit between 4~140 letters"})
            return false;
        }else if(this.state.message&&this.state.message.length>140){
            this.setState({messageError: "*Message too long, limit between 4~140 letters"})
            return false;
        }
        else{
        return true;
        }

    }

    handleSubmit(event){

        event.preventDefault();
        const isValid =this.validate();
        if(!isValid){
            console.log("validation wrong");
            this.setState(initialState)
        }else {
            console.log("validation correct");
            this.setState({nameError:"",emailError:"",messageError:""})
            
        }

    }



    handleChange(event) {
        const { name, value} = event.target

        this.setState({ [name]: value })

        // this.setState({nameError:"",emailError:"",messageError:""})
    

    }

    render(){
    return (
        <div className="ContactForm container my-5">
            {/* <h4 class="font-weight-bold my-5 text-center">CONTACT ME</h4> */}
            <div className="row container mx-auto">
                <div className="mb-4 col-sm-6">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                value={this.state.name}
                                className="inputArea"
                                placeholder="Name*"
                                onChange={this.handleChange}
                                />
                                <label className="validateNote">
                                {this.state.nameError}
                                </label>
                        </div>
                       
                    

                        <div className="form-row">

                            <div class="col form-group">
                                <input
                                    type="text"
                                    name="email"
                                    value={this.state.email}
                                    className="inputArea"
                                    placeholder="Email*"
                                    onChange={this.handleChange}
                                />
                                <label className="validateNote">
                                {this.state.emailError}
                                </label>
                            </div>
                            
                            <div class="col form-group">
                                <input
                                    type="text"
                                    name="phone"
                                    value={this.state.phone}
                                    className="inputArea"
                                    placeholder="Telephone"
                                    onChange={this.handleChange}
                                />
                                <label className="validateNote">
                                {this.state.phoneError}
                                </label>
                            </div>

                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                name="message"
                                value={this.state.message}
                                className="inputArea"
                                placeholder="Message*"
                                onChange={this.handleChange}
                            />
                            <label className="validateNote">
                            {this.state.messageError}
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="inputArea btn btn-info"
                        >Send</button>

                </form>
                </div>

                <div class="midLine"></div>
                <div className="col-sm-5">

                    <h5> Hanshi Chen</h5>
                    <br/>

                    <p class="lineheight">
                        <span class="font-weight-bold">Phone: </span>
                        123-456-7890
                    </p>


                    <br/>
                    <p class="lineheight">
                        <span class="font-weight-bold">Email: </span>
                        sam.hs.chen@gmail.com
                    </p>

                </div>


            </div>



        </div>
    );
    }
}

export default ContactForm;
