import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'
import { Project } from '../_models/project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{

  projects = {} as Project[];

  filtering: boolean = false;

  isCollapsed: boolean = true;
  typescript: boolean = false;
  angular: boolean= false;


  constructor(private titleService: Title, private projectService: ProjectsService){
    this.titleService.setTitle('Devdutt - Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  filter(){
    let filterTags: Tag[] = [];

    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT);
    }

    if(this.angular){
      filterTags.push(Tag.ANGULAR);
    }

    if(this.angular || this.typescript){
      this.filtering = true;
    }
    else{
      this.filtering = false;
    }

    this.projects = this.projectService.GetProjectsByFilter(filterTags);
  }

  ResetFilters(){
    this.typescript = false;
    this.angular = false;
    this.filtering = false;
    this.projects = this.projectService.GetProjects();
  }
}
