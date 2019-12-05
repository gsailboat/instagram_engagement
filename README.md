This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

When running this project, just clone it and type ```yarn start``` into the main directory and it should run.

Simply put, the app takes in usernames and an aggregate boolean and produces engagement data based off of the user.

A couple drawbacks include the API not being able to get private account data outside of follower and following numbers. Additionally, if you were trying to get aggregate data and one of the accounts is not valid, as the API should, it returns and invalid data response. So potentially making a way for the user to edit each username (which is possible) would be a better way.

Also, the setTimeout in getCall should take care of 202 (not completed) status calls and did for most of my testcases, but if a large number of usernames were being pulled from the request, I could potentially see this never showing any data considering my conditional is ```if (req.status === 200)```

As for UI/UX, there are a couple minor changes that would help. First of all, the only aspect that is producing the data required for the POST request is directly based off the user's input. If they were to say put two spaces/newlines as opposed to one. That would result in an invalid user call. Additionally, adding more design/color would make this more fun but not a neccessity in my eyes as I see this frontend as more of an administrative tool.

Also, I used axios for API calls. Considering all the options out there for this functionality, axios is very quick and easy to pick up. Ant Design is also a great styling library. JavaScript seemed like the fast easy way to go about this, but TypeScript in almost case where data is sensitive and needs optimization, TypeScript will be a good choice.
