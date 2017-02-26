/**
 * Created by snanda on 2/20/17.
 */
import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { ClarityModule } from 'clarity-angular';

import
{ TreeViewComponent }   from './treeview.component';
import
{ TreeViewBuilderService }   from './services/treeview.builder.service';

@NgModule({
  imports:      [ CommonModule, FormsModule, ClarityModule.forRoot() ],
  declarations: [ TreeViewComponent],
  exports:      [ TreeViewComponent ],
  providers:    [ TreeViewBuilderService ]
})
export class SideNavModule { }
