/**
 * Created by snanda on 2/20/17.
 */
import { Component, OnInit, Input } from '@angular/core';
import {TreeViewBuilderService} from './services/treeview.builder.service';
import {BackendService} from '../services/backend.service';


@Component({
  selector: 'side-navigator',
  template: `<tree-view [directories]="rootDirectories"></tree-view>`,
  providers: [TreeViewBuilderService, BackendService]
})
export class SideNavigatorComponent implements OnInit {
  public rootDirectories: any[];

  private errorMessage: string;
  constructor(private treeViewBuilder: TreeViewBuilderService,
        private backend: BackendService) {}

  ngOnInit() {
    this.backend.getTree().subscribe(
         directory => this.rootDirectories = [directory],
         error =>  this.errorMessage = <any>error
    )
  }

}
