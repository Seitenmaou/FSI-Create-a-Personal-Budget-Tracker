let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here

//default false, uses while loop when true
let useWhileLoop = false;
//default false, reverses question order aka iteraion when true
let reverseQuestionOrder =false;

if (useWhileLoop)
{
    if (reverseQuestionOrder)
    {
        let i = weeklyExpenseQuestions.length - 1;
        while (i >= 0)
        {
            let userAnswer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
            weeklyExpenses += userAnswer
            i--
        }
        i = monthlyExpenseQuestions.length - 1;
        while (i >= 0)
        {
            let userAnswer = parseFloat(window.prompt(monthlyExpenseQuestions[i]))
            monthlyExpenses += userAnswer
            i--
        }
        i = annualExpenseQuestions.length - 1;
        while (i >= 0)
        {
            let userAnswer = parseFloat(window.prompt(annualExpenseQuestions[i]))
            annualExpenses += userAnswer
            i--
        }
    }
    else
    {
        let i = 0;
        while (i < weeklyExpenseQuestions.length)
        {
            let userAnswer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
            weeklyExpenses += userAnswer
            i++
        }
        i = 0;
        while (i < monthlyExpenseQuestions.length)
        {
            let userAnswer = parseFloat(window.prompt(monthlyExpenseQuestions[i]))
            monthlyExpenses += userAnswer
            i++
        }
        i = 0;
        while (i < annualExpenseQuestions.length)
        {
            let userAnswer = parseFloat(window.prompt(annualExpenseQuestions[i]))
            annualExpenses += userAnswer
            i++
        }
    }
}
else
{
    if (reverseQuestionOrder)
    {
        for(let i = weeklyExpenseQuestions.length - 1; i >= 0; i--)
        {
        let userAnswer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
        weeklyExpenses += userAnswer
        }

        for(let i = monthlyExpenseQuestions.length - 1; i >= 0; i--)
        {
        let userAnswer = parseFloat(window.prompt(monthlyExpenseQuestions[i]))
        monthlyExpenses += userAnswer
        }

        for(let i = annualExpenseQuestions.length - 1; i >= 0; i--)
        {
        let userAnswer = parseFloat(window.prompt(annualExpenseQuestions[i]))
        annualExpenses += userAnswer
        }
    }
    else
    {
        for(let i = 0; i < weeklyExpenseQuestions.length; i++)
        {
        let userAnswer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
        weeklyExpenses += userAnswer
        }

        for(let i = 0; i < monthlyExpenseQuestions.length; i++)
        {
        let userAnswer = parseFloat(window.prompt(monthlyExpenseQuestions[i]))
        monthlyExpenses += userAnswer
        }

        for(let i = 0; i < annualExpenseQuestions.length; i++)
        {
        let userAnswer = parseFloat(window.prompt(annualExpenseQuestions[i]))
        annualExpenses += userAnswer
        }
    }
}


