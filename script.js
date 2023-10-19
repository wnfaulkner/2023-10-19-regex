
//In the console, create a JS regex object using literal syntax and assign it to a variable named re.
/(\d{3})[ -]\d{3}[ -]\d{4}/

//Match an American Express Credit Card Number which always begin with 34 or 37 and totals 15 digits.
/(34|37)\d{13}/ //my solution
/3[47]\d{13}/ //lesson solution

//Match a full U.S. Phone Number: +1-(555)-555-5555
/+1-\(\d{3}\)-\d{3}-\d{4}/

//A date in the format: YYYY-MM-DD. YYYY can start with either 19 or 20 only. DD can be anything from 01 to 31, regardless of the month.
/(19|20)\d\d-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])/

//An integer between 0 and 255; This is difficult, remember to use the “alternation” (	) operator.

