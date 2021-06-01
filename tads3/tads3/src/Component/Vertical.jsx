import Grid from "./Grid.jsx"
import React from 'react';
import './vertical.scss';
import "bootstrap/dist/css/bootstrap.min.css";
class App extends React.Component {
  state = {
        drawerPos: 1
    };

    handleDrawer=() => {
        if (this.state.drawerPos < 1) {
            this.setState((state)=> ({
                drawerPos: state.drawerPos + 1
            }));
        } else {
            this.setState({
                drawerPos: 0
            })
        }
    };
	render() {
        
    let drawerClass = [];
    let mainClass = [];
     if (this.state.drawerPos === 1) {
        drawerClass.push("drawerOpen");
            mainClass.push("mainOpen");
        } else {
            drawerClass = [];
            mainClass = [];
        }
    
		return (

			<div className="App2">
         <navbar> <i className="material-icons" onClick={this.handleDrawer}>Menu</i> 
         <h3> Alison</h3>
         <input type="text" placeholder="Search.."></input>
         </navbar>
        <aside className={drawerClass.join(" ")} >
          <ul>
            <li><i className="material-icons">dashboard</i><span>Dashboard</span></li>
          
            
            <li><i className="material-icons">people</i><span>Clients</span></li>
            <li><i className="material-icons">show_chart</i><span>Sales</span></li>
            <li><i className="material-icons">table_chart</i><span>Others</span></li>
          </ul>
          
        </aside>
       
        <main className={mainClass.join(" ")}>
          <p>
        <Grid></Grid>
        </p>
        </main>
        
			</div>
		);
	}
}

export default App;