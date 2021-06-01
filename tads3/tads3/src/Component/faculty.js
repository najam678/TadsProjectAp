import React from 'react'
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import './admin.css';
import Grid2 from "./Grid2.jsx"

import jwtDecode from 'jwt-decode';

class Faculty extends React.Component{
    constructor(props){
        super(props);
        this.state={};
        this.state.id=null;
        this.state.password=null;
        this.state.isAuthenticated=false;
        this.state.decoded=null;
        this.state.view=false;
    }
    //*************************************NEWLY ADDED CODE STARTS***************************************// 

    handleLogin = (e) => {
        const credentials = {
            id:this.state.id,
            password:this.state.password
        };
                  
    }

    logout = (e) =>{
        console.log('Logging out...');
       
        this.setState({
            isAuthenticated:false,
            decoded:null
        });
    }

    toggleView = () => {
        let view=this.state.view;
        view=!view;
        this.setState({
            view:view
        });
    }

    //*************************NEWLY ADDED CODE ENDS ***************************//


    render(){
         //***********************NEWLY ADDED CODE STARTS *************************/
        return(
            <React.Fragment>
            <div id="navbar">
                <p>TADS</p>
                {/* <input type="text" name="Search" placeholder="Search..."/> */}
            </div>
            <Router>
            <div id="menu">
                
                <ul>
                    <Link to="/faculty" className="Link"><li ><i className="fas fa-th fa-lg"></i>Dashboard</li></Link>
                    <Link to="/faculty/course" className="Link"><li><i className="fas fa-user-graduate fa-lg"></i>Courses</li></Link>
                    <Link to="/faculty/attendance" className="Link"><li><i className="fas fa-chalkboard-teacher fa-lg"></i>Attendance</li></Link>
                    <Link to="/faculty/grades" className="Link"><li><i class="fas fa-building fa-lg"></i>Grades</li></Link>
                    <Link to="/faculty/enrolled" className="Link"><li><i class="fas fa-book fa-lg"></i>Enrolled Courses</li></Link>
                    <Link to="/faculty/marks" className="Link"><li><i class="fas fa-school fa-lg"></i>Marks</li></Link>
                    <Link to="/faculty/news" className="Link"><li><i class="fas fa-bell fa-lg"></i>News</li></Link>
                    <Link to="/faculty/timetable" className="Link"><li><i className="far fa-clock fa-lg"></i>Timetable</li></Link>
                    <Link to="/faculty/payment" className="Link"><li><i class="fas fa-credit-card fa-lg"></i>Payment</li></Link>
                    <Link to="/faculty/messages" className="Link"><li><i class="fas fa-comment-alt fa-lg"></i>Messages</li></Link>
                    <button onClick={(e)=>this.logout()}>Logout</button>
                </ul>
                
            </div>
            </Router>
            <Router>
            <div id="right">
                <Route path="/faculty" exact render={(e)=><Dashboard decoded={this.state.decoded} student={this.state.student} faculty={this.state.faculty} news={this.state.news}></Dashboard>}></Route>
                <Route path="/faculty/course" render={(e)=><Course course={this.props.course}></Course>}></Route>
                <Route path="/faculty/grades" render={(e)=><Grades grades={this.props.grades}></Grades>}></Route>
                <Route path="/faculty/enrolled" render={(e)=><Enrolled enrolled={this.props.enrolled}></Enrolled>}></Route>
                <Route path="/faculty/marks" render={(e)=><Marks enrolled={this.props.marks}></Marks>}></Route>
                <Route path="/faculty/attendance" render={e=><Attendance view={this.state.view} toggleView={this.toggleView.bind(this)} student={this.props.student} course={this.props.course}></Attendance>}></Route>
                <Route path="/faculty/attendance/mark" render={e=><MarkAttendance student={this.props.student} course={this.props.course}></MarkAttendance>}></Route>
                <Route path="/faculty/news" render={(e)=><News news={this.props.news}></News>}></Route> 
                <Route path="/faculty/payment" render={(e)=><Payment payment={this.props.payment}></Payment>}></Route> 
                <Route path="/faculty/messages" render={(e)=><Messages messages={this.props.messages}></Messages>}></Route> 
                <Route path="/student/timetable"  render={(e)=><Timetable branch={this.props.branch}></Timetable>}></Route>
               
            </div>
            </Router>
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
                                <th>Year</th>
                                
                               
                                <th>Campus</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                                <td>{"decoded.name"}</td>
                                <td>{"decoded.roll no."}</td>
                                
                                <td>{"decoded.degree"}</td>
                                
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
    
           
            </React.Fragment>
        )
    }

function Course(props){
  
    return (
        <React.Fragment>
        <div className="attendance-head">
            <h2>Courses</h2>
        </div>
        <div className="attendance">
        Please add courses as discussed.
        <br/>
       
            <div>
                <div><button>Add</button></div>
            </div>
        </div>
        </React.Fragment>
    )
}

function Attendance(props){
   
    

    const [showMe, setShowMe] = React.useState([]);

    const isShown = el => showMe.includes(el?.id);

    const toggleShown = el => {
        setShowMe(shown => {
          if (shown.includes(el.id)) {
            return shown.filter(id => id !== el.id);
          }
          return [...shown, el.id];
        });
      };

    return (
        <React.Fragment>
        <div className="attendance-head">
            <h2>Attendance</h2>
        </div>
        
            
        <div className="attendance">
            
            <Link className="Link" style={{color:"#000",fontWeight:"400"}}>
                <div className="courseAttendance" onClick={(e)=>toggleShown(e)}>{}</div>
                {
                <span>
                <input type="date" name="date"/>
                {props.student?.map((y)=>y.branch == "BS.CS" && y.coursesEnrolledIn.find(m=>m.courseName == "math") ? 
                <div>{y.firstName+" "+y.lastName}<button>P</button><button>A</button></div>:null)}
                </span>}
            </Link>)

            
        </div>
        <div className="dashboard-head1"><button>Save</button></div>
        <div className="dashboard-head1"><button>Cancel</button></div>
         <div className="dashboard-head1">
            <h2>CS203 APPLIED PHYSICS</h2>
        </div>
        <div className="dashboard-head1">
            <h2>Section:8A</h2>
        </div>
        <div className="dashboard">
            <div className="std-info">
                <table className="table">
                    <thead>
                        <tr>
                           
                        <th>Roll No.</th>
                        <th>Name</th>
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
                            
                          <td>{"L174208 "}</td>
                          <td>{"Mehsim"}</td>
                          
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"A"}</td>
                            <td>{"A"}</td>
                            
                    </tbody>
                    <tbody>
                            
                          <td>{"L174208 "}</td>
                          <td>{"Mehsim"}</td>
                          
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"A"}</td>
                            <td>{"A"}</td>
                            
                    </tbody>
                    <tbody>
                            
                          <td>{"L174208 "}</td>
                          <td>{"Mehsim"}</td>
                          
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"A"}</td>
                            <td>{"A"}</td>
                            
                    </tbody>
                    <tbody>
                            
                          <td>{"L174208 "}</td>
                          <td>{"Mehsim"}</td>
                          
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"A"}</td>
                            <td>{"A"}</td>
                            
                    </tbody>
                    <tbody>
                            
                          <td>{"L174208 "}</td>
                          <td>{"Mehsim"}</td>
                          
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"A"}</td>
                            <td>{"A"}</td>
                            
                    </tbody>
                    <tbody>
                            
                          <td>{"L174208 "}</td>
                          <td>{"Mehsim"}</td>
                          
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"P"}</td>
                            <td>{"A"}</td>
                            <td>{"A"}</td>
                            
                    </tbody>
                    <tbody>
                            
                          <td>{"L174208 "}</td>
                          <td>{"Mehsim"}</td>
                          
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

function MarkAttendance(props){
 
    
    return (
        <React.Fragment>
            <div>
               
            </div>
        </React.Fragment>
    )
}


function Enrolled(props){
   
    
    return (
        <React.Fragment>
        <div className="std-course-head">
            <h2>Courses</h2>
            <Grid2></Grid2>
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

function Marks(props){
  
  
    return (
        <React.Fragment>
            <div className="dashboard-head">
            <h2>Marks</h2>
        </div>
        <h3  className="dashboard-head1">Course</h3>
        <span>
            <div className="dashboard-head1"><p></p><button disabled>Drop down button</button></div></span>

            <h3  className="dashboard-head1">Section</h3>
            <span>
            <div className="dashboard-head1"><button >Drop down button</button></div></span>

            <h3  className="dashboard-head1">Roll No.</h3>
            <span>
            <div className="dashboard-head1"><p></p><button >Drop down button</button></div></span> 
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


function Grades(props){
  
  
    return (
        <React.Fragment>
            <div className="dashboard-head">
            <h2>Marks</h2>
        </div>
        <h3  className="dashboard-head1">Course</h3>
        <span>
            <div className="dashboard-head1"><p></p><button disabled>Drop down button</button></div></span>

            <h3  className="dashboard-head1">Section</h3>
            <span>
            <div className="dashboard-head1"><button >Drop down button</button></div></span>

            
            
        <div className="dashboard">
            <div className="std-info">
                <table className="table">
                    <thead>
                        <tr>
                           
                           
                            <th>Roll No.</th>
                            <th>Total Marks</th>
                            <th>Grade </th>
                            <th>GPA</th>
                            
                            
                        </tr>
                        
                    </thead>
                    <tbody>
                            
                   
                             <td>{"3"}</td>
                            <td>{"30"}</td>
                            <td>{"20"}</td>
                            <td>{"50"}</td>
                            
                    </tbody>
                    <tbody>
                            
                   
                             <td>{"3"}</td>
                            <td>{"30"}</td>
                            <td>{"20"}</td>
                            <td>{"50"}</td>
                            
                    </tbody>
                    <tbody>
                            
                   
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

function Timetable(props){
    
    return (
        <React.Fragment>
            <div className="news-head">
                <h2>Timetable</h2>
            </div>

            <div className="timetable-list">
            {props.branch.map((x)=><img src={'/images/'+x.branchName+".png"}></img> ? 
            <span style={{textAlign:'center',width:"250px"}}>
                <img src={'/images/'+x.branchName+".png"} alt="" style={{width:"250px",height:"auto"}}></img>
                    <br/>
                <p>{x.branchName}</p>
            </span>:null)}
            </div>
        </React.Fragment>
    )
}


function Payment(props){
  
  
    return (
        <React.Fragment>
        
        <div className="dashboard-head1">
            <h2>Payment </h2>
        </div>
        <div className="dashboard">
            <div className="std-info">
                <table className="std-infoTable">
                    <thead>
                        <tr>
                            <th>Sr no.</th>
                            <th>Name</th>
                            <th>Paycheck</th>
                            
                            <th>Sender Account No.</th>
                            <th>Sender Bank Name</th>
                            <th>Receiver Account No.</th>
                            <th>Sender Bank Name</th>
                            <th>Status</th>
                            <th>Detail</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                           
                            <td>{1}</td>
                            <td>{"Mehsim"}</td>
                            <td>{"Rs 1000000"}</td>
                            <td>{"1001004578"}</td>
                            <td>{"Meezan Bank"}</td>
                            <td>{"10832737832"}</td>
                            <td>{"Habib Bank"}</td>
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
export default Faculty;