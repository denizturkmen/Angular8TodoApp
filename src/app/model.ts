export class Model {
    user;
    items;

    constructor() {
        this.user = "Deniz";
        this.items = [
                        new TodoItem("Spor",true),    
                        new TodoItem("Kahvaltı",false),    
                        new TodoItem("Kitap Okumak",false),    
                        new TodoItem("Sinema",false),    
                     ];
                   /*  items= [
                        { description: "Kahvaltı", action:"No" },
                        { description: "Sinema", action:"No" },
                        { description: "Spor", action:"No" },
                        { description: "Ders Çalışma", action:"No" }
                      ];*/
    }
}

export class TodoItem {
    description;
    action;

    constructor(description, action) {
        this.description = description;
        this.action = action;
    }
}