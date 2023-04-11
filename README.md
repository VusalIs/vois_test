HELLO :)

Thanks for the time to review the code.

I wanted to add some comments about my thinking process and thoughts on the test.

First of all, I would say handling html, css and js files as SPA isn't the best one. I spent most of my time thinking about how to handle it properly, but I would say the solution I came up with, wouldn't work that much since it serves the files a lot and any url change in the html files can break the codebase.

Other than that, I used simple repository pattern and didn't use service because it is relatively is project, and straight forward. 

I did couple of minor changes on the ```public/index.html``` in order to make the app work. In order to make it work as SPA, I would change ```<a></a>``` to ```<button></button>``` to avoid reloading. But still It wouldn't change the url problem in the backend If we don't use the view engine or html files.

It would be interesting to talk about what was thinking behind of this project, and how would the good solution look like.

If I have misunderstood something about the task, feel free to reach out to me. I am willing to rewrite the task. 

Hope to talk to you soon.

Best Regards,
Vusal Ismayilov