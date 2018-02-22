

export class Task {

  type : string = "";
  description : string = "";
  duration : number = 0;
  relevance : number = 0;

  constructor(
    _type : string, 
    _description : string, 
    _duration : number,
    _relevance : number
  ){
    this.type = _type;
    this.description = _description;
    this.duration = _duration;
    this.relevance = _relevance;
  }

}
