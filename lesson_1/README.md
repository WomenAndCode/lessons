<img src="http://www.womenandcode.org.s3-website.eu-central-1.amazonaws.com/WomenAndCode-header.png" alt="Women And Code" width=600px/>

# Introduction to JavaScript

You might find a more actual version of this document here: http://l1.womenandcode.org

## Lesson 1

Welcome to the exciting world of JavaScript! You will go through this program in small groups of 2-3 or on your own at home. If you get stuck, feel free to ask one of our mentors for help. We&#39;re here to make this experience a good one for you.

What you will need:

- a modern browser like Chrome or FireFox

Once you have completed Lesson 1 you can become a mentor for new coders. Explaining things to others will help you understand and remember the lessons, so don&#39;t be shy and help your fellow learners.

Go through these exercises at your own pace, there is no time limit. Feel free to repeat the exercises as often as you need to in order to remember and understand them.

The most important thing about this whole experience is: Have fun!

Happy coding!



# Exercise 1 - The Console

The browser console is a powerful tool not only for development, but also for learning. Our first couple of exercises will happen directly in your browser.

You can open the console by either right clicking into your browser window and selecting **Inspect** or by pressing **Ctrl+Shift+J** on Windows or Linux, and **Command+Opt+J** on MacOS. (Ctrl is Strg on German keyboards and Opt is Alt). In Windows you can also use F12 as shortcut.

Note: Please don&#39;t copy/paste the text from this document to the console, but type it yourself! This way you recognise and remember what you&#39;re actually writing.

# Exercise 2 - Numbers and Strings

Now let&#39;s do some math!
Try typing **2+2** into the console and press Enter.
Try out some other calculations and be as complex as you want! e.g. try multiplications or addition and multiplications together!

After you are satisfied that your console knows basic math, try entering your name into the console and press Enter.
Now you should see a red error message that says:
<span style="color:red">Uncaught ReferenceError: [name] is not defined.</span>
Why is that?

Your console distinguishes between Numbers, Strings and Variables.
Numbers are all … numbers :)
Strings are sequences of characters, in our case, your name. We tell our computer that the character sequence we entered is a string by adding &quot; &quot; around the word. You can also use single quotation marks if you like &#39; &#39;, but you cannot mix them.
Now try entering **&quot;yourname&quot;** into the console. No error now!
We will talk about variables in the next exercise.

For now, try this:
Enter **1 + 2** into the console.
Response: 3

Now enter **1 + &quot;2&quot;** into the console.
Response: 12

Why is that?

We just told our console to add the number 1 to the string 2. And because we can&#39;t do math with strings because they are just a sequence of characters, the console will create a string of 1 and 2.

Lets try something more complex:
Enter **&quot;My name is [name] and I am&quot; + 32 + &quot;years old&quot;**

To add spaces before and after the number, simply add them to the strings like so:
**&quot;My name is [name] and I am &quot; + 32 + &quot; years old&quot;**

Try some more combinations and try to do some math too!
**&quot;I am &quot; + (10 * 3 + 2) + &quot; years old&quot;;**

# Exercise 3 - Variables

Variables are containers to keep our numbers, strings and data. Let&#39;s try!

Enter:
**var myAge = 32**

Now type myAge. The number you entered should appear.

Enter:
**var myName = &quot;Anna&quot;**

Now type **myName** and &quot;Anna&quot; should appear.

Let&#39;s combine the two!
Enter:
**&quot;My name is &quot; + myName + &quot; and I am &quot; + myAge + &quot; years old&quot;**

Try out some more combinations! You can also save number and string combinations in a variable!



# DISCUSSION BREAK TIME!

Phew you have already learned the basic principles of programming: Number, Strings and Variables. Congratulations! Discuss the differences amongst your team members and don&#39;t forget to ask questions if you have them.

And don&#39;t forget to get up and walk around a little and talk to the other coders.



# Exercise 4 - Functions 1: Alerts

Hey, let&#39;s go back to the 90s! Remember alerts? Well, let&#39;s go back in time and create some :)

Enter:
**alert(&quot;This is an alert&quot;)**

Note: The console adds an &quot;undefined&quot; after you executed the command. For now you can ignore it!

A window should appear on your screen with the message in it.

Now create a string in a variable and create an alert with the variable.

**var alertMessage = &quot;This is an alert&quot;**
**alert(alertMessage)**

Try and combine Strings, Numbers and Variables to create fun and annoying alerts!

# Exercise 5 - Functions 2: replace

You have now learnt one built in function called &#39;alert&#39;. JavaScript has another function called &#39;replace&#39; that takes a value and replaces it with either nothing or a new string.
The replace function takes two values: the characters to take out and the characters you want to swap in instead.

Create a variable that has a whole sentence as a value.
Example:
**var sentence = &quot;I like flowers&quot;**

Now replace flowers with something else you like:
**sentence.replace(&#39;flowers&#39;, &#39;heavy metal&#39;)**

Now type in your variable name and press enter to view the changed string.



Now play around with everything you learned today! Create strings, add them together, replace words, do some math and create tons of alerts!

If you find anyone who is still struggling with a concept you already understand: Help them understand.



# Additional Exercise - HTML

In case you **finished** these exercises waaaay before your fellow coders, create an HTML file with all the usual things you need to display a website (your mentors can help you if you need them) and add &lt;script&gt; &lt;/script&gt; tags at the end of the &lt;body&gt;

Now try and recreate these exercises in the browser.

You will need a text editor to edit HTML and JS files! You can use every text editor program you like but we recommend the following, because they have nice tools for developers. Try either:

- Sublime
- Atom
- Visual Studio

The template for every HTML file on the Internet is:

<pre>
&lt;!Doctype html&gt;
&lt;html&gt;
    &lt;head&gt;&lt;/head&gt;
    &lt;body&gt;&lt;/body&gt;
&lt;/html&gt;
</pre>

You can add the script tag in the body:

<pre>
&lt;!Doctype html&gt;
&lt;html&gt;
  &lt;head&gt;&lt;/head&gt;
  &lt;body&gt;
    &lt;script&gt;
      **add your code here;**
      **use semicolons between commands;**
    &lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
</pre>

Save this file as \*.html to your computer and open it in your browser.

To write to the developer console you already know from the last exercises use:
**console.log(&quot;my text shown in console&quot;);**

Hint: Use reload of your HTML file so see your changes.



We hope you had fun with your first look into JavaScript!

