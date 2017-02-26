/**
 * Created by snanda on 2/20/17.
 */
import { Injectable } from '@angular/core';

@Injectable()
/** Dummy version of an authenticated user service */
export class TreeViewBuilderService {
  public buildTree(): any[] {
    return [
      {
        name: "Applications",
        icon: "folder",
        expanded: true,
        files: [
          {
            icon: "calendar",
            name: "Calendar",
            active: true
          },
          {
            icon: "line-chart",
            name: "Charts",
            active: false
          },
          {
            icon: "dashboard",
            name: "Dashboard",
            active: false
          },
          {
            icon: "map",
            name: "Maps",
            active: false
          }
        ]
      },
      {
        name: "Files",
        icon: "folder",
        expanded: false,
        files: [
          {
            icon: "file",
            name: "Cover Letter.doc",
            active: false
          }
        ]
      },
      {
        name: "Images",
        icon: "folder",
        expanded: false,
        files: [
          {
            icon: "image",
            name: "Screenshot.png",
            active: false
          }
        ]
      }
    ];
  }
}
