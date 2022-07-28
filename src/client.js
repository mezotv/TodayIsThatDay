const { post } = require('./twit');
const data = require("./data/holidays.json");
const { text } = require("./data/text.json");
const { schedule } = require('node-cron')

// Cron calls the post holiday function every day at 12am local time 
 schedule("0 1 0 * * *", function () {
  post_Holiday()
});

 async function post_Holiday() {

    const today = new Date()

    const month = today.toLocaleString('en', { month: 'long' })
    const day = today.getDate()

    const text = text[Math.floor(Math.random() * (text.length))]

    const tweet = text + " " + data[month][day][Math.floor(Math.random() * (data[month][day].length))] + "!" + " " + "#Holiday #TodayIsThatDay"

  // Post the tweet with the furrent holiday   
 post('statuses/update', { status:  tweet }, function(err, data, response) {
 console.log(err)
})

}
