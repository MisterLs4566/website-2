function write_dates(subjects, date)
{
    for(var i=0; i < Object.keys(subjects).length; i++)
    {
        if (Object.values(subjects)[i][0] != "/")
        {
            if (Object.values(subjects)[i][1].split(" ") != date)
            {
                document.getElementById("subjects").innerHTML+=Object.keys(subjects)[i];
                document.getElementById("subjects").innerHTML+=":     ";
                document.getElementById("subjects").innerHTML+=Object.values(subjects)[i][0];
                if (Object.values(subjects)[i][1].split(" ")[1] == date[1])
                {
                    var difference = parseInt(Object.values(subjects)[i][1].split(" ")[2])-parseInt(date[2]);
                    if (difference >= 0)
                    {
                        document.getElementById("subjects").innerHTML+=" in ";
                    }
                    else 
                    {
                        document.getElementById("subjects").innerHTML+=" vor ";
                    }
                    document.getElementById("subjects").innerHTML+= difference;
                    if (difference == 1)
                    {
                        document.getElementById("subjects").innerHTML+=" Tag";
                    }
                    else
                    {
                        document.getElementById("subjects").innerHTML+=" Tagen";
                    }
                }
                document.getElementById("subjects").innerHTML+="<br><br>";
            }
        }
    }
}
var date = new Date().toDateString().split(" ");
console.log(date);
var subjects = {"Französisch": ["20.12.2021 (Montag)", "Mon Dec 20 2021"]}   
write_dates(subjects, date)
