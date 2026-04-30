function addStudent(){
    let Name = document.getElementById("Name").value;
    let status = document.getElementById("status").value;

    if(Name === ""){
        alert("Enter Name");
        return;
    }
    let Students = JSON.parse(localStorage.getItem("Students")) || [];

    Students.push({Name:Name,status:status});
    localStorage.setItem("Students",JSON.stringify(Students));

    alert("Student added!");
    document.getElementById("Name").value="";
}