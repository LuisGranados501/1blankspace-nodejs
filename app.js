/* https://www.npmjs.org/package/node-schedule
 * 0 = Sunday
 * rule.dayOfWeek = [0, new schedule.Range(4, 6)];
 * hour is 24 hour format

 * mydigitalstructure.send(options, data, callback)
 */

var mydigitalstructure = require('mydigitalstructure')

mydigitalstructure.init(mydigitalstructure.logon(main))

function main(err, data)
{
	if (mydigitalstructure.data.session.status = "OK")
	{
		var schedule = require('node-schedule');

		var rule = new schedule.RecurrenceRule();
		rule.dayOfWeek = [new schedule.Range(0, 6)];
		rule.hour = 17; //5PM
		rule.minute = 0;

		mydigitalstructure.data.schedule = schedule.scheduleJob(rule, function()
		{
		    mydigitalstructure.send(
			{
				hostname: 'app.coding.lab.ibcom.biz',
				path: '/rpc/logon/?method=LOGON'

			}, 'name=value');
		});
	}	
}