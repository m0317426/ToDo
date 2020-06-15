export class ToDo {

    id:number;
    titel: string;
    done: boolean;
    omschrijving: string;

    constructor (id:number,titel:string,omschrijving:string,done:boolean){

        this.id=id;
        this.titel=titel;
        this.omschrijving=omschrijving;
        this.done=done;
    }

}