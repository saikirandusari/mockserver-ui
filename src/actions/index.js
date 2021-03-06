export const FILTER_EXPANDED = 'FILTER_EXPANDED';

const filterExpanded = (expanded) => ({
    type: FILTER_EXPANDED,
    expanded: expanded
});

export const dispatchFilterExpanded = (expanded) => (dispatch) => {
    return dispatch(filterExpanded(expanded));
};

export const CONNECT_SOCKET = 'CONNECT_SOCKET';

const connectWebSocket = (host, port, contextPath) => ({
    type: CONNECT_SOCKET,
    host: host,
    port: port,
    contextPath: contextPath
});

export const connectSocket = (host, port, contextPath) => (dispatch) => {
    return dispatch(connectWebSocket(host, port, contextPath));
};

export const SEND_MESSAGE = 'SEND_MESSAGE';

const sendWebSocketMessage = (message, host, port) => ({
    type: SEND_MESSAGE,
    message: message,
    host: host,
    port: port,
});

export const sendMessage = (message, host, port) => (dispatch) => {
    return dispatch(sendWebSocketMessage(message, host, port));
};

export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED';

export const webSocketMessageReceived = (message) => ({
    type: MESSAGE_RECEIVED,
    entities: message
});

export const DISCONNECT_SOCKET = 'DISCONNECT_SOCKET';

const disconnectWebSocket = () => ({
    type: DISCONNECT_SOCKET
});

export const disconnectSocket = () => (dispatch) => {
    return dispatch(disconnectWebSocket());
};
