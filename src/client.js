const Twitter = require('./twit');
const data = require("./data/holidays.json");
const cron = require('node-cron')

 cron.schedule("0 1 0 * * *", function () {
  post_Holiday()
});

 async function post_Holiday() {

    const today = new Date()

    const month = today.toLocaleString('en', { month: 'long' })
    const day = today.getDate()

    const tweet = "Today is the" + " " + data[month][day][Math.floor(Math.random() * (data[month][day].length))] + "!" + " " + "#Holiday"

    
Twitter.post('statuses/update', { status:  tweet }, function(err, data, response) {
 console.log(err)
})

}
post_Holiday()