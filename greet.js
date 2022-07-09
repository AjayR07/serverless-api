"use strict";

module.exports.greet = async(event)=>{
    return {
        statusCode: 200,
        headers: {contentType: 'text/plain'},
        body: "Hello, Welcome to serverless world!"
    }
}