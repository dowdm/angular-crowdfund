export class Project {

  currentFunding: number = 0;
  constructor(public type: string, public title:string, public description: string, public starter: string, public goal: number){
  }
}
