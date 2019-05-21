const questionOperations = {
    questions:[],
    add(question){
        this.questions.push(question);
    },
    delete(){
    
    },
    mark(id){
    var question = this.questions.find(questionObject =>questionObject.id==id);
    question.markForDelete = !question.markForDelete;
    },
    update(){
    
    },
    mark(id){
    var questionObject = this.questions.find(question=>question.id==id);
    questionObject.toggle();
    },
    countMark(){

      return this.questions.filter(question=>question.markForDelete==true).length;       
    },
    countUnMark(){

        return this.questions.length - this.countMark();
    },
    sort(){
    
    }
    }