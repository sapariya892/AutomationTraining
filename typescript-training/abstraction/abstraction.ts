//Abstraction : abstraction is the concept of hiding the implementation.

//method: a method is bolock of code or collection of statements written toghether inside the block to perform specfic tasks.
abstract class Application{
    loginApplication():void{
        console.log("Lanuch Application");
        console.log("Enter Credential");
        console.log("Click on the login and verify the login is successfull");
    }
    abstract logoutFromApplication():void;
    //Method without body,
    //
}
class facebook{
    //let obj=new Application();
}
abstract class Google extends Application{

    logoutFromApplication(): void {
        console.log("Click on the logout button.");
        console.log("Verify loout is successful.");
    }
    getMethod(){
        this.loginApplication
    }
}