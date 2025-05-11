//You are building a feature rollout system for a startup where a FeatureToggle constructor function has properties: 
// featureName (string), isEnabled (boolean), and userGroupAccess (array of strings like "betaTesters", "admins"), and you must use a 
// prototype method canAccess(userRole) to return true or false, a method toggleFeature(flag) to enable or disable the feature, and simulate access attempts 
// using if-else and switch statements for different roles.

class FeatureToggle{
    constructor(featureName, isEnabled,userGRoupAccess){
        this.featureName=featureName;
        this.isEnabled=isEnabled;
        this.userGRoupAccess=userGRoupAccess;
    }
}
FeatureToggle.prototype.canAccess=function(userRole){
    return this.userGRoupAccess.includes(userRole);
    }

FeatureToggle.prototype.toggleFeature=function(flag){
    this.isEnabled=flag;
}

const darkMode= new FeatureToggle("dark mode", true, ["betaTesters", "admins"]);
console.log(darkMode)
console.log(darkMode.canAccess("admin"));
console.log(darkMode.toggleFeature("dark mode"))
console.log(darkMode.canAccess("betaTesters"))

function access(roles){
    roles.forEach((role)=> {
        switch(role){
            case "admin":
            console.log("Aceess granted")
            break;
            case "betaTester":
            console.log("Access denied")
            break;
            default:
            console.log("Role not supported")
            break;
        }
    })
}

const roles =["admin", "betaTester","new user"]
access(roles)

//In a freelancer time-tracking platform, create a TimeLog constructor function with properties: freelancerName (string), 
// projectDetails (object with name and hourlyRate), and logs (array of objects with date, hoursWorked), then add prototype methods 
// to calculate total earnings, filter logs by date range, and determine if weekly hours exceed 40 using if-else logic.

class TimeLog{
    constructor(freeLancerName, projectDetails, logs){
        this.freeLancerName=freeLancerName;
        this.projectDetails=projectDetails;
        this.logs=logs;
    }
}

TimeLog.prototype.calculateEarnings=function(){
    return this.logs.reduce((acc,item) => acc+item.hoursWorked*this.projectDetails.hourlyRate,0);
    
};
TimeLog.prototype.logsByDateRange=function(startDate, endDate){
    
    return this.logs.filter(log=> {
        const date= new Date(log.date)
       return date>=new Date(startDate) && date<= new Date(endDate);
    });
}
TimeLog.prototype.weeklyHours=function(){
    const totalHours=this.logs.reduce((acc,item)=>acc+item.hoursWorked,0);
    if(totalHours>40){
        console.log("Over 40 hours worked")
    }else{
        console.log("Hours worked within limit")
    }

}

const mariam=new TimeLog("Mariam Kibet",{name:"UX-Design",hourlyRate: 200},[
    {date:"2025-02-12", hoursWorked: 20},
    {date:"2024-11-02", hoursWorked: 45},
    {date:"2025-02-15", hoursWorked: 30}
]);
console.log(mariam)
console.log(log.calculateEarnings())
console.log(logs.weeklyHours())
console.log(logs.logsByDateRange())

//You are developing a startup’s order management system where an Order constructor function should contain customer (object with name and email), 
// items (array of objects with productName, quantity, and unitPrice), and status (string), then implement prototype methods to compute total cost,
//  update order status based on payment, and categorize order urgency using switch and conditional statements.

class OrderManagementSystem{
    constructor(customer,items, status){
        this.customer=customer;
        this.items=items;
        this.status=status;
    }
}
OrderManagementSystem.prototype.totalCost=function(){
    const totalCost=this.items.reduce((acc,item)=>acc+item.quantity*item.unitPrice,0);
    return totalCost
};

OrderManagementSystem.prototype.orderStatus=function(paymentReceived){
    if(this.orderStatus==paymentReceived){
        return "Paid"
    }else{
        return "Not paid"
    }
}

OrderManagementSystem.prototype.orderUrgency=function(){
    switch(this.status){
        case "delivered":
            console.log("low")
            break;
        case "processing":
            console.log("high")
            break;
        case "cancelled":
            console.log("no urgency")
            break;
        default:
            console.log("No such order")
            break;
        
    }
}
const jane=new OrderManagementSystem({name: "Jane Njer", email: "njeri@gmail.com"},[
    {productName: "cooking pan", quantity: 3, unitPrice: 3500},
    {productName: "blender", quantity: 2, unitPrice: 5500},
    {productName: "iron box", quantity: 4, unitPrice: 2999}
], "proccessing");
console.log({jane})



//Build a simple e-learning system where a Course class has properties: title (string), instructor (object with name and expertise), 
// and students (array of objects with name and completionStatus), then add prototype methods to return names of students who completed 
// the course, count enrolled students by expertise area, and use control flow to output different messages for instructors with more or less than 5 students.

class Course{
    constructor(title,instructor,students){
        this.title=title;
        this.instructor=instructor;
        this.students=students;
    }
};
Course.prototype.completedCourse=function(){
    const completed=[];
    for(const student of this.students){
        if(student.completionStatus==="completed"){
            completed.push(student.name)
        }
    }
    return completed
}

Course.prototype.countEnrolled=function(){
    let count=0;
    for(const student of this.students){
        if(student.expertiseArea===this.instructor.expertise){
            count++
        }
    }
    return count++
}
Course.prototype.messageInstructor=function(){
    const studentCount=this.students.length;
    if(studentCount>5){
        console.log(`Instructor${this.instructor.name} has ${studentCount} students`)
    }else{
        console.log(`Instructor ${this.instructor.name} has ${studentCount} students`)
    }
};

const hanna = new Course("Nursing",{name: "Hanna Kadzo", expertise: "Midwifrey"},[
    {name: "Elizabeth Mwongeli", completionStatus: "in progress"},
    {name: "Magdalene Mutunga", completionStatus: "completed"},
    {name: "Alexandre Maiso", completionStatus: "completed"},
    {name: "Michael Kirui", completionStatus: "in progress"},
    {name: "Said Juma", completionStatus: "in progress"}
]);

console.log(hanna.completedCourse())
console.log(hanna.countEnrolled())
console.log(hanna.messageInstructor())
