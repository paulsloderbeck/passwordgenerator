# passwordgenerator
random password generator using javascript

This project involved building a random password generator using javascript. The requirements were to allow the user to select lower case, upper case, numbers, special chracters, or any combination of those four. Password length should be between 8 and 128 characters. 

The user is first prompted for the length of the password through a selectLength function. If the user returns a value less than 8 characters or over 128 characters, a conditional loop prompts them for another value. The user is then asked through a series of four confirm statements what characters they would like to include. If all four boolean values are false, the user is told that they must select a chracter type, and the page reloads.

The selectString function then uses a series of if else conditionals for every possible combination of boolean values to select myString, which will be used in selecting the password. Four global constant strings of lower case characters, upper case characters, numbers, and special characters are concatenated based on the boolean values of the user's responses. 

The generate password function then uses a for loop and a math.random function multiplied by the length of the string plus one and rounded down through math.floor. That number is used to select a random index from the string to add to the password variable, up until the length of the password is reached. 

The password is returned and written to the password input via the writePassword function.

See the finished product at https://paulsloderbeck.github.io/passwordgenerator/ 
