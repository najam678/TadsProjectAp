import React from 'react'
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import './admin.css';
import Grid1 from "./Grid1.jsx"
// import timetable from './timetable.png'


class Student extends React.Component{
    constructor(props){
        super(props);
        this.state={};
        this.state.enroll=null;
        this.state.password=null;
        this.state.isAuthenticated=false;
        this.state.decoded=null;
    }
    //***********************NEWLY ADDED CODE STARTS *************************//
  

    //*************************NEWLY ADDED CODE ENDS ***************************//

    render(){
        //***********************NEWLY ADDED CODE STARTS *************************/
        return(
            <React.Fragment>
                <div id="navbar">
                <p>TADS</p>
                   
                </div>
                <Router>
                <div id="menu">
                    <ul>
                        <Link to="/student" className="Link"><li ><i className="fas fa-th fa-lg"></i>Dashboard</li></Link>
                        <Link to="/student/attendance" className="Link"><li><i className="fas fa-user-graduate fa-lg"></i>Attendance</li></Link>
                        <Link to="/student/marks" className="Link"><li><i className="fas fa-chalkboard-teacher fa-lg"></i>Marks</li></Link>
                        {/* <li><i className="fas fa-building fa-lg"></i>Departments</li> */}
                        <Link to="/student/course" className="Link"><li><i className="fas fa-book fa-lg"></i>Courses</li></Link>
                        <Link to="/student/transcript" className="Link"><li><i className="fas fa-school fa-lg"></i>Transcript</li></Link>
                        
                        <Link to="/student/buses" className="Link"><li><i className="fas fa-bell fa-lg"></i>Bus-Shedule</li></Link>
                        <Link to="/student/timetable" className="Link"><li><i className="far fa-clock fa-lg"></i>Timetable</li></Link>
                        <Link to="/student/payment" className="Link"><li><i className="fas fa-credit-card fa-lg"></i>Payment</li></Link>
                        <Link to="/student/messages" className="Link"><li><i className="fas fa-comment-alt fa-lg"></i>Messages</li></Link>
                        
                        
                        <Link to="/"><button onClick={(e)=>this.logout()}>Logout</button></Link>
                    </ul>
                    
                </div>
                </Router>
              
                <div id="right">
                <Router>
                    <Route path="/student" exact render={(e)=><Dashboard news={this.props.news}></Dashboard>}></Route>
                    <Route path="/student/attendance"  render={(e)=><Attendance attendance={this.props.attendance}></Attendance>}></Route>
                    <Route path="/student/marks"  render={(e)=><Marks marks={this.props.marks}></Marks>}></Route>
                    <Route path="/student/course" render={(e)=><Course course={this.props.course} EnrollInCourse={()=>this.props.EnrollInCourse}></Course>}></Route>
                    <Route path="/student/buses"  render={(e)=><BusShedule buses={this.props.buses}></BusShedule>}></Route>
                    <Route path="/student/timetable"  render={(e)=><Timetable branch={this.props.branch}></Timetable>}></Route>
                    <Route path="/student/payment"  render={(e)=><Payment branch={this.props.payment}></Payment>}></Route>
                    <Route path="/student/messages"  render={(e)=><Messages branch={this.props.messages}></Messages>}></Route>
                    <Route path="/student/transcript"  render={(e)=><Transcript branch={this.props.transcript}></Transcript>}></Route>
                    </Router>
                </div>
                
            </React.Fragment>
        )} 
    }


function Dashboard(props){
  
  
    return (
        <React.Fragment>
        <div className="dashboard-head">
            <h2>Dashboard</h2>
        </div>
        <div className="dashboard-head1">
            <h2>University Information</h2>
        </div>
        <div className="dashboard">
            <div className="std-info">
                <table className="std-infoTable">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Roll No.</th>
                            
                            <th>Degree</th>
                            <th>Batch</th>
                            <th>Campus</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                            <td>{"decoded.name"}</td>
                            <td>{"decoded.roll no."}</td>
                            
                            <td>{"decoded.degree"}</td>
                            <td>{"decoded.batch"}</td>
                            <td>{"decoded.campus"}</td>
                    </tbody>
                </table>
            </div>
            <br/>
            
        </div>



       
        <div className="dashboard-head1">
            <h2>Personal Infromation</h2>
        </div>
        <div className="dashboard">
            <div className="std-info">
                <table className="std-infoTable">
                    <thead>
                        <tr>
                           
                           
                            <th>DOB</th>
                            <th>CNIC</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Moblile No</th>
                        </tr>
                    </thead>
                    <tbody>
                            
                            <td>{"decoded.name"}</td>
                            <td>{"DOB"}</td>
                            <td>{"decoded.email"}</td>
                            <td>{"decoded.department"}</td>
                            <td>{"decoded.branch"}</td>
                    </tbody>
                </table>
            </div>



            <br/>
            
        </div>

        <div className="dashboard-head1">
            <h2>Contact Infromation</h2>
        </div>
        <div className="dashboard">
            <div className="std-info">
                <table className="std-infoTable">
                    <thead>
                        <tr>
                           
                           
                            <th>Address</th>
                            <th>Home Phone</th>
                            <th>City</th>
                            <th>Postal Code</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                            
                            <td>{"decoded.name"}</td>
                            <td>{"DOB"}</td>
                            <td>{"decoded.email"}</td>
                            <td>{"decoded.department"}</td>
                            
                    </tbody>
                </table>
            </div>


            
            <br/>
            
        </div>

        <div className="dashboard-head1">
            <h2>Family Infromation</h2>
        </div>
        <div className="dashboard">
            <div className="std-info">
                <table className="std-infoTable">
                    <thead>
                        <tr>
                           
                           
                            <th>Relation</th>
                            <th>Name</th>
                            <th>Phone No.</th>
                            <th>Email</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                            
                            <td>{"decoded.name"}</td>
                            <td>{"DOB"}</td>
                            <td>{"decoded.email"}</td>
                            <td>{"decoded.department"}</td>
                            
                    </tbody>
                </table>
            </div>


            
            <br/>
            
        </div>
        </React.Fragment>
    )
}

function Attendance(props){
  
  
    return (
        <React.Fragment>
            <div className="dashboard-head">
            <h2>Attendence</h2>
        </div>
         <div className="dashboard-head1">
            <h2>CS203 APPLIED PHYSICS</h2>
        </div>
        <div className="dashboard">
            <div className="std-info">
                <table className="table">
                    <thead>
                        <tr>
                           
                           
                            <th>May 1, 2021</th>
                            <th>May 3, 2021</th>
                            <th>May 8, 2021</th>
                            <th>May 10,2021</th>
                            <th>May 15,2021</th>
                            <th>May 17,2021</th>
                            <th>May 24,2021</th>
                            <th>May 26,2021</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                            
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"A"}</td>
                            <td>{"A"}</td>
                            
                    </tbody>
                </table>
            </div>

            


            
            <br/>
            
        </div>

        <div className="dashboard">
            <div className="std-info">
                <table className="table">
                    <thead>
                        <tr>
                           
                           
                            <th>June 1, 2021</th>
                            <th>June 3, 2021</th>
                            <th>June 8, 2021</th>
                            <th>June 10,2021</th>
                            <th>June 15,2021</th>
                            <th>June 17,2021</th>
                            <th>June 24,2021</th>
                            <th>June 26,2021</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                            
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"A"}</td>
                            <td>{"A"}</td>
                            
                    </tbody>
                </table>
            </div>

            


            
            <br/>
            
        </div>

        <div className="dashboard-head1">
            <h2>CS240 CALCULUS</h2>
        </div>
        <div className="dashboard">
            <div className="std-info">
                <table className="table">
                    <thead>
                        <tr>
                           
                           
                            <th>May 1, 2021</th>
                            <th>May 3, 2021</th>
                            <th>May 8, 2021</th>
                            <th>May 10,2021</th>
                            <th>May 15,2021</th>
                            <th>May 17,2021</th>
                            <th>May 24,2021</th>
                            <th>May 26,2021</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                            
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"A"}</td>
                            <td>{"A"}</td>
                            
                    </tbody>
                </table>
            </div>

            


            
            <br/>
            
        </div>

        <div className="dashboard">
            <div className="std-info">
                <table className="table">
                    <thead>
                        <tr>
                           
                           
                            <th>June 1, 2021</th>
                            <th>June 3, 2021</th>
                            <th>June 8, 2021</th>
                            <th>June 10,2021</th>
                            <th>June 15,2021</th>
                            <th>June 17,2021</th>
                            <th>June 24,2021</th>
                            <th>June 26,2021</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                            
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"A"}</td>
                            <td>{"A"}</td>
                            
                    </tbody>
                </table>
            </div>

            


            
            <br/>
            
        </div>


        <div className="dashboard-head1">
            <h2>CS210 DATA STRUCTURES</h2>
        </div>
        <div className="dashboard">
            <div className="std-info">
                <table className="table">
                    <thead>
                        <tr>
                           
                           
                            <th>May 1, 2021</th>
                            <th>May 3, 2021</th>
                            <th>May 8, 2021</th>
                            <th>May 10,2021</th>
                            <th>May 15,2021</th>
                            <th>May 17,2021</th>
                            <th>May 24,2021</th>
                            <th>May 26,2021</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                            
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"A"}</td>
                            <td>{"A"}</td>
                            
                    </tbody>
                </table>
            </div>

            


            
            <br/>
            
        </div>

        <div className="dashboard">
            <div className="std-info">
                <table className="table">
                    <thead>
                        <tr>
                           
                           
                            <th>June 1, 2021</th>
                            <th>June 3, 2021</th>
                            <th>June 8, 2021</th>
                            <th>June 10,2021</th>
                            <th>June 15,2021</th>
                            <th>June 17,2021</th>
                            <th>June 24,2021</th>
                            <th>June 26,2021</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                            
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"A"}</td>
                            <td>{"A"}</td>
                            
                    </tbody>
                </table>
            </div>

            


            
            <br/>
            
        </div>

        
        </React.Fragment>
    )
}


function Marks(props){
  
  
    return (
        <React.Fragment>
            <div className="dashboard-head">
            <h2>Marks</h2>
        </div>
         <div className="dashboard-head1">
            <h2>CS203 APPLIED PHYSICS</h2>
        </div>
        <div className="dashboard">
            <div className="std-info">
                <table className="table">
                    <thead>
                        <tr>
                           
                           
                            <th>Assignmnet 1</th>
                            <th>Assignmnet 2</th>
                            <th>Assignmnet 3</th>
                            <th>Homework 1</th>
                            <th>Homework 2</th>
                            <th>Mid 1</th>
                            <th>Mid 2</th>
                            <th>Final</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                            
                    <td>{"10"}</td>
                            <td>{"12"}</td>
                            <td>{"8"}</td>
                            <td>{"5"}</td>
                            <td>{"3"}</td>
                            <td>{"30"}</td>
                            <td>{"20"}</td>
                            <td>{"50"}</td>
                            
                    </tbody>
                </table>
            </div>

            


            
            <br/>
            
        </div>

       

        <div className="dashboard-head1">
            <h2>CS240 CALCULUS</h2>
        </div>
        <div className="dashboard">
            <div className="std-info">
                <table className="table">
                    <thead>
                        <tr>
                           
                           
                        <th>Assignmnet 1</th>
                            <th>Assignmnet 2</th>
                            <th>Assignmnet 3</th>
                            <th>Homework 1</th>
                            <th>Homework 2</th>
                            <th>Mid 1</th>
                            <th>Mid 2</th>
                            <th>Final</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                            
                            <td>{"10"}</td>
                            <td>{"12"}</td>
                            <td>{"8"}</td>
                            <td>{"5"}</td>
                            <td>{"3"}</td>
                            <td>{"30"}</td>
                            <td>{"20"}</td>
                            <td>{"50"}</td>
                            
                    </tbody>
                </table>
            </div>

            


            
            <br/>
            
        </div>

       


        <div className="dashboard-head1">
            <h2>CS210 DATA STRUCTURES</h2>
        </div>
        <div className="dashboard">
            <div className="std-info">
                <table className="table">
                    <thead>
                        <tr>
                           
                           
                        <th>Assignmnet 1</th>
                            <th>Assignmnet 2</th>
                            <th>Assignmnet 3</th>
                            <th>Homework 1</th>
                            <th>Homework 2</th>
                            <th>Mid 1</th>
                            <th>Mid 2</th>
                            <th>Final</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                            
                    <td>{"10"}</td>
                            <td>{"12"}</td>
                            <td>{"8"}</td>
                            <td>{"5"}</td>
                            <td>{"3"}</td>
                            <td>{"30"}</td>
                            <td>{"20"}</td>
                            <td>{"50"}</td>
                            
                    </tbody>
                </table>
            </div>

            


            
            <br/>
            
        </div>

       

        
        </React.Fragment>
    )
}

function News(props){
    return (
        <div>
            <div className="news-head">
                <h2>News</h2>
            </div>
            <table className="table news-table">
                        <thead>
                            <tr>
                                <th className="news-no">Sr. No.</th>
                                <th className="news-title">Title</th>
                                <th className="news-desc">News</th>
                            </tr>
                        </thead>
                        <tbody>
                        {props.news?.map((x,i)=>(    
                            <tr>
                                <td className="news-no">{i+1}</td>
                                <td className="news-title"><b>{x.title}</b></td>
                                <td className="news-desc">{x.description}</td>
                            </tr> 
                        ))}
                        </tbody>
                        </table>
        </div>
    )
}

function Course(props){
   
    
    return (
        <React.Fragment>
        <div className="std-course-head">
            <h2>Courses</h2>
            <Grid1></Grid1>
        {/* </div>
        <div className="std-course">
            <h3>Enrolled Courses</h3>
            <span>
            <div><p>{"Maths"}</p><button disabled>Enrolled</button></div></span>

            <h3>More  Courses</h3>
            <span>
            <div><p>{"ITC"}</p><button >Enroll</button></div></span>

            <h3>Other Courses</h3>
            <span>
            <div><p></p><button >Enroll</button></div></span> */}
        </div>
        </React.Fragment>
    )
}

function BusShedule(props){
  
  
    return (
        <React.Fragment>
        <div className="dashboard-head">
            <h2>BUS SHEDULE</h2>
        </div>
        <div className="dashboard-head1">
            <h2>BUS 01</h2>
        </div>
        <div className="dashboard">
            <div className="std-info">
                <table className="std-infoTable">
                    <thead>
                        <tr>
                            <th>Morning Departure</th>
                            <th>Morning Arrival</th>
                            
                            <th>Evening Departure</th>
                            <th>Evening Arrival</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                           
                            <td>{"6:30 am"}</td>
                            
                            <td>{"7:50 am"}</td>
                            <td>{"5 pm"}</td>
                            <td>{"6:30 pm"}</td>
                    </tbody>
                </table>
            </div>
            <br/>
            
        </div>



       
        <div className="dashboard-head1">
            <h2>BUS 02</h2>
        </div>
        <div className="dashboard">
            <div className="std-info">
                <table className="std-infoTable">
                    <thead>
                        <tr>
                            <th>Morning Departure</th>
                            <th>Morning Arrival</th>
                            
                            <th>Evening Departure</th>
                            <th>Evening Arrival</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                           
                            <td>{"6:30 am"}</td>
                            
                            <td>{"7:50 am"}</td>
                            <td>{"5 pm"}</td>
                            <td>{"6:30 pm"}</td>
                    </tbody>
                </table>
            </div>
            <br/>
            
        </div>

        <div className="dashboard-head1">
            <h2>BUS 03</h2>
        </div>
        <div className="dashboard">
            <div className="std-info">
                <table className="std-infoTable">
                    <thead>
                        <tr>
                            <th>Morning Departure</th>
                            <th>Morning Arrival</th>
                            
                            <th>Evening Departure</th>
                            <th>Evening Arrival</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                           
                            <td>{"6:30 am"}</td>
                            
                            <td>{"7:50 am"}</td>
                            <td>{"5 pm"}</td>
                            <td>{"6:30 pm"}</td>
                    </tbody>
                </table>
            </div>
            <br/>
            
        </div>

        <div className="dashboard-head1">
            <h2>BUS 04</h2>
        </div>
        <div className="dashboard">
            <div className="std-info">
                <table className="std-infoTable">
                    <thead>
                        <tr>
                            <th>Morning Departure</th>
                            <th>Morning Arrival</th>
                            
                            <th>Evening Departure</th>
                            <th>Evening Arrival</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                           
                            <td>{"6:30 am"}</td>
                            
                            <td>{"7:50 am"}</td>
                            <td>{"5 pm"}</td>
                            <td>{"6:30 pm"}</td>
                    </tbody>
                </table>
            </div>
            <br/>
            
        </div>
        </React.Fragment>
    )
}

function Timetable(props){
    
    return (
        <React.Fragment>
            <div className="news-head">
                <h2>Timetable</h2>
            </div>

            <div className="timetable-list">
            {/* {props.branch?.map((x)=><img src={'/images/'+x.branchName+".png"}></img> ? 
            <span style={{textAlign:'center',width:"250px"}}>
                <img src={'/images/'+x.branchName+".png"} alt="" style={{width:"250px",height:"auto"}}></img>
                    <br/>
                <p>{x.branchName}</p>
            </span>:null)} */}
            <img src="/timetable.png" />
            </div>
        </React.Fragment>
        
    )
}

function Payment(props){
  
  
    return (
        <React.Fragment>
        
        <div className="dashboard-head1">
            <h2>Student Challan</h2>
        </div>
        <div className="dashboard">
            <div className="std-info">
                <table className="std-infoTable">
                    <thead>
                        <tr>
                            <th>Sr no.</th>
                            <th>Amount</th>
                            
                            <th>Due Date</th>
                            <th>Status</th>
                            <th>Detail</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                           
                            <td>{1}</td>
                            
                            <td>{"Rs 1000000"}</td>
                            <td>{"May 21, 2021"}</td>
                            <td>{"Paid"}</td>
                            <td>{"Online Payment"}</td>
                    </tbody>
                </table>
            </div>
            <br/>
            
        </div>



       
       
        </React.Fragment>
    )
}


function Messages(props){
  
  
    return (
        <React.Fragment>
        
        <div className="news-head">
                <h2>Messages</h2>
            </div>
        <div className="dashboard">
            <div className="std-info">
                <table className="std-infoTable">
                    <thead>
                        <tr>
                            <th>Sr no.</th>
                            <th>Department</th>
                            
                            <th>Message</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                           
                           
                            
                            <td>{"01"}</td>
                            <td>{"Academics"}</td>
                            <td>{"The midterm exams for fall 2021 has been cancelled"}</td>
                            
                    </tbody>
                </table>
            </div>
            <br/>
            
        </div>



       
       
        </React.Fragment>
    )
}


function Transcript(props){
  
  
    return (
        <React.Fragment>
        
        <div className="news-head">
                <h2>Transcript</h2>
            </div>
            <div className="news-head1">
                <h2>Credit Hour Required:130     </h2>
            </div>
            <div className="news-head1">
                <h2>CGPA : 2.67</h2>
            </div>
            <div className="news-head1">
                <h2>Credit Hour earned:120</h2>
            </div>
            <div className="news-head1">
                <h2>Warning count:0</h2>
            </div>
            <div className="dashboard-head1">
            <h2>FALL 2021</h2>
        </div>
        <div className="dashboard">
            <div className="std-info">
                <table className="std-infoTable">
                    <thead>
                        <tr>
                            <th>Sr no.</th>
                            <th>Course Name</th>
                            <th>Section</th>
                            
                            <th>Grade</th>
                            <th>GPA</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                           
                           
                            
                            <td>{"302"}</td>
                            
                            <td>{"Web Programming"}</td>
                            <td>{"302"}</td>
                            <td>{"A-"}</td>
                            <td>{"3.67"}</td>
                            
                    </tbody>
                    <tbody>
                           
                           
                            
                            <td>{"302"}</td>
                            <td>{"Web Programming"}</td>
                            <td>{"302"}</td>
                            <td>{"A-"}</td>
                            <td>{"3.67"}</td>
                            
                    </tbody>
                    <tbody>
                           
                           
                            
                            <td>{"302"}</td>
                            <td>{"Web Programming"}</td>
                            <td>{"302"}</td>
                            <td>{"A-"}</td>
                            <td>{"3.67"}</td>
                            
                    </tbody>
                    <tbody>
                           
                           
                            
                            <td>{"302"}</td>
                            <td>{"Web Programming"}</td>
                            <td>{"302"}</td>
                            <td>{"A-"}</td>
                            <td>{"3.67"}</td>
                            
                    </tbody>
                    <tbody>
                           
                           
                            
                            <td>{"302"}</td>
                            <td>{"Web Programming"}</td>
                            <td>{"302"}</td>
                            <td>{"A-"}</td>
                            <td>{"3.67"}</td>
                            
                    </tbody>
                </table>
            </div>
            <br/>
            
        </div>


        <div className="dashboard-head1">
            <h2>SPRING 2021</h2>
        </div>
        <div className="dashboard">
            <div className="std-info">
                <table className="std-infoTable">
                    <thead>
                        <tr>
                            <th>Sr no.</th>
                            <th>Course Name</th>
                            <th>Section</th>
                            
                            <th>Grade</th>
                            <th>GPA</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                           
                           
                            
                            <td>{"302"}</td>
                            <td>{"Web Programming"}</td>
                            <td>{"302"}</td>
                            

                            <td>{"A-"}</td>
                            <td>{"3.67"}</td>
                            
                    </tbody>
                    <tbody>
                           
                           
                            
                            <td>{"302"}</td>
                            <td>{"Web Programming"}</td>
                            <td>{"302"}</td>
                            <td>{"A-"}</td>
                            <td>{"3.67"}</td>
                            
                    </tbody>
                    <tbody>
                           
                           
                            
                            <td>{"302"}</td>
                            <td>{"Web Programming"}</td>
                            <td>{"302"}</td>
                            <td>{"A-"}</td>
                            <td>{"3.67"}</td>
                            
                    </tbody>
                    <tbody>
                           
                           
                            
                            <td>{"302"}</td>
                            <td>{"Web Programming"}</td>
                            <td>{"302"}</td>
                            <td>{"A-"}</td>
                            <td>{"3.67"}</td>
                            
                    </tbody>
                    <tbody>
                           
                           
                            
                            <td>{"302"}</td>
                            <td>{"Web Programming"}</td>
                            <td>{"302"}</td>
                            <td>{"A-"}</td>
                            <td>{"3.67"}</td>
                            
                    </tbody>
                </table>
            </div>
            <br/>
            
        </div>

       
       
        </React.Fragment>
    )
}
export default Student;