export class Item {
    constructor(
        public id:number, 
        public familyId:number, 
        public description:string, 
        public text:string, 
        public pictureUrl:string, 
        public price:number, 
        public stock:number
        ){}
}
