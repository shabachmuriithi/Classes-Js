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
    const earning=this.logs.reduce((acc,item) => acc+item.hoursWorked*this.projectDetails.hourlyRate,0);
    return earning;
}
TimeLog.prototype.logsByDateRange=function(startDate, endDate){
    
    return this.logs.filter(log=> log.date>=startDate && log.date<= endDate)
}
TimeLog.prototype.weeklyHours=function(){
    const totalHours=this.logs.reduce((acc,item)=>acc+item.hoursWorked,0);
    if(totalHours>40){
        console.log("Over 40 hours worked")
    }else{
        console.log("Hours worked within limit")
    }

}

const mariam=new TimeLog("Mariam",{name:"UX-Design",hourlyRate: 200},)

//You are developing a startup’s order management system where an Order constructor function should contain customer (object with name and email), 
// items (array of objects with productName, quantity, and unitPrice), and status (string), then implement prototype methods to compute total cost,
//  update order status based on payment, and categorize order urgency using switch and conditional statements.

// class OrderManagementSystem{
//     constructor(customer,items, status){
//         this.customer=customer;
//         this.items=items;
//         this.status=status;
//     }
// }
// OrderManagementSystem.prototype.totalCost=function(){
//     const totalCost=this.items.reduce((acc,item)=>acc+item.quantity*item.unitPrice,0);
//     return totalCost
// };

// OrderManagementSystem.prototype.orderStatus=function(paymentReceived){
//     if(this.orderStatus==paymentReceived){
//         return "Paid"
//     }else{
//         return "Not paid"
//     }
// }
// OrderManagementSystem.prototype.orderUrgency=function(){
//     const totalCost=this.totalCost();
//     switch()
// }
