# VPC count as cloudwatch custom metric

The lambda function will get the existing number of VPCs and push it as  custom metric in cloudwatch. This can be used to minor total number of VPCs in the region and can be compared to allocated VPCs (You can get it from ServiceQuota APIs) and send notifications to make requests to AWS for increasing your VPC limits.