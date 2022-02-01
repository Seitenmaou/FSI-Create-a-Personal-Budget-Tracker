let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here

//default false, uses while loop when true
let useWhileLoop = false;
//default false, reverses question order aka iteraion when true
let reverseQuestionOrder =false;

//use while loop
if (useWhileLoop)
{
    //use while loop and ask question in reverse order
    if (reverseQuestionOrder)
    {
        //ask questions on weekly expences, while loop, reverse
        let i = weeklyExpenseQuestions.length - 1;
        while (i >= 0)
        {
            let userAnswer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
            weeklyExpenses += userAnswer
            i--
        }
        //ask questions on monthly expences, while loop, reverse
        i = monthlyExpenseQuestions.length - 1;
        while (i >= 0)
        {
            let userAnswer = parseFloat(window.prompt(monthlyExpenseQuestions[i]))
            monthlyExpenses += userAnswer
            i--
        }
        //ask questions on annual expences, while loop, reverse
        i = annualExpenseQuestions.length - 1;
        while (i >= 0)
        {
            let userAnswer = parseFloat(window.prompt(annualExpenseQuestions[i]))
            annualExpenses += userAnswer
            i--
        }
    }
    //use while loop and ask question in chronological order
    else
    {
        //ask questions on weekly expences, while loop, chronological
        let i = 0;
        while (i < weeklyExpenseQuestions.length)
        {
            let userAnswer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
            weeklyExpenses += userAnswer
            i++
        }
        //ask questions on monthly expences, while loop, chronological
        i = 0;
        while (i < monthlyExpenseQuestions.length)
        {
            let userAnswer = parseFloat(window.prompt(monthlyExpenseQuestions[i]))
            monthlyExpenses += userAnswer
            i++
        }
        //ask questions on annual expences, while loop, chronological
        i = 0;
        while (i < annualExpenseQuestions.length)
        {
            let userAnswer = parseFloat(window.prompt(annualExpenseQuestions[i]))
            annualExpenses += userAnswer
            i++
        }
    }
}
//use for loop
else
{
    //use for loop and ask question in reverse order
    if (reverseQuestionOrder)
    {
        //ask questions on weekly expences, for loop, reverse
        for(let i = weeklyExpenseQuestions.length - 1; i >= 0; i--)
        {
        let userAnswer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
        weeklyExpenses += userAnswer
        }
        //ask questions on monthly expences, for loop, reverse
        for(let i = monthlyExpenseQuestions.length - 1; i >= 0; i--)
        {
        let userAnswer = parseFloat(window.prompt(monthlyExpenseQuestions[i]))
        monthlyExpenses += userAnswer
        }
        //ask questions on annual expences, for loop, reverse
        for(let i = annualExpenseQuestions.length - 1; i >= 0; i--)
        {
        let userAnswer = parseFloat(window.prompt(annualExpenseQuestions[i]))
        annualExpenses += userAnswer
        }
    }
    //use for loop and ask question in chronological order
    else
    {
        //ask questions on weekly expences, for loop, chronological
        for(let i = 0; i < weeklyExpenseQuestions.length; i++)
        {
        let userAnswer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
        weeklyExpenses += userAnswer
        }
        //ask questions on monthly expences, for loop, chronological
        for(let i = 0; i < monthlyExpenseQuestions.length; i++)
        {
        let userAnswer = parseFloat(window.prompt(monthlyExpenseQuestions[i]))
        monthlyExpenses += userAnswer
        }
        //ask questions on annual expences, for loop, chronological
        for(let i = 0; i < annualExpenseQuestions.length; i++)
        {
        let userAnswer = parseFloat(window.prompt(annualExpenseQuestions[i]))
        annualExpenses += userAnswer
        }
    }
}


