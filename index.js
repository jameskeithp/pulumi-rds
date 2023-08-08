"use strict";
const pulumi = require("@pulumi/pulumi");
const aws = require("@pulumi/aws");
const awsx = require("@pulumi/awsx");

const aws=requires('aws-sdk')

const config = new pulumi.Config();
const awsConfig = new aws.Config();

const dbInstanceIdentifier = "database-1"; // Replace with your RDS instance identifier

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.Bucket("my-bucket");

// Export the name of the bucket
exports.bucketName = bucket.id;
