/**
 * Created by snanda on 2/20/17.
 */
import { Component, OnInit, Input } from '@angular/core';
import {TreeViewBuilderService} from './services/treeview.builder.service';
import {BackendService} from '../services/backend.service';


@Component({
  selector: 'tree-view',
  templateUrl: './treeview.component.html',
  providers: [TreeViewBuilderService, BackendService]
})
export class TreeViewComponent implements OnInit {
   @Input()
   public directories: any[];

   private errorMessage: any;

   constructor(private treeViewBuilder:TreeViewBuilderService,
               private backendService: BackendService) {
   }

   ngOnInit() {
   }

   isEmpty(directory: any): boolean {
     if (!directory ||
          this.isNullOrEmpty(directory.directories) ||
          this.isNullOrEmpty(directory.files)) {
       return true;
     }
     return false;
   }

   private isNullOrEmpty(value: any) {
     if (value === null || typeof value === 'undefined' || value.length === 0 ) {
       return true;
     }
     return false;
   }
   public openFile(directoryName: string, fileName: string) {

  }
}
