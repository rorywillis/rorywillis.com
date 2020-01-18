Bundle size is important when deploying any client-side javascript, especially if a large percentage of your users visit on a mobile device. In this article series, I am going to talk about ways to reduce bundle size in a react project.

### Date & Time Packages

Manipulating date and time in any app is very common, but some of the most popular tools for doing so can put a strain on your bundle size. Two that come to mind are [Moment](https://www.npmjs.com/package/moment) and [react-datepicker](https://www.npmjs.com/package/react-datepicker). Let's look at some alternatives that that can often achieve the same goal.

###### Day.JS

[Dayjs](https://www.npmjs.com/package/dayjs) is a great alternative to Moment in many cases. It provides most of the same basic features out-of-the-box and weighs in at only 2KB! As a bonus, the API is very similar to Moment so the learning curve is very low.

###### React-Input-Mask

We often need to collect date and time information when creating forms in React. Reaching for a date picker package like [react-datepicker](https://www.npmjs.com/package/react-datepicker) might be the first instinct, but a simple input mask can often achieve the same result with a significantly smaller bundle size impact.

[React-Input-Mask](https://github.com/sanniassin/react-input-mask) is a great solution for react projects. It provides a dead-simple API for creating masks for dates, phone numbers, credit cards, or anything else.

### Lodash

There's a reason Lodash is the most popular utility library [according to npm.js](https://www.npmjs.com/browse/depended). It makes life so much easier! However, most of us are only using a handful of methods like get, set, and debounce, to name a few. So in our projects, we should only import those methods specifically instead of the entire library. 

To do this, you can search npm.js for a specific Lodash method and it will be available as a standalone package.

Here are a few examples:

- [get](https://www.npmjs.com/package/lodash.get)
- [set](https://www.npmjs.com/package/lodash.set)
- [debounce](https://www.npmjs.com/package/lodash.debounce)

Once you install these packages using NPM, you can import them like so:

`import get from "lodash.get";`

Now your bundle size has only increased slightly to accommodate that particular method instead of the entire library. Pretty nice, huh?

Thanks for reading  and stay tuned for the next part in this series!