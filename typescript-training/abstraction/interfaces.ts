//abstract and interface

//interface : 100% abstract class
interface Application1{
    loginApplication():void;
    logoutFromApplication():void;
}
interface Application2{
    verifyHomepage():void;
    verifyDashboard():void;
}
//extends -> Extending the helping - one help to another 
//Implements = Implementing parent class unimplemented method in child class.

class Google implements Application1,Application2{
    loginApplication():void{
        console.log("Lanuch Application");
        console.log("Enter Credential");
        console.log("Click on the login and verify the login is successfull");
    }

    logoutFromApplication(): void {
        console.log("Click on the logout button.");
        console.log("Verify loout is successful.");
    }

    verifyHomepage(): void {
        console.log("Verfiy Google home page.....");
    }

    verifyDashboard(): void {
        console.log("Verfiy Google Dashboard");
    }
}

let obj=new Google();
obj.loginApplication();
obj.loginApplication();
obj.loginApplication();
obj.loginApplication();