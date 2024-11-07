import { Injectable } from '@angular/core';
import { Project } from '../_models/project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[]=[
    {id:0, name:"Sample Python Project", pictures:["../../assets/peakpx.jpg", "../../assets/peakpx (2).jpg", "../../assets/peakpx (3).jpg"], projectLink:"//www.github.com",summary: "Python project that analyzes stock market data.", description:"jhavfiua fiuf visufboiasgf gowe uaysd jshvfhfd", tags:[Tag.PYTHON]},
    {id:1, name:"Sample Angular Project", pictures:["../../assets/peakpx.jpg", "../../assets/peakpx (2).jpg", "../../assets/peakpx (3).jpg"], projectLink:"//www.github.com",summary: "FullStack web app developed using angular and node.", description:"jhavfiua fiuf visufboiasgf gowe uaysd jshvfhfd", tags:[Tag.ANGULAR, Tag.TYPESCRIPT]},
    {id:2, name:"Sample .Net Project", pictures:["../../assets/peakpx.jpg", "../../assets/peakpx (2).jpg", "../../assets/peakpx (3).jpg"], projectLink:"//www.github.com",summary: "FyllStack web app using ASP.NET and React.", description:"jhavfiua fiuf visufboiasgf gowe uaysd jshvfhfd", tags:[Tag.ASPNET, Tag.REACT]},
    {id:3, name:"Sample API Project", pictures:["../../assets/peakpx.jpg", "../../assets/peakpx (2).jpg", "../../assets/peakpx (3).jpg"], projectLink:"//www.github.com",summary: "Web API Project that was developed for a class project.", description:"jhavfiua fiuf visufboiasgf gowe uaysd jshvfhfd", tags:[Tag.REACT, Tag.JAVASCRIPT]},
    {id:4, name:"Chrome extension Project", pictures:["../../assets/peakpx.jpg", "../../assets/peakpx (2).jpg", "../../assets/peakpx (3).jpg"], projectLink:"//www.github.com",summary: "Developed a chrome extension that tracks the prices of a furniture.", description:"jhavfiua fiuf visufboiasgf gowe uaysd jshvfhfd", tags:[Tag.JAVA, Tag.CSHARP]},
    {id:5, name:"Mobile App", pictures:["../../assets/peakpx.jpg", "../../assets/peakpx (2).jpg", "../../assets/peakpx (3).jpg"], projectLink:"//www.github.com",summary: "Mobile app developed in java that tracks the departure and arrival of trains.", description:"jhavfiua fiuf visufboiasgf gowe uaysd jshvfhfd", tags:[Tag.JAVA, Tag.REACT]}
  ];

  constructor() { 
    
  }

  GetProjects(){
    return this.projects;
  }

  GetProjectById(id:number): Project{
    let project = this.projects.find(project => project.id === id);
    if(project === undefined){
      throw new TypeError("There is no project that matchs the id: "+id);
    }
    return project;
  }

  GetProjectsByFilter(filterTags: Tag[]){
    let filteredProjects: Project[] = [];
    this.projects.forEach(function (project){
      let foundAll = true;

      filterTags.forEach(function(filterTag){
        if(project.tags.includes(filterTag)==false){
          foundAll=false;
        }
      });
      if(foundAll){
        filteredProjects.push(project);
      }
    });

    return filteredProjects;
  }
}
