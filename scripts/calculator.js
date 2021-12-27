function p()
{
    p_val = (Math.pow(k2_val/k_val, 1/t_val)-1)*100;
    document.getElementById("p").value = p_val;
};
function k()
{
    k_val = k2_val/(Math.pow(1+(p_val/100), t_val));
    document.getElementById("k").value = k_val;
};
function k2()
{
    k2_val = k_val*Math.pow(((p_val/100)+1), t_val);
    document.getElementById("k2").value = k2_val;
};
function t()
{
    t_val = Math.log(k2_val/k_val)/Math.log(1+(p_val/100));
    document.getElementById("t").value = t_val;
};
function clearInput()
{
    p_val=0.0;
    k_val=0.0;
    k2_val = 0.0;
    t_val = 0.0;
    document.getElementById("p").value = "";
    document.getElementById("k").value = "";
    document.getElementById("k2").value = "";
    document.getElementById("t").value = "";
};
function calculate()
{
    p_val=parseFloat(document.getElementById("p").value);
    k_val=parseFloat(document.getElementById("k").value);
    k2_val = parseFloat(document.getElementById("k2").value);
    t_val = parseFloat(document.getElementById("t").value);
    if (document.getElementById("p").value == "")
    {
        p();
    }
    else if (document.getElementById("k").value == "")
    {
        k();
    }
    else if (document.getElementById("k2").value == "")
    {
        k2();
    }
    else if (document.getElementById("t").value == "")
    {
        t();
    }
}
var p_val=0.0;
var k_val=0.0;
var k2_val = 0.0;
var t_val = 0.0;