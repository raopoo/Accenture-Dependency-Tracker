// Import required AWS SDK clients and commands for Node.js
import { PublishCommand } from "@aws-sdk/client-sns";
import { snsClient } from "./notifClient";

// Set the parameters
var params = {
    Message: "this is my second test", // MESSAGE_TEXT
    TopicArn: "arn:aws:sns:ap-southeast-2:184074360023:LibraryUpdateTopic",
    //TOPIC_ARN
    aws_access_key_id: "AKIASVW5P2TLU7DHF",
    aws_secret_access_key: "3meDxmbIgnFmGdk7v0MiYkRBKkOajW2Fz1T+pe0S",
};

export const run = async () => {
    // console.log("hi");

    try {
        const data = await snsClient.send(new PublishCommand(params));

        console.log("Success.", data);
        return data; // For unit tests.
    } catch (err) {
        console.log("Error", err.stack);
    }
};
run();
