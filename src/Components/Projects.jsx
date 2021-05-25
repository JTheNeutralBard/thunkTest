import { Divider, Button } from 'antd';
import React from 'react';
import './Projects.css'
import ThunkableBeaver from '../assets/ThunkableBeaver.png';
import PlusSign from '../assets/PlusSign.svg';

class Projects extends React.Component {

    constructor(props){
        super(props);
        this.state = {projects: []};
    }

    renderNewProject() {
        alert('iswork');

    }

    render() {
        return (
            <div id='projects_page'>
                <div class='pageheader'>
                    <img id='header_logo' src={ThunkableBeaver}/>
                    <h class='projectPageHeaderText'>MY PROJECTS</h>
                </div>
                <Divider orientation="right"><Button id='new_project_button' type="primary" shape="circle" icon={<img class='plusSign' src={PlusSign}/>} size='large' onClick={this.renderNewProject}/></Divider>
                <div class='containerRelative'>
                    <div id='projects_list_container'>fdwf</div>
                </div>
            </div>
        );
      }
}

export default Projects;