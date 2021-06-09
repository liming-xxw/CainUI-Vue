import Message from './message.js'

Message.install = function(app){
    app.config.globalProperties.$message = Message
}

export {
    Message  
}

export default Message;