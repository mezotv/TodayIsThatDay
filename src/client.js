const Twitter = require('./twit');
const data = require("./data/holidays.json");
const texts = require("./data/text.json");
const { schedule } = require('node-cron')

 schedule("0 1 0 * * *", function () {
  post_Holiday()
});

 async function post_Holiday() {

    const today = new Date()

    const month = today.toLocaleString('en', { month: 'long' })
    const day = today.getDate()

    const text = texts.text[Math.floor(Math.random() * (texts.text.length))]

    const tweet = text + " " + data[month][day][Math.floor(Math.random() * (data[month][day].length))] + "!" + " " + "#Holiday #TodayIsThatDay"

    
Twitter.post('statuses/update', { status:  tweet }, function(err, data, response) {
 console.log(err)
})

}
