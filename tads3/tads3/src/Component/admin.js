import React from 'react'
import {BrowserRouter as Router,Route,Link, Redirect} from "react-router-dom";
import "./admin.css";



class Admin extends React.Component{
    constructor(props){
        super(props);
        this.state={
            student : props.Student? props.Student : {},
            faculty : props.faculty? props.faculty : {},
            news : [],
            department : [],
            course : [],
            id : null, 
            password : null,
            isAuthenticated : false,
            decoded: {}
        };
     
    }

   
    componentDidMount(){
      
    }

    

    
    logout = (e) =>{
        console.log('Logging out...');
        localStorage.removeItem("admin");
        this.setState({
            isAuthenticated:false
        });
    }

    //*************************************NEWLY ADDED CODE ENDS ****************************************//

    addStudent(student_info){
        console.log(student_info);
        let {student}=this.state;
        student.push(student_info);
        console.log(student);

       
        console.log(this.state.student);
    }
    
    addFaculty(faculty_info){
        console.log(faculty_info);
        let {faculty}=this.state;
        faculty.push(faculty_info);
        console.log(faculty)
      
        console.log(this.state.faculty);
    }

    addNews(info){
        console.log(info);
        let {news} = this.state;
        news.push(info);
      
        console.log(this.state.news);
    }

    addDepartment(dept){
     let department=this.state.department;
     department.push(dept);
     
       
    }

    addCourse(info){
        let course = this.state.course;
        course.push(info);
       
    }
    handleLogin = (e) =>{
        this.setState({
            isAuthenticated:true
        });
    }
    render(){ 
        //***********************NEWLY ADDED CODE ***************************//
        if(!this.state.isAuthenticated){
            return (
            <div className="login-wrapper">
                <div className="login"> 
                    <input type="text" name="id" placeholder="Enter ID" value={this.state.id} onChange={(e)=>this.setState({id:e.target.value})}/>
                    <br/>
                    <input type="password" name="password" placeholder="Enter Password" value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})}/>
                    <br/>
                    <button type="submit" onClick={(e)=>{this.handleLogin(e)}}>Login</button>
                </div>
            </div>
            )
        }
        else{
        return(
          <React.Fragment> 
                <div id="navbar">
                    <p>TADS</p>
                    
             
                </div>
               
                <div id="menu">
                <Router>
                    <ul>
                        <Link to="/admin" className="Link"><li ><i className="fas fa-th fa-lg"></i>Dashboard</li></Link>
                        <Link to="/admin/student" className="Link"><li><i className="fas fa-user-graduate fa-lg"></i>Students</li></Link>
                        <Link to="/admin/faculty" className="Link"><li><i className="fas fa-chalkboard-teacher fa-lg"></i>Faculty</li></Link>
                        <Link to="/admin/department" className="Link"><li><i className="fas fa-building fa-lg"></i>Departments</li></Link> 
                        <Link to="/admin/branch" className="Link"><li><i className="fas fa-book fa-lg"></i>Branch</li></Link>
                        <Link to="/admin/course" className="Link"><li><i className="fas fa-school fa-lg"></i>Course</li></Link>
                        <Link to="/admin/news" className="Link"><li><i className="fas fa-bell fa-lg"></i>News</li></Link>
                        <Link to="/admin/timetable" className="Link"><li><i className="far fa-clock fa-lg"></i>Timetable</li></Link>
                    
                        <Link to="/admin/payment" className="Link"><li><i className="fas fa-credit-card fa-lg"></i>Payment</li></Link>
                        
                        <Link to="/admin/messages" className="Link"><li><i className="fas fa-comment-alt fa-lg"></i>Messages</li></Link>
                        <Link to="/admin/buses" className="Link"><li><i className="fas fa-bell fa-lg"></i>Bus-Shedule</li></Link>
                        <Link to="/admin"><button>Logout</button></Link>
                   
                    </ul>
                    </Router>
                </div>

                <Router>
                <div id="right">
                <Route exact path ='/admin' component={(e)=><Dashboard branch={this.state.branch} course={this.state.course} department={this.state.department} student={this.state.student} faculty={this.state.faculty} news={this.state.news}></Dashboard>}></Route> 
                      
                    <Route exact path="/admin/faculty" component={(e)=><MngFclt addFaculty={()=>this.props.addFaculty} faculty={this.props.faculty}></MngFclt>}></Route>
                    <Route  exact path="/admin/student" component={(e)=><MngStd addStudent={()=>this.props.addStudent} student={this.props.student}></MngStd>}></Route>    
                    <Route exact path="/admin/news" render={(e)=><AddNews news={this.props.news} addNews={()=>this.props.addNews}></AddNews>}></Route>
                    <Route exact path="/admin/course" render={(e)=><AddCourse branch={this.props.branch} department={this.props.department} course={this.props.course} addCourse={()=>this.props.addCourse}></AddCourse>}></Route>
                    <Route exact path="/admin/addStudent" render={(e)=><AddStudent department={this.props.department} branch={this.props.branch} addStudent={()=>this.props.addStudent}></AddStudent>}></Route>
                    <Route exact path="/admin/addFaculty" render={(e)=><Add_faculty course={this.props.course} department={this.props.department} branch={this.props.branch} addFaculty={()=>this.props.addFaculty}></Add_faculty>}></Route>
                    <Route exact path="/admin/department" render={(e)=><AddDepartment department={this.props.department} addDepartment={()=>this.props.addDepartment}></AddDepartment>}></Route>
                    <Route exact path="/admin/branch" render={(e)=><AddBranch branch={this.props.branch} department={this.props.department} addBranch={()=>this.props.addBranch}></AddBranch>}></Route>
                    <Route exact path="/admin/timetable" render={(e)=><TimeTable branch={this.props.branch} timetable={this.props.timetable} AddTimetable={()=>this.props.addTimetable}></TimeTable>}></Route>
                    <Route exact path="/admin/messages" render={(e)=><Messages news={this.props.news} addNews={()=>this.props.addNews}></Messages>}></Route>
                    <Route path="/admin/buses"  render={(e)=><BusShedule buses={this.props.buses}></BusShedule>}></Route>
                    <Route exact path="/admin/payment" render={(e)=><Payment branch={this.props.branch} timetable={this.props.timetable} AddTimetable={()=>this.props.addTimetable}></Payment>}></Route>
       </div> 
       </Router>
                </React.Fragment>
        )}
    }
    
}


export default Admin;

function MngStd(props){
    return (
        <div>
            <div className="student-head"> 
            <h2>Manage Student</h2>
            <Link className="Link" to="/admin/addStudent"><span className="addBtn" style={{float:"right",marginRight:"35px"}}><i class="fas fa-plus"></i> Add Student</span></Link>
            </div>
            <div> 
                <table border="1" className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Enrollment No.</th>
                            <th>Department</th>
                            <th>Branch</th>
                            <th>Phone No.</th>
                            <th>Dob</th>
                        </tr>
                    </thead>
                    <tbody>
                    {props.student?.map((x)=>(
                        <tr>
                            <td>{x.firstName+" "+x.lastName}</td>
                            <td>{x.enroll}</td>
                            <td>{x.department}</td>
                            <td>{x.branch}</td>
                            <td>{x.mob_no}</td>
                            <td>{JSON.stringify(x.dob).slice(1,11)}</td>
                            <button className="updateBtn">Update</button>
                            <button className="deleteBtn">Delete</button>
                        </tr>
                    ))} 
                    </tbody>
                </table>
            </div>        
        </div>
    )
}

function MngFclt(props){
    return (
        <div>
            <div className="faculty-head"> 
            <h2>Manage Faculty</h2>
            <Link className="Link" to="/admin/addFaculty"><span className="addBtn" style={{float:"right",marginRight:"35px"}}><i class="fas fa-plus"></i> Add Faculty</span></Link>
            </div>
            <div> 
                <table border="1" className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>ID</th>
                            <th>Phone No.</th>
                            <th>Department</th>
                            <th>Branch</th>
                        </tr>
                    </thead>
                    <tbody>
                    {props.faculty?.map((x)=>(
                        <tr>
                            <td>{x.firstName+" "+x.lastName}</td>
                            <td>{x.id}</td>
                            <td>{x.mob_no}</td>
                            <td>{x.dept}</td>
                            <td>{x.branch}</td>
                            <button className="updateBtn">Update</button>
                            <button className="deleteBtn">Delete</button>
                        </tr>
                    ))} 
                    </tbody>
                </table>
            </div>        
        </div>
    )
}

function AddStudent(props){

    const [firstName, setFirstName] = React.useState("");
    const [middleName, setMiddleName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [gender,setGender] = React.useState(null);
    const [dob, setDob] = React.useState("");
    const [mob_no,setMob_no] = React.useState("");
    const [email,setEmail] = React.useState("");
    const [altEmail,setAltEmail] = React.useState("");
    const [address1, setAddress1] = React.useState("");
    const [address2, setAddress2] = React.useState("");
    const [city, setCity] = React.useState("");
    const [pincode, setPincode] = React.useState("");
    const [state, setstate] = React.useState("");
    const [country, setCountry] = React.useState("");

    const [fname, setFname] = React.useState("");
    const [fat_mob_no,setFatMob_no] = React.useState("");
    const [fth_email,setFthEmail] = React.useState("");
    const [fOccu, setfOccu] = React.useState("");
    const [mname, setMname] = React.useState("");
    const [mth_mob_no,setMthMob_no] = React.useState("");
    const [mth_email,setMthEmail] = React.useState("");
    const [mOccu, setmOccu] = React.useState("");

    const [enroll, setEnroll] = React.useState("");
    const [department,setDept] = React.useState(null);
    const [branch,setBranch] = React.useState(null);

return (
    <div className="add_detail">
        {console.log(props.branch)}
        <br/>
        <h2>Add Student <Link style={{float:"right",marginRight:"25px"}} to="/admin/student"><i style={{color:"#707070" }}class="fas fa-window-close"></i></Link> </h2> 
        <br/>
        <span className="tag">Personal Details</span>

    <div className="form-top">
       <input type="text" name="firstName" placeholder="First Name" onChange={(e)=>{setFirstName(e.target.value)}} value={firstName}></input> 
       <input type="text" name="middleName" placeholder="Middle Name" onChange={(e)=>{setMiddleName(e.target.value)}} value={middleName}></input> 
       <input type="text" name="lastName" placeholder="Last Name" onChange={(e)=>{setLastName(e.target.value)}} value={lastName}></input> 
       <select value={gender} onChange={(e)=>setGender(e.target.value)}>
           <option value="">Gender</option>
           <option value="Male">Male</option>
           <option value="Female">Female</option>
           <option value="Other">Other</option>
       </select>
       <input type="date" name="dob" onChange={(e)=>{setDob(e.target.value)}} value={dob}></input> 
       <input type="tel" name="mob_no" placeholder="Mobile No." onChange={(e)=>setMob_no(e.target.value)} value={mob_no} ></input>
    </div>

    <div className="form-mid">
       <input type="email" name="email" placeholder="Email id" onChange={(e) => setEmail(e.target.value)} value={email} ></input>
       <input type="email" name="altEmail" placeholder="Alternate Email id" onChange={(e) => setAltEmail(e.target.value)} value={altEmail}></input>
    </div>

    <div className="form-address">
       <input type="text" name="Address1" placeholder="Address Line 1" onChange={(e)=>{setAddress1(e.target.value)}} value={address1}></input> 
       <input type="text" name="Address2" placeholder="Address Line 2" onChange={(e)=>{setAddress2(e.target.value)}} value={address2}></input> 
    </div>

    <div className="form-bottom">
       <input type="text" name="city" placeholder="City" onChange={(e)=>{setCity(e.target.value)}} value={city}></input> 
       <input type="text" name="pincode" placeholder="Pincode" onChange={(e)=>{setPincode(e.target.value)}} value={pincode}></input> 
       <input type="text" name="state" placeholder="State" onChange={(e)=>{setstate(e.target.value)}} value={state}></input> 
       <select value={country} onChange={(e)=>setCountry(e.target.value)}>
            <option value="AFG">Afghanistan</option>
            <option value="ALA">Åland Islands</option>
            <option value="ZWE">Zimbabwe</option>
        </select>
    </div>
        <br/>
        <br/>
       <span className="tag">Family Details</span>

    <div className="form-bottom">
       <input type="text" name="fatherName" placeholder="Father's Name" onChange={(e)=>{setFname(e.target.value)}} value={fname}></input>
       <input type="text" name="fatherOccu" placeholder="Occupation" onChange={(e)=>setfOccu(e.target.value)} value={fOccu}></input> 
       <input type="tel" name="fth_mob_no" placeholder="Mobile No." onChange={(e) => setFatMob_no(e.target.value)} value={fat_mob_no}></input>
       <input type="email" name="fth_email" placeholder="Email id" onChange={(e) => setFthEmail(e.target.value)} value={fth_email} ></input>
    </div>

       <br/>

    <div className="form-bottom">
       <input type="text" name="motherName" placeholder="Mother's Name" onChange={(e)=>{setMname(e.target.value)}} value={mname}></input>
       <input type="text" name="mothersOccu" placeholder="Occupation" onChange={(e)=>setmOccu(e.target.value)} value={mOccu}></input> 
       <input type="tel" name="mth_mob_no" placeholder="Mobile No." onChange={(e) => setMthMob_no(e.target.value)} value={mth_mob_no}></input>
       <input type="email" name="mth_email" placeholder="Email id" onChange={(e) => setMthEmail(e.target.value)} value={mth_email} ></input>
    </div>

       <br/>
       <br/>

       <span className="tag">Academic Details</span>

    <div className="form-acad">
       <input type="text" name="enroll_no" placeholder="Enrollment Number" onChange={(e)=>{setEnroll(e.target.value)}} value={enroll}></input> 
       <select value={department} onChange={(e)=>setDept(e.target.value)}>
           <option value="">Department</option>
            {props.department?.map((x)=>(<option>{x.dept_name}</option>))}  
       </select>

       {/* {props.branch.map((x)=>x.branchDept) === department ?  */}
       <span>
           <select value={branch} onChange={(e=>setBranch(e.target.value))}>
            <option value="">Branch</option>
            {props.branch?.map((x)=>x.branchDept === department ? <option>{x.branchName}</option>:"")}
           </select>
       </span> 
       
    </div>
       <br/>
       <br/>
       <br/>
       <button type="submit" onClick={(e)=>{props.addStudent({ firstName,middleName,lastName,gender,
        dob,mob_no,email,altEmail,address1,address2,city,pincode,state,country,fname,fat_mob_no,fth_email,fOccu,mname,mth_mob_no,
        mth_email,mOccu,enroll,department,branch});
        setFirstName("");setMiddleName("");setLastName("");setGender("");setDob("");setMob_no("");setEmail("");setAltEmail("");
        setAddress1("");setAddress2("");setCity("");setPincode("");setstate("");setCountry("");setFname("");setFatMob_no("");setFthEmail("");
        setfOccu("");setMname("");setMthMob_no("");setMthEmail("");setmOccu("");setEnroll("");setDept("");setBranch("")}}>Add</button>
        <br/>
        <br/>
        <br/>
    </div>
)}

function Dashboard(props){
    return (
        <React.Fragment>
        <div className="dashboard-head">
            <h2>Dashboard</h2>
        </div>
        <div className="dashboard">
            <div className="banner">
                <div className="banner-img"><img src="/images/student2.png" style={{width:"90px"}}></img></div>
                <div className="banner-info">
                <span>{props.student ? props.student.length:0}</span>
                <p>{props.student?.length === 1 ? " Student":" Students"}</p>
                </div>
            </div>
            <div className="banner">
                <div className="banner-img"><img src="/images/teacher.png" style={{width:"90px"}}></img></div>
                <div className="banner-info">
                <span>{props.faculty ? props.faculty.length:0}</span>
                <p>Faculty</p>
                </div>
            </div>
            <div className="banner">
                <div className="banner-img"><img src="/images/news.png" style={{width:"90px"}}></img></div>
                <div className="banner-info">
                <span>{props.news ? props.news.length:0}</span>
                <p>News</p>
                </div>
            </div>
        </div>
        <div className="banner2">
        <div className="newsBlock">
            <div>
                {props.news?.map((x)=>(
                    <div className="news">
                        <b>{x.title}</b><br></br>{x.description}
                    </div>
                ))}
            </div>
        </div>
        <div className="management">
            <div className="mgmt mgmt-1"><span>Departments</span><br/><p>{props.department?.length}</p></div>
            <div className="mgmt mgmt-2"><span>Branch</span><br/><p>{props.branch?.length}</p></div>
            <div className="mgmt mgmt-3"><span>Courses</span><br/><p>{props.course?.length}</p></div>
            <div className="mgmt mgmt-4"><span>Day & Date</span><br/><p>{new Date().getDate()+"-"+new Date().getMonth()+"-"+new Date().getFullYear()}</p></div>
        </div>
        </div>
        </React.Fragment>
    )
}

function Add_faculty(props){

    const [firstName, setFirstName] = React.useState("");
    const [middleName, setMiddleName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [gender,setGender] = React.useState(null);
    const [dob, setDob] = React.useState("");
    const [mob_no,setMob_no] = React.useState("");
    const [email,setEmail] = React.useState("");
    const [altEmail,setAltEmail] = React.useState("");
    const [address1, setAddress1] = React.useState("");
    const [address2, setAddress2] = React.useState("");
    const [city, setCity] = React.useState("");
    const [pincode, setPincode] = React.useState("");
    const [state, setstate] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [id, setId] = React.useState("");
    const [dept,setDept] = React.useState(null);
    const [branch,setBranch] = React.useState(null);
    const [coursesTaught,setCoursesTaught]=React.useState([])

    let addCourseTaught = (checked,value) => {
       console.log(checked+" "+value)
       var index=coursesTaught.indexOf(value);
       console.log("Index: ",index);
       if(index==-1)
            setCoursesTaught(coursesTaught.concat(value))
       else
           setCoursesTaught(coursesTaught.splice(coursesTaught.indexOf(value),1))
        console.log(coursesTaught);    
    }

return (
    <div className="add_detail">
        <br/>
        <h2>Add Faculty <Link style={{float:"right",marginRight:"25px"}} to="/admin/faculty"><i style={{color:"#707070" }}class="fas fa-window-close"></i></Link> </h2> 
        <br/>
        <span className="tag">Personal Details</span>

    <div className="form-top">
       <input type="text" name="firstName" placeholder="First Name" onChange={(e)=>{setFirstName(e.target.value)}} value={firstName}></input> 
       <input type="text" name="middleName" placeholder="Middle Name" onChange={(e)=>{setMiddleName(e.target.value)}} value={middleName}></input> 
       <input type="text" name="lastName" placeholder="Last Name" onChange={(e)=>{setLastName(e.target.value)}} value={lastName}></input> 
       <select value={gender} onChange={(e)=>setGender(e.target.value)}>
           <option value="">Gender</option>
           <option value="Male">Male</option>
           <option value="Female">Female</option>
           <option value="Other">Other</option>
       </select>
       <input type="date" name="dob" onChange={(e)=>{setDob(e.target.value)}} value={dob}></input> 
       <input type="tel" name="mob_no" placeholder="Mobile No." onChange={(e)=>setMob_no(e.target.value)} value={mob_no} ></input>
    </div>

    <div className="form-mid">
       <input type="email" name="email" placeholder="Email id" onChange={(e) => setEmail(e.target.value)} value={email} ></input>
       <input type="email" name="altEmail" placeholder="Alternate Email id" onChange={(e) => setAltEmail(e.target.value)} value={altEmail}></input>
    </div>

    <div className="form-address">
       <input type="text" name="Address1" placeholder="Address Line 1" onChange={(e)=>{setAddress1(e.target.value)}} value={address1}></input> 
       <input type="text" name="Address2" placeholder="Address Line 2" onChange={(e)=>{setAddress2(e.target.value)}} value={address2}></input> 
    </div>

    <div className="form-bottom">
       <input type="text" name="city" placeholder="City" onChange={(e)=>{setCity(e.target.value)}} value={city}></input> 
       <input type="text" name="pincode" placeholder="Pincode" onChange={(e)=>{setPincode(e.target.value)}} value={pincode}></input> 
       <input type="text" name="state" placeholder="State" onChange={(e)=>{setstate(e.target.value)}} value={state}></input> 
       <select value={country} onChange={(e)=>setCountry(e.target.value)}>
            <option value="AFG">Afghanistan</option>
            <option value="ZWE">Zimbabwe</option>
        </select>
    </div>
        <br/>
        <br/>

    <span className="tag">University Details</span>

    <div className="form-acad">
       <input type="text" name="id" placeholder="ID" onChange={(e)=>{setId(e.target.value)}} value={id}></input> 
       <select value={dept} onChange={(e)=>setDept(e.target.value)}>
           <option value="">Department</option>
            {props.department?.map((x)=>(<option>{x.dept_name}</option>))}  
       </select>
 
       <span>
           <select value={branch} onChange={(e=>setBranch(e.target.value))}>
            <option value="">Branch</option>
            {props.branch?.map((x)=>x.branchDept === dept ? <option>{x.branchName}</option>:"")}
           </select>
       </span> 

       <br/>
    </div>
       <span>
            {props.course?.map((x)=>x.courseBranch === branch ? 
            <div><input type="checkbox" style={{display:"inline"}} value={x.courseName} name={x.courseName} onChange={(e)=>addCourseTaught(e.target.checked,e.target.value)}/>{x.courseName}</div>:null)}
       </span>
       <br/>
       <button type="submit" onClick={(e)=>{props.addFaculty({ firstName,middleName,lastName,gender,
        dob,mob_no,email,altEmail,address1,address2,city,pincode,state,country,id,dept,branch,coursesTaught});
        setFirstName("");setMiddleName("");setLastName("");setGender("");setDob("");setMob_no("");setEmail("");setAltEmail("");
        setAddress1("");setAddress2("");setCity("");setPincode("");setstate("");setCountry("");
        setId("");setDept("");setBranch("");setCoursesTaught([])}}>Add</button>
        <br/>
        <br/>
        <br/>
    </div>
)
}

function AddNews(props){
    const [title,setTitle] = React.useState(null);
    const [description,setDescription] = React.useState(null);
    
    return (
        <div className="news-head">
            <h2>News</h2>
            <input type="text" name="title" placeholder="Title" value={title} onChange={(e)=>{setTitle(e.target.value)}}></input>
            <input type="text" name="description" placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)}></input>
            <button type="submit" onClick={(e)=>{props.addNews({title,description});setTitle("");setDescription("")}}>Add</button>
            <div>
                    <div className="news">
                        <table className="table news-table">
                        <thead>
                            <tr>
                                <th className="news-no">Sr. No.</th>
                                <th className="news-title">Title</th>
                                <th className="news-desc">News</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {props.news?.map((x,i)=>(    
                            <tr>
                                <td className="news-no">{i+1}</td>
                                <td className="news-title"><b>{x.title}</b></td>
                                <td className="news-desc">{x.description}</td>
                                <td><button  className="deleteBtn">Delete</button></td>
                            </tr> 
                        ))}
                        </tbody>
                        </table>
                    </div>
            </div>
            <br/>
            <br/>
        </div>
    )
}

function AddDepartment(props){
    const [dept_name,setDeptName]=React.useState(null);

     return (
        <React.Fragment>
            <div className="department-head">
            <h2>Departments</h2>
            <input type="text" name="Department Name" placeholder="Department Name" value={dept_name} onChange={(e)=>{setDeptName(e.target.value)}}></input>
            <button type="submit" onClick={(e)=>{props.addDepartment({dept_name});setDeptName("")}}>Add</button>
            <div>
                    <div className="department">
                        <table className="table dept-table">
                        <thead>
                            <tr>
                                <th>Departments</th>
                            </tr>
                        </thead>
                        <tbody>
                        {props.department?.map((x)=>(    
                            <tr>
                                <td>{x.dept_name}</td>
                            </tr> 
                        ))}
                        </tbody>
                        </table>
                    </div>
                    </div>
            </div>
        </React.Fragment>
     )   
}

function AddBranch(props){
    const [branchName,setBranchName]=React.useState("");
    const [branchDept,setBranchDept] = React.useState("");
     return (
        <React.Fragment>
            <div className="course-head">
            <h2>Branch</h2>
            <input type="text" name="Branch Name" placeholder="Branch Name" value={branchName} onChange={(e)=>{setBranchName(e.target.value)}}></input>
            <select value={branchDept} onChange={(e)=>setBranchDept(e.target.value)}>
                <option value={null}>Select Department</option>
                {props.department?.map((x)=>(
                    <option value={x.dept_name}>{x.dept_name}</option>
                ))}
            </select>
            <button type="submit" onClick={(e)=>{props.addBranch({branchName,branchDept});setBranchName("");setBranchDept("")}}>Add</button>
            <div>
                    <div className="courses">
                        <table className="table course-table">
                        <thead>
                            <tr>
                                <th>Branch</th>
                                <th>Department</th>
                            </tr>
                        </thead>
                        <tbody>
                        {props.branch?.map((x)=>(    
                            <tr>
                                <td>{x.branchName}</td>
                                <td>{x.branchDept}</td>
                            </tr> 
                        ))}
                        </tbody>
                        </table>
                    </div>
                    </div>
            </div>
        </React.Fragment>
     )   
}

function AddCourse(props){
    const [courseName,setCourseName]=React.useState("");
    const [courseCode,setCourseCode]=React.useState("");
    const [courseDept,setCourseDept]=React.useState("");
    const [courseBranch,setCourseBranch]=React.useState("");
     return (
        <React.Fragment>
            <div className="course-head">
            <h2>Courses</h2>
            <input type="text" name="Course Name" placeholder="Course Name" value={courseName} onChange={(e)=>{setCourseName(e.target.value)}}></input>
            <input type="text" name="Course Code" placeholder="Course Code" value={courseCode} onChange={(e)=>{setCourseCode(e.target.value)}}></input>
            <select value={courseDept} onChange={(e)=>setCourseDept(e.target.value)}>
                <option value={null}>Select Department</option>
                {props.department?.map((x)=>(
                    <option value={x.dept_name}>{x.dept_name}</option>
                ))}
            </select>
            <select value={courseBranch} onChange={(e)=>setCourseBranch(e.target.value)}>
                <option value={null}>Select Branch</option>
                {props.branch?.map((x)=>x.branchDept === courseDept ? <option value={x.branchName}>{x.branchName}</option>:null)}
            </select>
            <button type="submit" onClick={(e)=>{props.addCourse({courseName,courseCode,courseDept,courseBranch});setCourseName("");setCourseDept("");setCourseCode("")}}>Add</button>
            <div>
                    <div className="courses">
                        <table className="table course-table">
                        <thead>
                            <tr>
                                <th>Course</th>
                                <th>Course Code</th>
                                <th>Branch</th>
                                <th>Department</th>
                            </tr>
                        </thead>
                        <tbody>
                        {props.course?.map((x)=>(    
                            <tr>
                                <td>{x.courseName}</td>
                                <td>{x.courseCode}</td>
                                <td>{x.courseBranch}</td>
                                <td>{x.courseDept}</td>
                            </tr> 
                        ))}
                        </tbody>
                        </table>
                    </div>
                    </div>
            </div>
        </React.Fragment>
     )   
}

function TimeTable(props){
    const [timetable,setTimetable]=React.useState({file:null});
    const [section,setSection]=React.useState(null);
    const setImage = (e) => {
        //console.log(e.target.files[0].name);
        let file = e.target.files[0];  //Capture the file in variable otherwise event gets nullified and you won't get file.
        console.log(file);
        setTimetable(prevState=>({
            ...prevState,
         //    file:URL.createObjectURL(file)
         file:file
         }))
      }

    return (
        <React.Fragment>
            <div className="news-head">
                <h2>Timetable</h2>
            </div>
            <div>
            <input type="file" name="timetable" onChange={setImage}/>
            <select value={section} onChange={(e)=>setSection(e.target.value)}>
                <option value="">Branch</option>
                {props.branch?.map((x)=><option value={x.branchName}>{x.branchName}</option>)}
            </select>
            <button onClick={(e)=>props.AddTimetable({timetable,section})}>Add</button>
            </div>

            <div className="timetable-list">
            {props.branch?.map((x)=><img src={'/images/'+x.branchName+".png"}></img> ? 
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
            <h2>Payment</h2>
        </div>
        <div className="dashboard-head1"><button  >Add Payment</button></div>
        <div className="dashboard-head1">
            <h2>Student section</h2>
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
    const [title,setTitle] = React.useState(null);
    const [description,setDescription] = React.useState(null);
    
    return (
        <div className="news-head">
            <h2>Messages</h2>
            <input type="text" name="title" placeholder="Title" value={title} onChange={(e)=>{setTitle(e.target.value)}}></input>
            <input type="text" name="description" placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)}></input>
            <button type="submit" onClick={(e)=>{props.addNews({title,description});setTitle("");setDescription("")}}>Add</button>
            <div>
                    <div className="news">
                        <table className="table news-table">
                        <thead>
                            <tr>
                                <th className="news-no">Sr. No.</th>
                                <th className="news-title">Title</th>
                                <th className="news-desc">Message</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {props.news?.map((x,i)=>(    
                            <tr>
                                <td className="news-no">{i+1}</td>
                                <td className="news-title"><b>{x.title}</b></td>
                                <td className="news-desc">{x.description}</td>
                                <td><button  className="deleteBtn">Delete</button></td>
                            </tr> 
                        ))}
                        </tbody>
                        </table>
                    </div>
            </div>
            <br/>
            <br/>
        </div>
    )
}

function BusShedule(props){
  
  
    return (
        <React.Fragment>
        <div className="dashboard-head">
            <h2>BUS SHEDULE</h2>
        </div>
        <div className="dashboard-head1"><button  >Add Bus Shedule</button></div>
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
