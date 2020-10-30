function mail()
{

    var email=document.getElementById("myform").elements[1].value;
        var filter=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(!filter.test(email)){
            document.getElementById("maer").innerHTML="invalid mail!";
            document.getElementById("maer").style.color="red";
            return false;
        }
        else
        {
            document.getElementById("maer").innerHTML="valid mail";
            document.getElementById("maer").style.color="green";
            return true;
        }
}
function pas()
{
    var pass=document.getElementById("myform").elements[2].value;
    pattern= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!#\?])(?=.{8,})/;
    if(pass.match(pattern))
    {
      document.getElementById("p1er").innerHTML="valid password";
      document.getElementById("p1er").style.color="green"; 
      return true;
    }
    else
    {
      document.getElementById("p1er").innerHTML="invalid password!";
      document.getElementById("p1er").style.color="red"; 
      return false;
    }
}
function cpas()
{
    var pass=document.getElementById("myform").elements[2].value;
    var cpass=document.getElementById("myform").elements[3].value; 
    if(cpass.length>=8&&pass==cpass)
    {
        document.getElementById("cper").innerHTML="password match";
        document.getElementById("cper").style.color="green";
        return true;
    }
    else
    {
        document.getElementById("cper").innerHTML="password mismatch!";
      document.getElementById("cper").style.color="red"; 
      return false;
    }
}
function mo()
{
    var inputtxt=document.getElementById("myform").elements[6].value;
  var phoneno = /^1?(\d{3})(\d{3})(\d{4})$/;
  if(inputtxt.length==10&&inputtxt.match(phoneno))
  {
    document.getElementById("mer").innerHTML="valid mobilenumber";
    document.getElementById("mer").style.color="green"; 
    return true;
  }
  else
  {
    document.getElementById("mer").innerHTML="invalid mobilenumber!";
    document.getElementById("mer").style.color="red"; 
    return false;
  }
}
function sub()
{
  var mno=mo();
    var email=mail();
    var cpass=cpas();
    var pass=pas();
  if(email==true&&pass==true&&cpass==true&&mno==true)
    {
        alert("Registed Successfully")
    }
    else
    {
      alert("please give valid data!")
    }
    
}