const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSSAGE_BODY';
const ADD_MESSAGE = 'ADD_MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                { message: 'Hi', like: '5' },
                { message: 'Hello', like: '10' },
            ],
            postText: '',
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Vanya' },
                { id: 2, name: 'Ksu' },
                { id: 3, name: 'Gleb' },
                { id: 4, name: 'Vasya' },
                { id: 5, name: 'Alisa' },],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'Hello' },
                { id: 3, message: 'Yo' },
                { id: 4, message: 'Hi' },
                { id: 5, message: 'Hi' },
            ],
            messageText: '',
        },
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    _callSubscriber() {
        console.log("Anything");
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            this._state.profilePage.posts.push({ message: this._state.profilePage.postText, like: 0 });
            this._state.profilePage.postText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_POST_TEXT) {
            this._state.profilePage.postText = action.text;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            this._state.dialogsPage.messages.push({ id: 6, message: this._state.dialogsPage.messageText});
            this._state.dialogsPage.messageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.messageText = action.text;
            this._callSubscriber(this._state);
        }
    }
}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updatePostTextActionCreator = (text) => {
    return {
        type: UPDATE_POST_TEXT,
        text: text,
    }
}
export const updateNewMessageBodyCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        text: text,
    }
}
export const addMessageCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}
export default store;