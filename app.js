const AWS = require('aws-sdk')

AWS.config.update({ region: 'us-west-2' });

var cloudwatch = new AWS.CloudWatch();
var ec2 = new AWS.EC2();

ec2.describeVpcs({}, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else {
    var vpcCount = data.Vpcs.length
    console.log(vpcCount);           // successful response

    var params = {
      MetricData: [ /* required */
        {
          MetricName: 'vpc', /* required */
          Dimensions: [
            {
              Name: 'VPC', /* required */
              Value: 'count' /* required */
            },
          ],
          Timestamp: new Date(),
          Unit: 'Count',
          Value: vpcCount,
        },
      ],
      Namespace: 'prabhat-custom' /* required */
    };
    console.log(params)
    cloudwatch.putMetricData(params, function (err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else console.log(data);           // successful response
    });
  }
});

