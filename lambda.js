const serverlessExpress = require('@vendia/serverless-express')
const lambda1 = require('./functions/function1/app')
const lambda2 = require('./functions/function2/app')

exports.handler1 = serverlessExpress({ app: lambda1 }).handler

exports.handler2 = serverlessExpress({ app: lambda2 }).handler
