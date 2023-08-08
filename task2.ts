import {question} from "readline-sync";
function calc_credit()
{
    let bal=question("Enter balance:\n");
    let bal1:number=parseInt(bal);
    while(bal1>100)
    {
        console.log('Enter value again:');
        bal=question();
        bal1=parseInt(bal);
    }
    let min_bal=question("Enter minimum balance:\n");
    let min_bal1:number=parseInt(min_bal);
    while(min_bal1>100)
    {
        console.log('Enter value again:');
        min_bal=question();
        min_bal1=parseInt(min_bal);
    }

    let max_bal=question("Enter maximum balance:\n");
    let max_bal1:number=parseInt(max_bal);
    while(max_bal1>100)
    {
        console.log('Enter value again:');
        max_bal=question();
        max_bal1=parseInt(max_bal);
    }

    const sum_credit:number=bal1+min_bal1+max_bal1;

    if(sum_credit>=250 && sum_credit<=300)
    {
        console.log('A+');
    }

    else if(sum_credit>=220 && sum_credit<=250)
    {
        console.log('B');
    }

    else if(sum_credit>=180 && sum_credit<=220)
    {
        console.log('C');
    }

    else if(sum_credit>=150 && sum_credit<=180)
    {
        console.log('D');
    }

    else
    {
        console.log('Low');
    }
}

calc_credit();