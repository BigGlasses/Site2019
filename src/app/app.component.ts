import { AccessService } from './landing/access.service';
import { CodeProject } from './landing/access.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  title = 'Site2019';
  projectsByYear: ProjectDisplay[];

  constructor(private access: AccessService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    access.getData((value: CodeProject[]) => {
      var projects: ProjectDisplay[] = [];
      var prepare = {};
      for (let index = 0; index < value.length; index++) {
        var project: CodeProject = value[index];
        project.imageSources = [];
        for (let j = 1; j < project.imageCount + 1; j++) {
          project.imageSources.push("assets/projectimages/" + project.projectCodeName + "/screen" + j + ".png")
        }
        if (prepare[project.startYear]) {
          prepare[project.startYear].push(project);
        }
        else {
          prepare[project.startYear] = [project];
        }
      }

      for (var key in prepare) {
        projects.push({
          year: key,
          projects: prepare[key]
        })
      }
      projects = projects.sort(function(a, b){return Number(b.year) - Number(a.year)});
      this.projectsByYear = projects;
    });
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  private _mobileQueryListener: () => void;

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


  goTo(element): void {
    document.getElementById(element).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

}

interface ProjectDisplay {
  year: string,
  projects: CodeProject[];
}