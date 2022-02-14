const S3 = require("aws-sdk/clients/s3");
const fs = require("fs");
const {
  awsRegion,
  awsAccessKeyId,
  awsSecretKey,
  awsBucketName,
} = require("../configs/aws.config");

const s3 = new S3({
  region: awsRegion,
  accessKeyId: awsAccessKeyId,
  secretAccessKey: awsSecretKey,
});

// uploads a file to s3
function uploadFile(file) {
  const fileStream = fs.createReadStream(file.path);

  const uploadParams = {
    Bucket: awsBucketName,
    Body: fileStream,
    Key: file.filename,
  };
  return s3.upload(uploadParams).promise();
}

module.exports = {
  uploadFile,
};
