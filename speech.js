const params = BotChat.queryParams(location.search);

const user = {
    id: params['userid'] || 'userid',
    name: params['username'] || 'username'
};

const bot = {
    id: params['botid'] || 'botid',
    name: params['botname'] || 'botname'
};

const speechAPIKey = params['speechKey'] || '838cdd47beb448e5ba0bc588b30df15d';

const speechOptions = {
    speechRecognizer: new CognitiveServices.SpeechRecognizer({
        locale: 'ja-JP',
        subscriptionKey: speechAPIKey
    }),
    speechSynthesizer: new CognitiveServices.SpeechSynthesizer({
        gender: CognitiveServices.SynthesisGender.Female,
        subscriptionKey: speechAPIKey,
        voiceName: 'voice'
    })
};

BotChat.App({
    bot: bot,
    locale: params['locale'],
    resize: 'detect',
    // sendTyping: true,    // defaults to false. set to true to send 'typing' activities to bot (and other users) when user is typing
    speechOptions: speechOptions,
    user: user,

    directLine: {
        secret: params['secret'] // Your bot's directline secret
    }
}, document.getElementById('BotChatGoesHere'));