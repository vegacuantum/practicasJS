const juan = {
    name: "juanito",
    age: 18,
    aprovedCursos: ["curso1", "Curso2", "Curso3" ],
    addCourse(newCourse){
        console.log("this", this);
        console.log("this.aprovedCursos", this.aprovedCursos());
        this.aprovedCursos.push(newCourse);
    }
};

// console.log(Object.keys(juan));
// console.log(Object.getOwnPropertyNames(juan));
// console.log(Object.entries(juan));

// mostrar mas en entries
//  console.log(Object.entries(juan)[3][1]("curso4"));

 // la mas importante de todas la spropiedades estatitcas
 console.log(Object.getOwnPropertyDescriptors(juan));

